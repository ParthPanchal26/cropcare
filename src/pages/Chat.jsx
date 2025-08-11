import { useEffect, useRef, useState } from 'react';
import fileIcon from '../assets/file.png';
import axios from 'axios';
import ReactMarkdown from "react-markdown";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";

const Chat = () => {
  
  const [messages, setMessages] = useState([
    {
      text: "Hello, How can I help you today? For better answers make sure to tell me in which language should i answer. English is default!",
      sender: "bot"
    }
  ]);

  const [input, setInput] = useState("");
  const [base64Image, setBase64Image] = useState(null);
  const [previewImg, setPreviewImg] = useState(null);
  const [loading, setLoading] = useState(false);

  const server = import.meta.env.VITE_SERVER;
  const scrollRef = useRef(null);

  const resizeAndConvertToBase64 = (file) => {
    return new Promise((resolve, reject) => {
      const img = new Image();
      const reader = new FileReader();

      reader.onload = (e) => {
        img.src = e.target.result;
      };

      img.onload = () => {
        const canvas = document.createElement("canvas");
        const ctx = canvas.getContext("2d");
        const size = 512;
        canvas.width = size;
        canvas.height = size;
        ctx.drawImage(img, 0, 0, size, size);
        const resizedBase64 = canvas.toDataURL("image/jpeg", 0.8);
        resolve(resizedBase64);
      };

      img.onerror = (err) => {
        reject(err);
      };

      reader.readAsDataURL(file);
    });
  };

  const handleChange = async (e) => {
    const selectedFile = e.target.files[0];
    if (selectedFile) {
      setPreviewImg(URL.createObjectURL(selectedFile));
      try {
        const resizedBase64 = await resizeAndConvertToBase64(selectedFile);
        setBase64Image(resizedBase64);
      } catch (err) {
        console.error("Image resize error:", err);
        setBase64Image(null);
      }
    }
    e.target.value = "";
  };

  const handleSend = async () => {
    if (!input && !base64Image) return;

    const userMsg = { text: input || "", image: previewImg || null, sender: "user" };
    setMessages((prev) => [...prev, userMsg]);

    setLoading(true);

    try {
      const payload = {
        text: input || "",
        imageBase64: base64Image || null,
      };

      const response = await axios.post(`${server}/upload`, payload, {
        headers: {
          'Content-Type': 'application/json',
        },
      });

      const botReply = response.data.explanation || "No explanation received.";
      setMessages((prev) => [...prev, { text: botReply, sender: "bot" }]);
    } catch (error) {
      console.error(error);
      setMessages((prev) => [
        ...prev,
        { text: "Upload failed. Please try again.", sender: "bot" }
      ]);
    } finally {
      setLoading(false);
      setBase64Image(null);
      setInput("");
      setPreviewImg(null);
    }
  };

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages]);

  return (
    <section className="max-w-5xl w-full mx-auto h-[80vh] flex flex-col px-4">
      <div
        className="flex-1 overflow-y-auto space-y-4 px-0 py-2 rounded-lg"
        ref={scrollRef}
      >
        {messages.map((msg, index) => (
          <div
            key={index}
            className={`px-4 py-3 rounded-lg shadow break-words ${msg.sender === "user"
                ? "bg-slate-800 text-white ml-auto max-w-[90%] sm:max-w-[70%] md:max-w-[90%] border-r-6 border-gray-500 transition hover:bg-slate-900"
                : "bg-gray-700 text-white self-start max-w-[90%] sm:max-w-[70%] md:max-w-[90%] border-l-6 border-slate-800 transition hover:bg-gray-600"
            }`}
          >
            {msg.image && (
              <img
                src={msg.image}
                alt="uploaded"
                className="w-full max-w-[200px] sm:max-w-[150px] md:max-w-[120px] h-auto object-cover mb-2 rounded"
              />
            )}

            <ReactMarkdown
              components={{
                p: ({ children }) => (
                  <p className="mb-3 text-justify">{children}</p>
                ),
                code({ inline, className, children }) {
                  const match = /language-(\w+)/.exec(className || "");
                  const codeContent = String(children).trim();
                  return !inline && match ? (
                    <div className="relative">
                      <button
                        className="absolute top-2 right-2 bg-gray-600 text-white px-2 py-1 text-xs sm:text-sm rounded hover:bg-gray-900"
                        onClick={() =>
                          navigator.clipboard.writeText(codeContent)
                        }
                      >
                        Copy
                      </button>
                      <SyntaxHighlighter
                        language={match[1]}
                        PreTag="div"
                        className="rounded-sm"
                      >
                        {codeContent}
                      </SyntaxHighlighter>
                    </div>
                  ) : (
                    <code className="bg-gray-800 text-white p-1 rounded-sm text-xs sm:text-sm">
                      {children}
                    </code>
                  );
                },
              }}
            >
              {msg.text}
            </ReactMarkdown>
          </div>
        ))}

        {loading && (
          <div className="px-4 py-3 rounded-lg bg-gray-700 text-white max-w-[70%] self-start">
            Let CropCare think about this... wait for a while!
          </div>
        )}
      </div>

      <div className="flex flex-wrap gap-2 p-3 bg-white rounded-lg mt-2 sticky bottom-0">
        <input
          type="file"
          accept="image/*"
          id="fileInput"
          onChange={handleChange}
          className="hidden"
        />
        <label htmlFor="fileInput" className="flex-shrink-0">
          <img
            src={fileIcon}
            alt="file"
            className="w-10 h-10 bg-slate-950 rounded-full cursor-pointer"
          />
        </label>

        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          className="flex-1 mr-[-10px] px-4 py-2 rounded-md rounded-r-none outline-0 bg-gray-200 text-sm sm:text-base"
          placeholder="Type your message..."
        />

        <button
          onClick={handleSend}
          className="bg-gray-700 text-white px-4 sm:px-6 py-2 rounded-sm rounded-l-none transition-all hover:bg-slate-950 font-semibold text-sm sm:text-base"
        >
          Send
        </button>
      </div>

      {previewImg && (
        <div className="p-2">
          <img
            src={previewImg}
            alt="preview"
            className="w-full max-w-[200px] sm:max-w-[150px] h-auto mt-2 rounded"
          />
        </div>
      )}
    </section>
  );
};

export default Chat;

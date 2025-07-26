import { Chat } from "./pages/";
import { Navbar } from "./components/";

const App = () => {

  return (
    <div className="flex flex-col items-center">
      <Navbar />
      <Chat />
    </div>
  );
};

export default App;

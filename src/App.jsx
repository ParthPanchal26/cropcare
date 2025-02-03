import { BrowserRouter, Route, Routes } from "react-router";
import {Navbar, Home, Chat} from './components'
import { useSelector } from "react-redux";

const App = () => {

  const updateNav = useSelector((state) => state.navbar.value)

  return (
    <BrowserRouter>
      <Navbar updateNav={updateNav} />
      <Routes>
        <Route path='/cropcare/' exact element={<Home />} />
        <Route path='/cropcare/chat/' exact element={<Chat />} />
      </Routes>
    </BrowserRouter>    
  )
}

export default App
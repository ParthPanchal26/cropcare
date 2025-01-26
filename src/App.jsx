import React from 'react'
import { BrowserRouter, Route, Routes } from "react-router";
import {Navbar, Home, Chat, AboutUs} from './components'
const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path='/cropcare/' exact element={<Home />} />
        <Route path='/cropcare/chat/' exact element={<Chat />} />
      </Routes>
    </BrowserRouter>    
  )
}

export default App
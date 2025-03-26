import React, { useState } from 'react'
import { Link } from 'react-router'
import cropcare from '../../assets/cropcare.svg'

const Navbar = () => {

  const [isNavOpen, setIsNavOpen] = useState(false)

  const handlePopUp = () => {
    setIsNavOpen(!isNavOpen)
  }


  return (
    <nav className=''>
      <section className='flex justify-around items-center m-2'>

        <Link to="/cropcare/"><img src={cropcare} alt="./cropcare.svg" className='hover:cursor-pointer' /></Link>

        <button onClick={handlePopUp} type="button" className="inline-flex justify-center h-15 items-end hover:cursor-pointer">
          {isNavOpen ? <i className='material-icons'>close</i> : <i className='material-icons'>menu</i>}
        </button>
      </section>

      <div style={{ boxShadow: "0 0 3px gray" }} className={`mb-1 rounded w-80 m-auto text-center font-semibold text-xl flex flex-col transition-all ${isNavOpen ? 'block' : "hidden"}`} id='pop-up'>
        <Link onClick={handlePopUp} to="/cropcare/" className='list-none transition-all py-3 mx-8 mt-2 hover:underline underline-offset-2 hover:cursor-pointer'>Home</Link>
        <Link onClick={handlePopUp} to="/cropcare/chat/" className='list-none transition-all py-3 mx-8 mt-2 hover:underline underline-offset-2 hover:cursor-pointer'>Chat</Link>
        <Link onClick={handlePopUp} to="/cropcare/login/" className='list-none transition-all py-3 mx-8 mt-2'><button className='w-[187px] h-[67px] bg-[#0F785B] rounded-[45px] py-3 px-12 text-white transition-all hover:bg-[#16C222] hover:cursor-pointer'>Login</button></Link>
        <Link onClick={handlePopUp} to="/cropcare/login/" className='list-none transition-all py-3 mx-8 mt-2'><button className='w-[187px] h-[67px] bg-white border border-[#1EB494] rounded-[45px] py-3 px-12 text-black transition-transform hover:bg-black hover:text-white hover:cursor-pointer'>Sign Up</button></Link>
      </div>

    </nav >
  )
}

export default Navbar
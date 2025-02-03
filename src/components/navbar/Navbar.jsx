import { useState } from 'react';
import { Link, useNavigate } from 'react-router';
import './Navbar.css';

const Navbar = ({ updateNav }) => {

  const [nav, setNav] = useState(updateNav);

  const navItems = [
    {
      name: 'Home',
      slug: '/cropcare/',
    },
    {
      name: 'Chat',
      slug: '/cropcare/chat'
    },
  ]

  const navigate = useNavigate();

  const handleNavIn = () => {
    setNav(!nav)
    navigate("/cropcare/chat")
  }

  const handleNavOut = () => {
    setNav(!nav)
    navigate("/cropcare/")
  }

  return (
    <nav>
      <img src="cropcare.svg" alt="" />

      {nav && nav
        ?
        <div className="profile_nav">
          <span className='profile_nav_item'><Link style={{textDecoration: 'none', color: 'white', wordWrap: 'break-word'}} to={'/cropcare/'}>Home</Link></span>
          <span className='profile_nav_item'><Link style={{textDecoration: 'none', color: 'white', wordWrap: 'break-word'}} to={'/cropcare/chat'}>Chat</Link></span>
          <button className='login logout' onClick={handleNavOut}>Logout</button>
          <span className='profile_nav_item'><img className='profile_icon' src="./profile.png" alt="" /></span>
        </div>
        :
        <div className="section-2">
          <ul>
            {navItems.map((item) => (
              <span key={item.name} className='navlink'>
                <Link style={{ marginInline: '10px', textDecoration: 'none', width: 67, height: 47, color: 'black', fontSize: 24, fontFamily: 'ABeeZee', fontWeight: '500', wordWrap: 'break-word' }} to={item.slug}>{item.name}
                </Link>
              </span>
            ))}
          </ul>

          <button className='login' onClick={handleNavIn}>Log In</button>
          <button className='signup'>Sign up</button>
        </div>
      }

    </nav>
  )

}

export default Navbar
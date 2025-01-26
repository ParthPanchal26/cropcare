import { Link } from 'react-router'
import './Navbar.css'
const Navbar = () => {

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

  return (
    <nav>
      <img src="cropcare.svg" alt="" />

      <div className="section-2">
        <ul>
          {navItems.map((item) => (
            <span key={item.name} className='navlink'>
              <Link style={{ marginInline: '10px', textDecoration: 'none', width: 67, height: 47, color: 'black', fontSize: 24, fontFamily: 'ABeeZee', fontWeight: '500', wordWrap: 'break-word' }} to={item.slug}>{item.name}
              </Link>
            </span>
          ))}
        </ul>

        <button className='login'>Log In</button>
        <button className='signup'>Sign up</button>
      </div>

    </nav>
  )

}

export default Navbar
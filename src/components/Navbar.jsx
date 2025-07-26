import cropcare from '../assets/cropcare.png';

const Navbar = () => {
  return (
    <nav className='w-full pl-[10%]'>
        <img src={cropcare} alt="cropcare" className='w-[150px] sm:w-[200px]'/>
    </nav>
  )
}

export default Navbar
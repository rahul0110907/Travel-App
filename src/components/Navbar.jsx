import React from 'react'
import '../style/Navbar.css';
import logo from '../assestes/images.png'
import { Link } from 'react-router-dom';


const Navbar = () => {
  return (
    <div >
      <nav className='navbar'>
        <div className='logo'>
         <Link to='/'><img src={logo} alt='logo' style={{width:'20px' ,height:'20px'}} /> Travel.Net</Link>
        </div>
        <div className='nav'>
          <ul className='navList'>
            <Link to='/'><li>Home</li></Link>
            <Link to='/Packages'><li>Packages</li></Link>
            <Link to='/Hotel'><li>Hotels</li></Link>
            <Link to='/About'><li>About</li></Link>
              <Link to='/News'><li>News</li></Link>
            <Link to='/Contact'><li>Contact</li></Link>
              </ul>
              </div>
              <div className='book'>
                <Link to='/BookNow'><button>Book Now</button></Link>
                 </div>

      </nav>
      
    </div>
  )
}

export default Navbar

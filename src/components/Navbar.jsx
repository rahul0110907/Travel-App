import React, { useState } from 'react'
import '../style/Navbar.css';
import logo from '../assestes/images.png'
import { Link } from 'react-router-dom';
import MenuOutlinedIcon from '@mui/icons-material/MenuOutlined';
import CloseOutlinedIcon from '@mui/icons-material/CloseOutlined';


const Navbar = () => {
  const [isActive, setIsActive] = useState(false);
  const toggleActiveClass = () => {
    setIsActive(!isActive);
  };
    //clean up function to remove the active class
    const removeActive = () => {
      setIsActive(false)
    }
 
    const goTop = () => {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    };

  return (
     <nav className="navbar">
    
        <div className="logo">
        <Link to='/'><img src={logo} alt='logo' style={{width:'20px' ,height:'20px'}} onClick={goTop} /> Travel.Net</Link>
        </div>
        <div className='menu-icon' onClick={toggleActiveClass}>
          {
            isActive?<CloseOutlinedIcon/>: <MenuOutlinedIcon />
          }
    
       </div>
        <div >
           <ul className='nav-elements'>
          <Link to='/'><li onClick={removeActive}>Home</li></Link>
          <Link to='/Packages'><li onClick={removeActive}>Packages</li></Link>
          <Link to='/Hotel'><li onClick={removeActive}>Hotels</li></Link>
           <Link to='/About'><li onClick={removeActive}>About</li></Link>
              <Link to='/News'><li onClick={removeActive}>News</li></Link>
            <Link to='/Contact'><li onClick={removeActive}>Contact</li></Link>
          </ul>
        </div>
        <div>
          {
isActive &&(
  <ul className='mobile-menu'>
  <Link to='/'><li onClick={removeActive}>Home</li></Link>
  <Link to='/Packages'><li onClick={removeActive}>Packages</li></Link>
  <Link to='/Hotel'><li onClick={removeActive}>Hotels</li></Link>
   <Link to='/About'><li onClick={removeActive}>About</li></Link>
   <Link to='/News'><li onClick={removeActive}>News</li></Link>
    <Link to='/Contact'><li onClick={removeActive}>Contact</li></Link>
  </ul>
)
          }
         
        </div>
        <div className='book'>
                <Link to='/BookNow'><button>Book Now</button></Link>
                 </div>
    
    </nav>
   
        
     
  
  )
}

export default Navbar

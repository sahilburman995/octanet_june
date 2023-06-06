import React from 'react'
import { NavLink } from 'react-router-dom'
import HomeIcon from '@mui/icons-material/Home';
import ContactlessIcon from '@mui/icons-material/Contactless';
import InfoIcon from '@mui/icons-material/Info';
import logo4 from './logo4.jpg'
import '../../src/home.css'
const Header = () => {
  return (
   
       <header className='header'>

<nav className='navbar'>
       
   <ul className='uli'>
   
        <li className='list'>  <NavLink to="/">      <HomeIcon/>   Home </NavLink></li>
        <li className='list'> <NavLink to="/about">  <ContactlessIcon/> About</NavLink></li>
        <li className='list'>  <NavLink to="/contact"> <InfoIcon/>   Contact</NavLink> </li>
   
       
    </ul>
</nav>

</header>
    
  )
}

export default Header

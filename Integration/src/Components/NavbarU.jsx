

// import React, { useState } from 'react';
// import { Link } from 'react-router-dom';
// import './Navbar.css';

// const NavbarUser = () => {
//   const [dropdownVisible, setDropdownVisible] = useState(false);

//   const toggleDropdown = () => {
//     setDropdownVisible(!dropdownVisible);
//   };

//   return (
//     <nav className='Desktopnavbar'>
//       <img src='' alt='logo' className='logo'/>
//       <button className="dropdownBtn" onClick={toggleDropdown}>
//         {dropdownVisible ? 'X' : '☰'}
//       </button>
//       <div className={`Navbaritems ${dropdownVisible ? 'show' : ''}`}>
//         <Link to="/portfolio" className='deskTopitems'>Portfolio</Link>
//         <Link to="/about" className='deskTopitems'>About</Link>
//         <Link to="/services" className='deskTopitems'>Services</Link>
//         <Link to="/contact" className='deskTopitems'>Contact</Link>
//       </div>
//       <button className='desktopBtn'>
//         <img src='{logo}' alt='' className='desktopImg'/>Login/Signup
//       </button>
//     </nav>
//   );
// };

// export default NavbarUser;

import { useState } from "react";
import "./Navbar.css";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import Login from "./Login";


function NavbarU() {
  const [active, setActive] = useState(false);
  const navigate = useNavigate();
  const handleEvent = () => {
    navigate('/Event'); 
};
const handleAdminAddevent = () => {
  navigate('/AdminAddevent'); 
};
  

  const navToggle = () => {
    setActive(!active);
  };
  

  return (
    <nav className={`nav ${active ? "nav__active" : ""}`}>
      <div className="Navbarlogo">Festivease</div>
      <div onClick={navToggle} className={`nav__toggler ${active ? "toggle" : ""}`}>
        <div className="line1"></div>
        <div className="line2"></div>
        <div className="line3"></div>
      </div>
      <ul className={`Nav-menu ${active ? "show" : ""}`}>
        <li className="Navbaritems">
          <a href="/Home" className="Navdivisions">Home</a>
        </li>
        <li className="Navbaritems">
          <a href="/AdminAddevent" className="Navdivisions">Add-Events</a>
        </li>
        <li className="Navbaritems">
          <a href="/AdminviewEvents" className="Navdivisions">View-Events</a>
        </li>
        <li className="Navbaritems">
          <a href="/AdminBookings" className="Navdivisions">Bookings</a>
        </li>
        <li className="Navbaritems">
          <a href="#" className="Navdivisions">Contact</a>
        </li>
        <li className="Navbaritems">
          <a href="/" className="Navdivisions">Logout</a>
        </li>
      </ul>
    </nav>
  );
}

export default NavbarU;

import { useState } from "react";
import "./Navbar.css";

// import { Link } from "react-router-dom";
// import Login from "./Login";


function NavbarUser() {
  const [active, setActive] = useState(false);
  
  
  

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
          <a href="/HomeUser" className="Navdivisions">Home</a>
        </li>
        <li className="Navbaritems">
          <a href="/UserAllevents" className="Navdivisions">All events</a>
        </li>
        <li className="Navbaritems">
          <a href="/UserBookingevent" className="Navdivisions">Book-event</a>
        </li>
        <li className="Navbaritems">
          <a href="/MyBookings" className="Navdivisions">My Bookings</a>
        </li>
        <li className="Navbaritems">
          <a href="/" className="Navdivisions">Logout</a>
        </li>
      </ul>
    </nav>
  );
}

export default NavbarUser;

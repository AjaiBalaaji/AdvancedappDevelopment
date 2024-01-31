import React, { useState } from 'react';
import './LandingPage.css';
import Waving from './Waving.jsx';
import { Link } from 'react-router-dom';
import { useEffect } from 'react';



const Homepage = () => {
    useEffect(() => {
        const bodyStyle = document.body.style;
        bodyStyle.backgroundImage = "linear-gradient(135deg, rgba(43,171,217,1) 0%, rgba(0,130,200,1) 100%)";
        bodyStyle.backgroundSize = 'cover';
        bodyStyle.backgroundRepeat = 'no-repeat';
        bodyStyle.backgroundAttachment = 'fixed';
        bodyStyle.backgroundPosition = 'center center';
    
        return () => {
            bodyStyle.backgroundImage = "";
        };
    }, []);
  

  return (
    <div className='LandingPageHead'>
      <div className="LandingPage">
        <div className="LandingPagetitle"><Waving/></div>
        <div className="LandingPagesubtitle">Your Event, Our Creativity - A Perfect Match!</div>
        <div className="btns">
            <Link to="/Login">
          <button >User</button>
          </Link>
          <Link to="/AdminLogin">
          <button>Admin</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Homepage;

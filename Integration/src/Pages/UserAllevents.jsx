// // import React from 'react'
// import NavbarUser from '../Components/NavbarUser';
// import './AdminviewEvents.css';
// // import { FaInfoCircle } from 'react-icons/fa';
// // import { IoInformationCircle } from 'react-icons/io';
// import { Link } from 'react-router-dom';


// const UserAllevents = () => {
//   return (
//     <div className='AdminviewEvents'>
//         <NavbarUser/>
//         <div className="container">
//     <section className="section">
    
//         <div className="image"><img src="https://as2.ftcdn.net/v2/jpg/06/88/80/21/1000_F_688802180_JegVYxO5pWFbmYp7NlUEcuTWfydFwX4l.jpg" alt="Image 1"/></div>
//         <div className="content">
        
//             <span className='ViewEventTitle'>Let's light the candles and celebrate this special day of your life!!!</span>
//             <p>Are you passionate about fun and celebration? Join us for an unforgettable birthday bash and embark on a journey of joy and unforgettable memories. Bring your enthusiasm, your sense of adventure, and your best true self to the party!</p>
            
//         </div>
//     </section>
//     <section className="section reverse">
//         <div className="image"><img src="https://as2.ftcdn.net/v2/jpg/02/70/54/89/1000_F_270548937_Cl5Ky2ljuoTCnP92T5BtLlct4hzaBkxD.jpg" alt="Image 2"/></div>
//         <div className="content-reverse">
//             <span className='ViewEventTitle'>Tie the Knot in Paradise – Where Your Dream Destination Awaits...</span>
//             <p>you can experience unique opportunities to realize your dream wedding, infusing it with your personal style, cultural touches, and unforgettable moments. we'll craft a celebration that takes your love story wherever you've always imagined.</p>
            

//         </div>
//     </section>
//     <section className="section">
    
//         <div className="image"><img src="https://as2.ftcdn.net/v2/jpg/06/54/75/79/1000_F_654757968_a4xnBistK7yAzCFGHoPUEMphCrLzPNQu.jpg" alt="Image 1"/></div>
//         <div className="content">
        
//             <span className='ViewEventTitle'>Sangeet Nights: Where Beats Meet Rituals and Hearts Dance in Unison</span>
//             <p>Are you passionate about fun and celebration? Join us for an unforgettable birthday bash and embark on a journey of joy and unforgettable memories. Bring your enthusiasm, your sense of adventure, and your best true self to the party!</p>
//             <Link to="/UserBookingevent"><button className=''>Book</button></Link>
//         </div>
//     </section>
//     <section className="section reverse">
//         <div className="image"><img src="https://as2.ftcdn.net/v2/jpg/01/01/26/97/1000_F_101269753_ov0fUeerCiqyqV8qtQJqvHVM3mTLa7aE.jpg" alt="Image 2"/></div>
//         <div className="content-reverse">
//             <span className='ViewEventTitle'>Echoes of Tradition – Perfectly Planned Ear Piercing Ceremonies</span>
//             <p>you can experience unique opportunities to realize your dream wedding, infusing it with your personal style, cultural touches, and unforgettable moments. we'll craft a celebration that takes your love story wherever you've always imagined.</p>
            

//         </div>
//     </section>
    
// </div>

//     </div>
//   );
// };

// export default UserAllevents


import React, { useState, useEffect } from 'react';
import NavbarUser from '../Components/NavbarUser';
import './UserAllevents.css';
import axios from 'axios';
import { Link } from 'react-router-dom';

const UserAllevents = () => {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    const fetchEvents = async () => {
      try {
        const response = await axios.get("http://localhost:8080/addevent/showallevents", {
          headers: {
            Authorization: `Bearer ${localStorage.getItem('token')}`, // Adjust as necessary
          },
        });
        setEvents(response.data);
      } catch (error) {
        console.error("Error fetching events:", error);
      }
    };
    fetchEvents();
  }, []);
  useEffect(() => {
    const bodyStyle=document.body.style;
    bodyStyle.backgroundImage = "url('https://as2.ftcdn.net/v2/jpg/01/68/80/23/1000_F_168802319_VcCvEoueeqvv945oA6MOG9alUv7eCPIY.jpg')"; 
    bodyStyle.backgroundSize = 'cover';
    bodyStyle.backgroundRepeat = 'no-repeat';
    bodyStyle.backgroundAttachment = 'fixed';
    bodyStyle.backgroundPosition = 'center center';
    return () => {
        document.body.style.backgroundImage = ""; 
    };
  }, []);

  return (
    <div className='AdminviewEvents'>
        <NavbarUser/>
        <div className="AdminviewEventscontainer">
            {events.length > 0 ? (
              events.map((event, index) => (
                <section className={`section ${index % 2 === 0 ? '' : 'reverse'}`} key={event.eventxid}>
                    <div className="image">
                        <img src={event.imageUrl || "https://as2.ftcdn.net/v2/jpg/00/33/39/55/1000_F_33395539_4xFpEgutjCeeiMdwXfkDFf7yiXcP0RVu.jpg"} alt={`Event ${index + 1}`} />
                    </div>
                    <div className={`${index % 2 === 0 ? 'content' : 'content-reverse'}`}>
                        <span className='ViewEventTitle'>{event.eventtype}</span>
                        <h1><b>{event.description}</b></h1>
                        <p><b>Participants Count:</b>{event.participantcount}</p>
                        <p><b>Charges:</b>{event.charge}</p>
                        <p><b>Package:</b>{event.eventpackage}</p>
                        <Link className="BookEventButton" to="/UserBookingevent"><button>Book</button></Link>
                    </div>
                </section>
              ))
            ) : (
              <p>No events found.</p>
            )}
        </div>
    </div>
  );
};

export default UserAllevents;

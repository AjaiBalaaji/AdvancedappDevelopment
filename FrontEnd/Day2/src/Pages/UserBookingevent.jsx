import React from 'react'
import './UserBookingevent.css';
import NavbarUser from '../Components/NavbarUser'
import HomeUser from '../Components/Homeuser';
import { useState,useEffect } from 'react';

const UserBookingevent = () => {
    const [name,setEmail]=useState("");
    const [subdate,setsubdate]=useState("");
    const [desc,setdesc]=useState("");
    const [eventtype,seteventtype]=useState("");
    const [eventdate,seteventdate]=useState("");
    const [headcount,setheadcount]=useState("");
    const handleSubmit = async(event) =>
    {
        event.preventDefault();
    }
    useEffect(() => {
        const bodyStyle=document.body.style;
        bodyStyle.backgroundImage = "url('https://as1.ftcdn.net/v2/jpg/01/03/21/62/1000_F_103216204_vK4a4jFoOli4BjZMuovGGwkTM1NFnGnZ.jpg')"; 
        bodyStyle.backgroundSize = 'cover';
        bodyStyle.backgroundRepeat = 'no-repeat';
        bodyStyle.backgroundAttachment = 'fixed';
        bodyStyle.backgroundPosition = 'center center';
        return () => {
            document.body.style.backgroundImage = ""; 
        };
    }, []);
  return (
    <div className='UserBookingevent'>
        <NavbarUser/>
        <form className='Bookevent' onSubmit={handleSubmit}>
                <h1 className='BookeventTitle'>Unforgettable Experiences Await! Book Your Spot Now and Create Memories That Last a Lifetime.</h1>
                <input type="text" value={name} onChange={(event) => setEmail(event.target.value)} placeholder="Email" />
                <input type="date" value={subdate} onChange={(event) => setsubdate(event.target.value)} placeholder="Submission-date" />
                <input type="text" value={desc} onChange={(event) => setdesc(event.target.value)} placeholder="Description" />
                <input type="text" value={eventtype} onChange={(event) => seteventtype(event.target.value)} placeholder="Event-type" />
                <input type="date" value={eventdate} onChange={(event) => seteventdate(event.target.value)} placeholder="Event-date" />
                <input type="number" value={headcount} onChange={(event) => setheadcount(event.target.value)} placeholder="Head-Count" />
                <button className='Bookeventbutton'>Book Event</button>
        </form>
        
        <div className='BookEventRight'>
                {/* <img src='https://i.gifer.com/Rrq1.gif' alt=''/> */}
            </div>
    </div>
    
  )
}

export default UserBookingevent
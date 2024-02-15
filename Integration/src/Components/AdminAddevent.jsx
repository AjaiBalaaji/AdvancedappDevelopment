import { useState,useEffect } from 'react';
import './AdminAddevent.css';
import NavbarU from './NavbarU';
import axios from 'axios';
// import { useNavigate } from 'react-router-dom';

const FormComponent = () => {
  
  const [eventtype, setEventtype] = useState("");
    const [description, setDescription] = useState("");
    const [eventpackage, setEpackage] = useState("");
    const [participantcount, setCount] = useState("");
    const [charge, setCharge] = useState("");

    const handleEventtype = (event) => {
      setEventtype(event.target.value);
  }

  const handleDescription = (event) => {
      setDescription(event.target.value);
  }

  const handlePackage = (event) => {
      setEpackage(event.target.value);
  }

  const handleCount = (event) => {
      setCount(event.target.value);
  }
  const handleCharge = (event) => {
      setCharge(event.target.value);
  }
  const handleSubmit = async (e) => {
    e.preventDefault();
  
    // Check for empty values and alert if any are found
    if (!eventtype || !description || !eventpackage || !participantcount || !charge) {
      alert("Please complete all required fields to proceed.");
      return; // Stop execution of the function here
    }
  
    const token = localStorage.getItem('token'); 
    
    try {
      const response = await axios.post(
        "http://localhost:8080/addevent/newevent",
        { eventtype, description, eventpackage, participantcount, charge },
        { headers: { Authorization: `Bearer ${token}` } }
      );
      
      // Alert for successful submission
      alert("Event added successfully!");
  
    
      setEventtype("");
      setDescription("");
      setEpackage("");
      setCount("");
      setCharge("");
      
      // Optionally, navigate to another route or perform further actions
      // navigate("/Userlogin"); // Uncomment and modify as needed
    } catch (error) {
      // Log the error to the console for debugging
      console.error("Adding event failed", error);
      
      // Alert for failure to submit
      alert("Failed to add event. Please try again.");
    }
  };
  useEffect(() => {
    const bodyStyle=document.body.style;
    bodyStyle.backgroundImage = "url('https://as1.ftcdn.net/v2/jpg/03/05/62/88/1000_F_305628877_FBgLZGK6Y94xPaED6rZbA9mKCxUHbNBg.jpg')"; 
    bodyStyle.backgroundSize = 'cover';
    bodyStyle.backgroundRepeat = 'no-repeat';
    bodyStyle.backgroundAttachment = 'fixed';
    bodyStyle.backgroundPosition = 'center center';
    return () => {
        document.body.style.backgroundImage = ""; 
    };
  }, []);
  

  return (
    <div className='AdminAddevent'>
        <NavbarU/>
        <div className="AdminAddeventform-container">
          <h1>Add New Events</h1>
          <br></br>
            <form id="bookingForm" className='Bookevent' onSubmit={handleSubmit}>  
            <input type="text" value={eventtype} onChange={handleEventtype} placeholder="Event Type" />
                <input type="text" value={description} onChange={handleDescription} placeholder="Event Description" />
                <input type="text" value={eventpackage} onChange={handlePackage} placeholder="Event Package" />
                <input type="text" value={participantcount} onChange={handleCount} placeholder="Participants Count" />
                <input type="text" value={charge} onChange={handleCharge} placeholder="Charges" />
                <button type="submit" className='Bookeventbutton'>Add Event</button>
            </form>
        </div>
        <div className='AdminAddevent-Image-container'>
            <img src='https://as2.ftcdn.net/v2/jpg/02/08/99/43/1000_F_208994387_yxpDPiRsonvL3kzBOAZQydvhrPh1BDo0.jpg' alt='' className='AdminAddevent-Image'/>
        </div>
    </div>
  );
};

export default FormComponent;

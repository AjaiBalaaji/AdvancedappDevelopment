import React from 'react'
import './AdminBookings.css';
import NavbarU from '../Components/NavbarU';
import { useState,useEffect } from 'react';

const AdminBookings = () =>  {
        const [formData, setFormData] = useState({
            eventType: '',
            participantCount: '',
            charges: '',
            food: 'No',
        });
        const handleChange = (e) => {
            setFormData({
                ...formData,
                [e.target.name]: e.target.value
            });
        };
    
        const handleSubmit = (e) => {
            e.preventDefault();
            // Process form data here
            console.log(formData);
        };
    
        useEffect(() => {
            axios.get('/api/get-event-data') // Replace with your API endpoint
                .then(response => {

                    setFormData(response.data);
                })
                .catch(error => {
                    console.error('There was an error fetching the data', error);
                });
        }, []);
    
  return (
    <div className='AdminBookings'>
        <NavbarU/>
        <form onSubmit={handleSubmit}>
            {/* Form fields here, similar to previous example, but with values from formData */}
            {/* Example for Event Type: */}
            <div>
                <label>
                    Event Type:
                    <input
                        type="text"
                        name="eventType"
                        value={formData.eventType}
                        onChange={handleChange}
                    />
                </label>
            </div>
        </form>
    </div>
    
  )
}

export default AdminBookings
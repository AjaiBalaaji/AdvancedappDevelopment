import React, { useState } from 'react';
import './AdminAddevent.css';
import NavbarU from './NavbarU';


const FormComponent = () => {
  
  const [formData, setFormData] = useState({
    title: '',
    content: '',
    image: null
  });

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleImageChange = (e) => {
    setFormData({ ...formData, image: e.target.files[0] });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const data = new FormData();
    data.append('title', formData.title);
    data.append('content', formData.content);
    data.append('image', formData.image);

    // Send data to backend here
    console.log('Form data submitted:', formData);
    alert('Form submitted successfully!');
  };

  return (
    <div className='AdminAddevent'>
        <NavbarU/>
    <div className="AdminAddeventform-container">
    <form onSubmit={handleSubmit}>
      <input 
        type="text" 
        name="title" 
        value={formData.title} 
        onChange={handleInputChange} 
        placeholder="Title" 
      />
      <textarea 
        name="content" 
        value={formData.content} 
        onChange={handleInputChange} 
        placeholder="Content" 
      />
      <input 
        type="file" 
        name="image" 
        onChange={handleImageChange} 
      />
      <button type="submit">Submit</button>
    </form>
    </div>
    <div className='AdminAddevent-Image-container'>
        <img src='https://images.pexels.com/photos/2253870/pexels-photo-2253870.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' alt='' className='AdminAddevent-Image'/>
    </div>
    </div>
  );
};

export default FormComponent;

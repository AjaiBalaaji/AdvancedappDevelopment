import React from 'react';
import NavbarUser from './NavbarUser';
import './Home.css';
import Slider from './Slider';
import Footer from './Footer';
import { useNavigate } from 'react-router-dom';
import Events from './Events';


const HomeUser = () => {
  const navigate = useNavigate();
  const handleHome = () => {
    navigate('/Home'); 
};
  const imageUrls = [
    'https://i.pinimg.com/564x/dc/3c/ee/dc3cee6b46d019b422665def00aa47cd.jpg',
    'https://i.pinimg.com/564x/67/39/1d/67391d1545bdf77e097a42c231cde3fc.jpg',
    'https://i.pinimg.com/564x/72/71/9f/72719f4801c3f9859cb921ac840cb28b.jpg',
  ];
  return (
    <div className='Home'>
      
      <NavbarUser/>

      <div className='container'>
        <div className='image-wrapper'>
          <img src='https://as2.ftcdn.net/v2/jpg/00/52/49/99/1000_F_52499954_7GYIvjNH8kxJguysNrJHMQxHhuMMkDZi.jpg' alt='Scenic View' className='Image'/>
          <div className='image-text'>
            <p className='text1'>Welcome to Festivease</p>
            <p className='text2'>Get inspired with our curated themes, decoration tips, and entertainment options.</p>
          </div>
        </div>
        <div className="Flexbox-1">
          <div className='box1'>
            <section className='section-top'>
              <h5>Our Mission</h5>
            </section>
          </div>
          <div className='box1'>
          <section className='section-top'>
              <h5>What we offer?</h5>
              <p>At Festivease, our mission is to simplify the process of 
                event planning and management. Whether you're hosting a 
                small gathering, a large corporate event, or a dream
                 wedding, our app is designed to streamline every step
                  of the process. We believe that planning an event 
                  should be as enjoyable as the event itself.</p>
            </section>
          </div>
          <div className='box1'>
          <section className='section-top'>
              <h5>Our Journey</h5>
            </section>
          </div>
          
        </div>
        <div className='ImageSilderinHome'>
      <Slider imageUrls={imageUrls} />
    </div>
    <div className="Home-WhoweAreContainer">
            <div className="Home-WhoweAreContent">
                <h1>Who We Are</h1>
                <p>We are the ultimate event management experts, dedicated to curating the most electrifying and jaw-dropping events you've ever seen.</p>
                <p>Our team of event enthusiasts is passionate about creating experiences that will leave you speechless and wanting more.</p>
                <p>With a track record of sold-out shows and rave reviews, we guarantee an adrenaline-pumping adventure at every event.</p>
            </div>
            <div className="Home-WhoweAre">   
                <img src="https://as2.ftcdn.net/v2/jpg/01/41/51/87/1000_F_141518734_6cOdKiDwfNqNTselFuxs5twIgjN0KrnH.jpg" alt="Electrifying Event" />
            </div>
        </div>
        <div className="Faq-container">
            <div className="Faq-sentence">
                <span className=''>How Do I book Events</span>
                <span className=''>Booking tickets is easy! Simply select the event you want to attend and click 'Book Now' to secure your spot.</span>
            </div>
        </div>
    
    <Footer/>
    
        
      </div>
    </div>
  );
};

export default HomeUser;

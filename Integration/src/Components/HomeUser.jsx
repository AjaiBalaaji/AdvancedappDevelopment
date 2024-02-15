// import React from 'react';
import NavbarUser from './NavbarUser';
import './Home.css';
import Slider from './Slider';
import Footer from './Footer';
// import { useNavigate } from 'react-router-dom';
// import Gallery from './Gallery';
// import Events from './Events';


const HomeUser = () => {
  // const navigate = useNavigate();
//   const handleHome = () => {
//     navigate('/Home'); 
// };
const imageUrls = [
  'https://as1.ftcdn.net/v2/jpg/02/42/30/98/1000_F_242309898_Y1JBNfxKwGHxKr4VfuwQbBbhjumHH4af.jpg',
  'https://as1.ftcdn.net/v2/jpg/02/11/61/40/1000_F_211614039_cyIaDYMFLUVlv1P55oCfPfRxuTPXu06M.jpg',
  'https://as2.ftcdn.net/v2/jpg/02/31/89/67/1000_F_231896770_n0jPhixZ39YjxPQhKVGpmshxbWIJIwZw.jpg',
];
  return (
    <div className=''>
      
      <NavbarUser/>

      <div className='container1'>
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
        {/* <div className='ImageGallery'>
          <h1 className=''>Image Gallery</h1>
          <Gallery/>
          
        </div> */}
        <div className="Faq-container">
            <div className="Faq-sentence">
                <span className='Faq-Question'>How Do I book Events?</span><br></br>
                <span className='Faq-Answer'>Booking tickets is easy! Simply select the event you want to attend and click 'Book Now' to secure your spot.</span>
            </div>
            {/* <div className="Faq-sentence">
                <span className='Faq-Question'>How Do I book Events?</span><br></br>
                <span className='Faq-Answer'>Booking tickets is easy! Simply select the event you want to attend and click 'Book Now' to secure your spot.</span>
            </div> */}
            <div className="Faq-sentence">
                <span className='Faq-Question'>Is parking available at the event venues</span><br></br>
                <span className='Faq-Answer'>Parking availability varies by venue. We advise checking the venue information on our website or contacting the venue directly for details about parking options and any associated costs.</span>
            </div>
        </div>
    
    <Footer/>
    
        
      </div>
    </div>
  );
};

export default HomeUser;

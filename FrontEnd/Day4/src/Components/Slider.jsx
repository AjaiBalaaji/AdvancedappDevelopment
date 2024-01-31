import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import './Slider.css';

const Slider = ({ imageUrls }) => {
  const [slideIndex, setSlideIndex] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => {
      setSlideIndex((prevIndex) =>
        prevIndex === imageUrls.length - 1 ? 0 : prevIndex + 1
      );
    }, 2000); 

    return () => clearTimeout(timer);
  }, [slideIndex, imageUrls.length]);
  Slider.propTypes = {
    imageUrls: PropTypes.arrayOf(PropTypes.string).isRequired
  };

  return (
    <div>
      {imageUrls.map((url, index) => (
        <div
          key={index}
          className="slide"
          style={{ display: slideIndex === index ? 'block' : 'none' }}
        >
          <img src={url} alt={`Slide ${index + 1}`} className='slider-image'/>
        </div>
      ))}
    </div>
  );
};

export default Slider;

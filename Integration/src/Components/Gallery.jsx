import React from 'react';
import './Gallery.css'; // Adjust the path as necessary

const images = [
  "https://assets.codepen.io/1506195/unsplash-1.jpg",
  "https://assets.codepen.io/1506195/unsplash-7.jpg",
  "https://assets.codepen.io/1506195/unsplash-3.jpg",
  // Add the rest of your images
];

const Gallery = () => {
  return (
    <div className="gallery">
      {images.map((src, index) => (
        <img key={index} src={src} alt="" />
      ))}
    </div>
  );
};

export default Gallery;

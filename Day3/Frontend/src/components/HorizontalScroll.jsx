import React from 'react';
import '../assets/css/Styles.css'
import images1 from '../assets/others/images1';
const HorizontalScroll = ({ images1 }) => {
  return (
    <div className="horizontal-scroll-container">
      {images1.map((images1, index) => (
        <div key={index} className="image-container">
          <img src={images1.url} alt={`Image ${index + 1}`} />
          <div className="image-text">{images1.text}</div>
        </div>
      ))}
    </div>
  );
};

export default HorizontalScroll;

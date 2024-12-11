import React from 'react';
import './PongalFestival.css';

const PongalFestival = () => {
  return (
    <section className="festival-section">
      <h2 className="fade-in">Pongal Festival</h2>
      <p className="fade-in-up">
        Pongal is a harvest festival celebrated in Tamil Nadu. It is a four-day festival to honor the Sun God, 
        and it involves cooking a special dish called "Pongal" as an offering to the Sun.
      </p>
      <div className="image-gallery">
        <img src="https://via.placeholder.com/400x250?text=Pongal+Festival" alt="Pongal Festival" />
      </div>
    </section>
  );
};

export default PongalFestival;

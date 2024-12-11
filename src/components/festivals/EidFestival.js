import React from 'react';
import './EidFestival.css';

const EidFestival = () => {
  return (
    <section className="festival-section">
      <h2 className="fade-in">Eid Festival</h2>
      <p className="fade-in-up">
        Eid al-Fitr marks the end of Ramadan, the Islamic holy month of fasting. It is a day of celebration with 
        family, friends, and feasts, and is observed by Muslims worldwide.
      </p>
      <div className="image-gallery">
        <img src="https://via.placeholder.com/400x250?text=Eid+Festival" alt="Eid Festival" />
      </div>
    </section>
  );
};

export default EidFestival;

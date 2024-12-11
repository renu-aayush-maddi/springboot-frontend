import React from 'react';
import './PongalFestivalPage.css';

const PongalFestivalPage = () => {
  return (
    <div className="pongal-festival-page">
      <header className="pongal-header">
        <h1 className="fade-in">Happy Pongal!</h1>
        <p className="fade-in">Celebrate the harvest festival of Tamil Nadu</p>
      </header>
      
      <section className="pongal-content">
        <h2 className="slide-up">About Pongal</h2>
        <p className="fade-in-up">
          Pongal is a popular harvest festival celebrated primarily in Tamil Nadu, India. 
          It marks the beginning of the sun's six-month-long journey northwards, known as Uttarayan. 
          People celebrate by offering thanks for the harvest, cooking a dish called 'Pongal', and performing rituals for prosperity and happiness.
        </p>
        
        <div className="image-gallery">
          <img src="https://www.tripsavvy.com/thmb/PNB8H9JwDxvjsd1S8mtm3UKK2Qk=/2119x1415/filters:no_upscale():max_bytes(150000):strip_icc()/GettyImages-5056166521-5947e7c75f9b58d58a7d2624.jpg" />
          <img src="https://www.tripsavvy.com/thmb/-sYFDfU0BrS84Ggy-Ay2j8JpSl0=/2116x1417/filters:fill(auto,1)/GettyImages-521666880-5bb60557c9e77c00266e9df6.jpg" />
          <img src="https://th.bing.com/th/id/OIP.rvxt_lRVK_3Oy3XMyvEorQAAAA?rs=1&pid=ImgDetMain" />
        </div>
        
        <div className="more-info">
          <h3 className="zoom-in">The Rituals of Pongal</h3>
          <p className="fade-in-up">
            During Pongal, people clean their homes, prepare traditional sweets, and decorate their houses with Kolams (rice powder designs). 
            The main event involves cooking the Pongal dish in an open pot, which symbolizes abundance and prosperity.
          </p>
          
          <h3 className="zoom-in">Pongal and the Harvest</h3>
          <p className="fade-in-up">
            The festival also includes prayers to the Sun God, the Earth, and the cattle that help in the harvest. 
            It's a time to give thanks for the bountiful harvest and to hope for a prosperous year ahead.
          </p>
        </div>
      </section>
      
      <footer className="pongal-footer">
        <p className="fade-in">Wishing you a bountiful and joyful Pongal!</p>
      </footer>
    </div>
  );
};

export default PongalFestivalPage;

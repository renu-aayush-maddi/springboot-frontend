import React from 'react';
import './ChristmasFestival.css';

const ChristmasFestival = () => {
  return (
    <div className="christmas-festival">
      <header className="christmas-header">
        <h1 className="fade-in">Merry Christmas!</h1>
        <p className="fade-in">Celebrate the joy and peace of the season</p>
      </header>
      
      <section className="christmas-content">
        <h2 className="slide-up">About Christmas</h2>
        <p className="fade-in-up">
          Christmas is celebrated to honor the birth of Jesus Christ. It is a time of joy, love, and sharing with family and friends.
          People decorate Christmas trees, exchange gifts, and attend religious services.
        </p>
        
        <div className="image-gallery">
          <img src="https://plus.unsplash.com/premium_photo-1661766896016-16e307246d5d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8Y2hyaXN0bWFzfGVufDB8fDB8fHww" />
          <img src="https://images.unsplash.com/photo-1480618757544-81c31930008e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8Y2hyaXN0bWFzfGVufDB8fDB8fHww" />
          <img src="https://images.unsplash.com/photo-1480632563560-30f503c09195?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGNocmlzdG1hc3xlbnwwfHwwfHx8MA%3D%3D" />
        </div>
        
        <div className="more-info">
          <h3 className="zoom-in">Christmas Traditions</h3>
          <p className="fade-in-up">
            On Christmas Eve, families gather for a festive meal and exchange presents. The holiday is also associated with the story of 
            Santa Claus and his reindeer delivering gifts to children around the world.
          </p>
        </div>
      </section>
      
      <footer className="christmas-footer">
        <p className="fade-in">Wishing you a season filled with joy and happiness!</p>
      </footer>
    </div>
  );
};

export default ChristmasFestival;

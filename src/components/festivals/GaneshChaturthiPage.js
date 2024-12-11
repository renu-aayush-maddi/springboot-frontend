import React from 'react';
import './GaneshChaturthiPage.css';

const GaneshChaturthiPage = () => {
  return (
    <div className="ganesh-chaturthi-page">
      <header className="ganesh-header">
        <h1 className="fade-in">Happy Ganesh Chaturthi!</h1>
        <p className="fade-in">Celebrate the arrival of Lord Ganesha</p>
      </header>
      
      <section className="ganesh-content">
        <h2 className="slide-up">About Ganesh Chaturthi</h2>
        <p className="fade-in-up">
          Ganesh Chaturthi is a Hindu festival celebrating the birth of Lord Ganesha, the elephant-headed god of wisdom, prosperity, and remover of obstacles. 
          The festival is widely celebrated with great enthusiasm, with devotees bringing home idols of Ganesha, performing prayers, and immersing the idols in water at the end of the festival.
        </p>
        
        <div className="image-gallery">
          <img src="https://plus.unsplash.com/premium_photo-1691992549710-4b3f040e557a?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" />
          <img src="https://images.unsplash.com/photo-1616908841499-a1ec8c26fa31?q=80&w=1471&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" />
          <img src="https://th.bing.com/th/id/OIP.XWF2E64Hydrj33U44Gh3-QHaE7?rs=1&pid=ImgDetMain" />
        </div>
        
        <div className="more-info">
          <h3 className="zoom-in">The Rituals of Ganesh Chaturthi</h3>
          <p className="fade-in-up">
            People bring home clay idols of Lord Ganesha, decorate them with flowers, and offer prayers for prosperity and success. 
            The festival also includes cultural activities, music, dance, and delicious sweets like modaks, which are Lord Ganesha’s favorite.
          </p>
          
          <h3 className="zoom-in">Visarjan (Immersion)</h3>
          <p className="fade-in-up">
            After the festival, the idols are immersed in water, symbolizing the return of Lord Ganesha to his celestial abode. 
            This ritual is called Visarjan, and it's a grand event in many cities and towns.
          </p>
        </div>
      </section>
      
      <footer className="ganesh-footer">
        <p className="fade-in">Wishing you wisdom and prosperity on Ganesh Chaturthi!</p>
      </footer>
    </div>
  );
};

export default GaneshChaturthiPage;

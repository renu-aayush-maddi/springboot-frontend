



          import React from 'react';
import './DiwaliPage.css';

const DiwaliPage = () => {
  return (
    <div className="diwali-page">
      <header className="diwali-header">
        <h1 className="fade-in">Happy Diwali!</h1>
        <p className="fade-in">Celebrate the festival of lights</p>
      </header>
      
      <section className="diwali-content">
        <h2 className="slide-up">About Diwali</h2>
        <p className="fade-in-up">
          Diwali, also known as Deepavali, is one of the most important festivals in Hindu culture. 
          It symbolizes the victory of light over darkness and good over evil. Families celebrate by 
          decorating their homes with lamps, candles, and fireworks, sharing sweets, and performing rituals.
        </p>
        
        <div className="image-gallery">
        <img src="https://images.unsplash.com/photo-1605292356183-a77d0a9c9d1d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8ZGl3YWxpfGVufDB8fDB8fHww" alt="Diwali Celebration 1" />
          <img src="https://plus.unsplash.com/premium_photo-1682090867765-39d1790259c5?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8ZGl3YWxpfGVufDB8fDB8fHww" alt="Diwali Celebration 2" />
          <img src="https://plus.unsplash.com/premium_photo-1698500034742-098f7fc04163?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8ZGl3YWxpfGVufDB8fDB8fHww" alt="Diwali Celebration 3" />
        </div>
        
        <div className="more-info">
          <h3 className="zoom-in">The Rituals of Diwali</h3>
          <p className="fade-in-up">
            During Diwali, people light oil lamps called diyas to symbolize the triumph of good over evil.
            The festival also involves prayers to Lord Ganesha, the remover of obstacles, and Goddess Lakshmi, 
            the goddess of wealth and prosperity. The celebrations continue for several days, with fireworks, 
            feasts, and family gatherings.
          </p>
          
          <h3 className="zoom-in">Diwali in Different Regions</h3>
          <p className="fade-in-up">
            Diwali is celebrated differently across India and the world. In some regions, it marks the return of 
            Lord Rama to his kingdom after 14 years of exile. In others, it celebrates the victory of Lord Krishna 
            over the demon Narakasura. Regardless of the regional variations, the central theme remains the same: 
            the victory of light over darkness.
          </p>
        </div>
      </section>
      
      <footer className="diwali-footer">
        <p className="fade-in">Wishing you a prosperous and joyful Diwali!</p>
      </footer>
    </div>
  );
};

export default DiwaliPage;

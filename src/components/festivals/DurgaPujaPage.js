import React from 'react';
import './DurgaPujaPage.css';

const DurgaPujaPage = () => {
  return (
    <div className="durga-puja-page">
      <header className="durga-header">
        <h1 className="fade-in">Happy Durga Puja!</h1>
        <p className="fade-in">Celebrate the triumph of good over evil</p>
      </header>
      
      <section className="durga-content">
        <h2 className="slide-up">About Durga Puja</h2>
        <p className="fade-in-up">
          Durga Puja is one of the most celebrated festivals in India, particularly in West Bengal. It honors Goddess Durga's victory over the demon Mahishasura, symbolizing the victory of good over evil. The festival is marked by grand pandals, cultural programs, and religious rituals.
        </p>
        
        <div className="image-gallery">
          <img src="https://images.unsplash.com/photo-1622279488885-d831e8e76cef?q=80&w=1471&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" />
          <img src="https://images.unsplash.com/photo-1632756425176-c69bd4bc0efe?q=80&w=1632&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" />
          <img src="https://images.unsplash.com/photo-1616074385287-67f6fb9e9eb8?q=80&w=1602&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" />
        </div>
        
        <div className="more-info">
          <h3 className="zoom-in">The Rituals of Durga Puja</h3>
          <p className="fade-in-up">
            The festival lasts for ten days, with the last five days being the most significant. People worship elaborately crafted idols of Goddess Durga, adorned with vibrant decorations and flowers. Rituals like Sandhi Puja and Dhunuchi dance add charm to the celebrations.
          </p>
          
          <h3 className="zoom-in">Cultural Significance</h3>
          <p className="fade-in-up">
            Apart from religious practices, Durga Puja is also a time for cultural festivities. People dress in traditional attire, enjoy delicious food, and participate in music, dance, and drama performances that depict mythological tales.
          </p>
        </div>
      </section>
      
      <footer className="durga-footer">
        <p className="fade-in">Wishing you a joyous and vibrant Durga Puja!</p>
      </footer>
    </div>
  );
};

export default DurgaPujaPage;

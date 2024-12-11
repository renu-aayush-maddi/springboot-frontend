import React from 'react';
import './HoliFestival.css';

const HoliFestival = () => {
  return (
    <div className="holi-festival">
      <header className="holi-header">
        <h1 className="fade-in">Happy Holi!</h1>
        <p className="fade-in">Celebrate the festival of colors and joy.</p>
      </header>

      <section className="holi-content">
        <h2 className="slide-up">About Holi</h2>
        <p className="fade-in-up">
          Holi is a vibrant festival celebrated in India, marking the arrival of spring and the victory of good over evil. People smear colors, dance, and enjoy festive delicacies together.
        </p>
        <div className="image-gallery">
          <img src="https://plus.unsplash.com/premium_photo-1664304095595-e428558e8161?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" />
          <img src="https://images.unsplash.com/photo-1600495495739-8e2a8f4ada40?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" />
          <img src="https://media.istockphoto.com/id/532028180/photo/bright-and-colorful-dyed-powder.webp?a=1&b=1&s=612x612&w=0&k=20&c=rPdnLJgdeHrNV0zurWB8566w2Zevtms_og5eWPPZPnE=" />
        </div>
      </section>

      <footer className="holi-footer">
        <p className="fade-in">Spread happiness and colors this Holi!</p>
      </footer>
    </div>
  );
};

export default HoliFestival;

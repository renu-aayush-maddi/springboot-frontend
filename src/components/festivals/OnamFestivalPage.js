import React from 'react';
import './OnamFestivalPage.css';

const OnamFestivalPage = () => {
  return (
    <div className="onam-page">
      <header className="onam-header">
        <h1 className="fade-in">Happy Onam!</h1>
        <p className="fade-in">Celebrate the harvest festival of Kerala</p>
      </header>

      <section className="onam-content">
        <h2 className="slide-up">About Onam</h2>
        <p className="fade-in-up">
          Onam is a harvest festival celebrated in Kerala, marking the homecoming of the mythical King Mahabali. It is a time for grand feasts, traditional boat races, and beautiful flower arrangements called Pookalams.
        </p>

        <div className="image-gallery">
          <img src="https://th.bing.com/th/id/OIP.IcG7LIbbmENmNszgezVoUAHaFA?rs=1&pid=ImgDetMain" />
          <img src="https://th.bing.com/th/id/OIP.6jzugyAtewI9lJc2gE0bSQHaE9?rs=1&pid=ImgDetMain" />
          <img src="https://th.bing.com/th/id/OIP.C0-yxB9Kvv7Kk1q6PIy_0wAAAA?rs=1&pid=ImgDetMain" />
        </div>

        <div className="more-info">
          <h3 className="zoom-in">Cultural Highlights</h3>
          <p className="fade-in-up">
            The ten-day festival features traditional dance forms like Kathakali, Vallam Kali (boat races), and the grand feast Onam Sadhya, served on banana leaves.
          </p>
        </div>
      </section>

      <footer className="onam-footer">
        <p className="fade-in">Wishing you a joyous and prosperous Onam!</p>
      </footer>
    </div>
  );
};

export default OnamFestivalPage;

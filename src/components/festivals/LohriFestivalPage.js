import React from 'react';
import './LohriFestivalPage.css';

const LohriFestivalPage = () => {
  return (
    <div className="lohri-page">
      <header className="lohri-header">
        <h1 className="fade-in">Happy Lohri!</h1>
        <p className="fade-in">Celebrate the harvest festival with warmth and joy</p>
      </header>

      <section className="lohri-content">
        <h2 className="slide-up">About Lohri</h2>
        <p className="fade-in-up">
          Lohri is a traditional harvest festival celebrated primarily in Punjab and northern India. It marks the end of winter and the arrival of longer days. The festival is known for its bonfires, folk songs, and dances.
        </p>

        <div className="image-gallery">
          <img src="https://static.independent.co.uk/2022/01/13/07/GettyImages-1230558776.jpeg" />
          <img src="https://metro.co.uk/wp-content/uploads/2016/01/gettyimages-462449441.jpg?quality=80&strip=all" />
          <img src="https://www.oneindia.com/img/1200x80/2019/01/lohri-1547353950.jpg" />
        </div>

        <div className="more-info">
          <h3 className="zoom-in">Customs and Traditions</h3>
          <p className="fade-in-up">
            The festival is centered around bonfires, where families and friends gather to sing folk songs and perform Bhangra and Gidda. Peanuts, popcorn, and sweets are shared as offerings to the fire.
          </p>
        </div>
      </section>

      <footer className="lohri-footer">
        <p className="fade-in">Wishing you warmth and prosperity this Lohri!</p>
      </footer>
    </div>
  );
};

export default LohriFestivalPage;

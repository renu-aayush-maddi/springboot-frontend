import React from 'react';
import './EasterFestivalPage.css';

const EasterFestivalPage = () => {
  return (
    <div className="easter-page">
      <header className="easter-header">
        <h1 className="fade-in">Happy Easter!</h1>
        <p className="fade-in">Rejoice in the joy of resurrection</p>
      </header>

      <section className="easter-content">
        <h2 className="slide-up">About Easter</h2>
        <p className="fade-in-up">
          Easter celebrates the resurrection of Jesus Christ and is one of the most important Christian festivals. It signifies new beginnings, hope, and renewal.
        </p>

        <div className="image-gallery">
          <img src="https://wallerrealty.com.au/_files/news/bendigo-easter-fest-3.jpg" />
          <img src="https://historyuk.s3.eu-west-2.amazonaws.com/s3fs-public/2022-04/Easter%20Eggs-min.jpg" />
          <img src="https://blog.fnp.com/wp-content/uploads/2020/04/easter-in-usa.jpg" />
        </div>

        <div className="more-info">
          <h3 className="zoom-in">Easter Traditions</h3>
          <p className="fade-in-up">
            Easter eggs, symbolizing rebirth, are an integral part of the celebrations. Families gather for special church services, feasts, and Easter egg hunts for children.
          </p>
        </div>
      </section>

      <footer className="easter-footer">
        <p className="fade-in">Wishing you a blessed Easter!</p>
      </footer>
    </div>
  );
};

export default EasterFestivalPage;

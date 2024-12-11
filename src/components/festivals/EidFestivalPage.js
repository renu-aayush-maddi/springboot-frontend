import React from 'react';
import './EidFestivalPage.css';

const EidFestivalPage = () => {
  return (
    <div className="eid-festival-page">
      <header className="eid-header">
        <h1 className="fade-in">Happy Eid!</h1>
        <p className="fade-in">Celebrate the festival of joy and togetherness</p>
      </header>
      
      <section className="eid-content">
        <h2 className="slide-up">About Eid</h2>
        <p className="fade-in-up">
          Eid, also known as Eid al-Fitr, is a religious festival celebrated by Muslims worldwide. 
          It marks the end of Ramadan, a month of fasting, prayer, and reflection. Eid is a time of celebration, 
          charity, family gatherings, and feasts.
        </p>
        
        <div className="image-gallery">
          <img src="https://res.cloudinary.com/dk-find-out/image/upload/q_80,w_1920,f_auto/A-Corbis-42-19053882_uwpjoh.jpg" />
          <img src="https://2.bp.blogspot.com/-UybylFgpsdM/WTolW6h0yUI/AAAAAAAADBQ/R_i3Emt61h0_k_BOHYAH4g3lAfKJVIm4wCLcB/s1600/Eid-Ul-Adha-India.jpg" />
          <img src="https://i0.wp.com/www.entertainmentmesh.com/wp-content/uploads/2015/09/Eid-Al-Adha-Prayers-Taj-Mahal-Agra-India.jpg?w=1247&ssl=1" />
        </div>
        
        <div className="more-info">
          <h3 className="zoom-in">The Rituals of Eid</h3>
          <p className="fade-in-up">
            On Eid, Muslims perform a special prayer known as Salat al-Eid, often in congregation. The festival 
            also involves giving to charity (Zakat al-Fitr), visiting family and friends, wearing new clothes, 
            and sharing delicious meals.
          </p>
          
          <h3 className="zoom-in">Eid Around the World</h3>
          <p className="fade-in-up">
            Eid is celebrated differently across various regions. In some places, it is marked with large public 
            feasts and parades, while in others, it is a more intimate family celebration. Regardless of the 
            variations, the festival is a time for gratitude, joy, and strengthening bonds with loved ones.
          </p>
        </div>
      </section>
      
      <footer className="eid-footer">
        <p className="fade-in">Wishing you a blessed and joyful Eid!</p>
      </footer>
    </div>
  );
};

export default EidFestivalPage;

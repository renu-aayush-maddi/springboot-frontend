import React from 'react';
import './BaisakhiFestivalPage.css';

const BaisakhiFestivalPage = () => {
  return (
    <div className="baisakhi-festival-page">
      <header className="baisakhi-header">
        <h1 className="fade-in">Happy Baisakhi!</h1>
        <p className="fade-in">Celebrate the harvest festival of Punjab</p>
      </header>
      
      <section className="baisakhi-content">
        <h2 className="slide-up">About Baisakhi</h2>
        <p className="fade-in-up">
          Baisakhi is the harvest festival of Punjab, celebrated with immense joy and enthusiasm. 
          It marks the start of the harvest season and commemorates the formation of the Khalsa by Guru Gobind Singh in 1699.
        </p>
        
        <div className="image-gallery">
          <img src="https://www.thestatesman.com/wp-content/uploads/2023/04/5E1C6DA0-4687-4272-A912-6F5434D00AF3-1024x683.jpeg" />
          <img src="https://i.pinimg.com/originals/33/7a/c2/337ac266bed9b8af6067ce0b79cbea28.jpg" />
          <img src="https://m.economictimes.com/thumb/msid-99319887,width-1200,height-900,resizemode-4,imgsize-179308/baisakhi-2023-date-significance-of-vaisakhi-sikh-new-year-harvest-festival.jpg" />
        </div>
        
        <div className="more-info">
          <h3 className="zoom-in">The Rituals of Baisakhi</h3>
          <p className="fade-in-up">
            The festival begins with prayers at Gurdwaras, followed by traditional Bhangra and Gidda dances. 
            Farmers give thanks for a good harvest and celebrate with feasts and vibrant fairs.
          </p>
          
          <h3 className="zoom-in">Cultural Festivities</h3>
          <p className="fade-in-up">
            Baisakhi fairs are held across Punjab, with stalls, folk music, and traditional games. 
            It's a time for families to come together and celebrate their shared heritage.
          </p>
        </div>
      </section>
      
      <footer className="baisakhi-footer">
        <p className="fade-in">Wishing you a prosperous and joyful Baisakhi!</p>
      </footer>
    </div>
  );
};

export default BaisakhiFestivalPage;

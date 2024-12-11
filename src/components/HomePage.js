// HomePage.js
import React, { useEffect } from 'react';
import './HomePage.css';
import heroImage from '../components/assets/bg-image.jpg';
import featureImage from '../components/assets/bg-login.jpg';
import festivals from '../components/assets/festivals1.jpeg';
import moments from '../components/assets/moments.jpg';
import food from '../components/assets/food.jpg';

const HomePage = () => {
  useEffect(() => {
    // Dynamically load the Tawk.to script
    var Tawk_API = Tawk_API || {};
    var Tawk_LoadStart = new Date();
    (function () {
      var s1 = document.createElement('script');
      var s0 = document.getElementsByTagName('script')[0];
      s1.async = true;
      s1.src = 'https://embed.tawk.to/67542fde4304e3196aee2db3/1iegdm0gb';
      s1.charset = 'UTF-8';
      s1.setAttribute('crossorigin', '*');
      s0.parentNode.insertBefore(s1, s0);
    })();
  }, []);

  return (
    <div className="home-page">
      <header
        className="hero-section"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <h1>Welcome to Indian Culture</h1>
        <p>Explore the rich heritage, historical sites, and vibrant festivals of India.</p>
      </header>

      <section className="features-section">
        <div
          className="feature"
          style={{ backgroundImage: `url(${featureImage})` }}
        >
          <h2>Historical Sites</h2>
          <p>Discover India’s ancient sites, from the Taj Mahal to the forts of Rajasthan.</p>
          <a href="/historical-sites" className="learn-more">
            Learn More
          </a>
        </div>

        <div
          className="feature"
          style={{ backgroundImage: `url(${moments})` }}
        >
          <h2>Monuments</h2>
          <p>Explore India's iconic monuments that tell tales of art, architecture, and culture.</p>
          <a href="/attractions" className="learn-more">
            Learn More
          </a>
        </div>

        <div
          className="feature"
          style={{ backgroundImage: `url(${festivals})` }}
        >
          <h2>Festivals</h2>
          <p>Celebrate the diversity of India’s festivals, from Diwali to Holi and beyond.</p>
          <a href="/festivals" className="learn-more">
            Learn More
          </a>
        </div>

        <div
          className="feature"
          style={{ backgroundImage: `url(${food})` }}
        >
          <h2>Indian Cuisine</h2>
          <p>
            Indulge in the flavors of Indian cuisine, renowned worldwide for its diversity and
            taste.
          </p>
          <a href="/cuisine" className="learn-more">
            Learn More
          </a>
        </div>
      </section>
    </div>
  );
};

export default HomePage;


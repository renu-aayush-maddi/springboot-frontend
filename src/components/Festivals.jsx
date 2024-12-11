import React from 'react';
import './festibvals.css';
import UK1 from "../components/imgs/diwali.jpg"
import UK2 from "../components/imgs/Ganesh-Chathurthi.jpg"
import UK3 from "../components/imgs/h.jpg"
import UK4 from "../components/imgs/ra1.jpg"
import UK5 from "../components/imgs/bho.jpg"
import UK6 from "../components/imgs/ch.jpg"
import UK7 from "../components/imgs/holi.jpg"
import UK8 from "../components/imgs/pongal.jpeg"
// import UK from "../components/imgs/ch.jpg"
// import UK9 from "../components/imgs/Img11.jpg"
// import UK10 from "../components/imgs/Img12.jpg"
import UK13 from "../components/imgs/Img13.jpg"
import UK14 from "../components/imgs/Img14.jpg"
import UK15 from "../components/imgs/Img15.jpg"
import UK16 from "../components/imgs/Img16.jpg"
import UK17 from "../components/imgs/Img17.jpg"
import UK18 from "../components/imgs/Img18.jpg"
import UK19 from "../components/imgs/Img19.jpg"
import UK20 from "../components/imgs/Img20.jpg"
import UK21 from "../components/imgs/Img21.jpg"
import UK22 from "../components/imgs/Img22.jpg"
import UK23 from "../components/imgs/Img23.jpg"
import UK24 from "../components/imgs/Img24.jpg"

const Festivals = () => {
  return (
    <>
      {/* Image Gallery */}
      <section id="explore" className="content-section image-gallery">
        <h2>Explore the Beauty of India</h2>
        <div className="box">
          <span style={{ "--i": 1 }}>
            <img src={UK1} alt="Image 1" />
          </span>
          <span style={{ "--i": 2 }}>
            <img src={UK1} alt="Image 2" />
          </span>
          <span style={{ "--i": 3 }}>
            <img src={UK1} alt="Image 3" />
          </span>
          <span style={{ "--i": 4 }}>
            <img src={UK2} alt="Image 4" />
          </span>
          <span style={{ "--i": 5 }}>
            <img src={UK3} alt="Image 5" />
          </span>
          <span style={{ "--i": 6 }}>
            <img src={UK4} alt="Image 6" />
          </span>
          <span style={{ "--i": 7 }}>
            <img src={UK5} alt="Image 7" />
          </span>
          <span style={{ "--i": 8 }}>
            <img src={UK6} alt="Image 8" />
          </span>
          <span style={{ "--i": 9 }}>
            <img src={UK7} alt="Image 9" />
          </span>
          <span style={{ "--i": 10 }}>
            <img src={UK8} alt="Image 10" />
          </span>
        </div>
      </section>


      <section className="features1-section">
  <div className="feature1" style={{ backgroundImage: `url(${UK13})` }}>
    <h2>Holi Festival</h2>
    <p>Experience the vibrant colors of Holi, the festival of joy and togetherness, celebrated with enthusiasm across India.</p>
    <a href="/holi" className="learn-more">Learn More</a>
  </div>

  <div className="feature1" style={{ backgroundImage: `url(${UK14})` }}>
    <h2>Diwali Festival</h2>
    <p>Celebrate the festival of lights, Diwali, symbolizing the victory of light over darkness and good over evil.</p>
    <a href="/diwali" className="learn-more">Learn More</a>
  </div>

  <div className="feature1" style={{ backgroundImage: `url(${UK15})` }}>
    <h2>Dussehra Festival</h2>
    <p>Witness the triumph of good over evil during Dussehra, celebrated with grand effigy burning and festivities.</p>
    <a href="/dussehra" className="learn-more">Learn More</a>
  </div>

  <div className="feature1" style={{ backgroundImage: `url(${UK16})` }}>
    <h2>Eid Festival</h2>
    <p>Join in the joyous celebrations of Eid, marked by prayers, feasts, and the spirit of giving and gratitude.</p>
    <a href="/eid" className="learn-more">Learn More</a>
  </div>

  <div className="feature1" style={{ backgroundImage: `url(${UK17})` }}>
    <h2>Christmas Day</h2>
    <p>Celebrate the warmth of Christmas with carols, decorations, and festive gatherings across India.</p>
    <a href="/christmas" className="learn-more">Learn More</a>
  </div>

  <div className="feature1" style={{ backgroundImage: `url(${UK18})` }}>
    <h2>Pongal Festival</h2>
    <p>Enjoy Pongal, the harvest festival of Tamil Nadu, with traditional cooking, dances, and rituals.</p>
    <a href="/pongal" className="learn-more">Learn More</a>
  </div>

  <div className="feature1" style={{ backgroundImage: `url(${UK19})` }}>
    <h2>Ganesh Chaturthi</h2>
    <p>Immerse yourself in the grand celebrations of Ganesh Chaturthi, dedicated to Lord Ganesha with vibrant processions.</p>
    <a href="/ganesh-chaturthi" className="learn-more">Learn More</a>
  </div>

  <div className="feature1" style={{ backgroundImage: `url(${UK20})` }}>
    <h2>Durga Puja</h2>
    <p>Celebrate Durga Puja with devotional rituals, cultural events, and vibrant pandals showcasing the goddess.</p>
    <a href="/durga-puja" className="learn-more">Learn More</a>
  </div>

  <div className="feature1" style={{ backgroundImage: `url(${UK21})` }}>
    <h2>Baisakhi Festival</h2>
    <p>Mark the harvest festival of Baisakhi with traditional dances, music, and celebrations in Punjab.</p>
    <a href="/baisakhi" className="learn-more">Learn More</a>
  </div>

  <div className="feature1" style={{ backgroundImage: `url(${UK22})` }}>
    <h2>Lohri Festival</h2>
    <p>Celebrate Lohri with bonfires, folk dances, and songs marking the end of winter and the harvest season.</p>
    <a href="/lohri" className="learn-more">Learn More</a>
  </div>

  <div className="feature1" style={{ backgroundImage: `url(${UK23})` }}>
    <h2>Easter Festival</h2>
    <p>Celebrate Easter with prayers, egg hunts, and festive gatherings symbolizing renewal and hope.</p>
    <a href="/easter" className="learn-more">Learn More</a>
  </div>

  <div className="feature1" style={{ backgroundImage: `url(${UK24})` }}>
    <h2>Onam Festival</h2>
    <p>Relish the grandeur of Onam, Kerala’s harvest festival, with traditional feasts, boat races, and flower carpets.</p>
    <a href="/onam" className="learn-more">Learn More</a>
  </div>
</section>

    </>
  );
};

export default Festivals;
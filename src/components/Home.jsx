// import React from 'react';
// import './styles.css';
// import { Link } from 'react-router-dom';

// const Home = () => {
//   return (
//     <div className="homepage-container">
//       {/* Navigation Bar */}
//       <nav className="navbar">
//         <h1 className="logo">Inspire India</h1>
//         <ul className="nav-links">
//           <li><a href="#home">Home</a></li>
//           <Link to="/Culture">
//           <li><a href="#culture">Culture</a></li>
//           </Link>
//           <Link to="/Heritage">
//           <li><a href="#heritage">Heritage</a></li>
//           </Link>
//           <li><a href="#places">Historical Places</a></li>
//           <li><a href="#monuments">Famous Monuments</a></li>
//           <li><a href="#monuments">Explore</a></li>
//         </ul>
//       </nav>

//       {/* Hero Section */}
//       <section id="home" className="hero-section">
//         <div className="hero-content">
//           <h2>Explore Indian Culture, Heritage & Monuments</h2>
//           <p>Discover the rich history and beauty of India’s most iconic landmarks, cultural traditions, and historical places.</p>
//         </div>
//       </section>

//       {/* Content Sections */}
//       <section id="culture" className="content-section">
//         <h2>Indian Culture</h2>
//         <p>Indian culture is one of the oldest in the world. Learn about its vibrant festivals, traditional music, dance forms, and much more.</p>
//       </section>

//       <section id="heritage" className="content-section">
//         <h2>Indian Heritage</h2>
//         <p>From its ancient architecture to its traditional arts and crafts, India’s heritage is a symbol of its incredible history.</p>
//       </section>

//       <section id="places" className="content-section">
//         <h2>Historical Places</h2>
//         <p>Visit breathtaking historical places like the Taj Mahal, Red Fort, Qutub Minar, and many more iconic sites that tell the story of India's past.</p>
//       </section>

//       <section id="monuments" className="content-section">
//         <h2>Famous Monuments</h2>
//         <p>Explore India's famous monuments that stand as proud reminders of its architectural brilliance and cultural diversity.</p>
//       </section>

//     </div>
    

    
//   );
// };

// export default Home;


























import React from 'react';
import './styles.css';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="homepage-container">
      {/* Navigation Bar */}
      <nav className="navbar">
        <h1 className="logo">Inspire India</h1>
        <ul className="nav-links">
          <li><a href="#home">Home</a></li>
          <Link to="/Culture">
            <li><a href="#culture">Culture</a></li>
          </Link>
          <Link to="/Heritage">
            <li><a href="#heritage">Heritage</a></li>
          </Link>
          <li><a href="#places">Historical Places</a></li>
          <li><a href="#monuments">Famous Monuments</a></li>
          <li><a href="#explore">Explore</a></li>
        </ul>
      </nav>

      {/* Hero Section */}
      <section id="home" className="hero-section">
        <div className="hero-content">
          <h2>Explore Indian Culture, Heritage & Monuments</h2>
          <p>Discover the rich history and beauty of India’s most iconic landmarks, cultural traditions, and historical places.</p>
        </div>
      </section>

      {/* Content Sections */}
      <section id="culture" className="content-section">
        <h2>Indian Culture</h2>
        <p>Indian culture is one of the oldest in the world. Learn about its vibrant festivals, traditional music, dance forms, and much more.</p>
      </section>

      <section id="heritage" className="content-section">
        <h2>Indian Heritage</h2>
        <p>From its ancient architecture to its traditional arts and crafts, India’s heritage is a symbol of its incredible history.</p>
      </section>

      <section id="places" className="content-section">
        <h2>Historical Places</h2>
        <p>Visit breathtaking historical places like the Taj Mahal, Red Fort, Qutub Minar, and many more iconic sites that tell the story of India's past.</p>
      </section>

      <section id="monuments" className="content-section">
        <h2>Famous Monuments</h2>
        <p>Explore India's famous monuments that stand as proud reminders of its architectural brilliance and cultural diversity.</p>
      </section>

      

    </div>
  );
};

export default Home;

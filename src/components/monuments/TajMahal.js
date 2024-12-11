import React, { useEffect } from 'react';

const TajMahal = () => {
  useEffect(() => {
    const initMap = () => {
      const tajMahalLocation = { lat: 27.1751, lng: 78.0421 };
      const map = new window.google.maps.Map(document.getElementById('map'), {
        zoom: 15,
        center: tajMahalLocation,
      });
      new window.google.maps.Marker({
        position: tajMahalLocation,
        map: map,
        title: 'Taj Mahal',
      });
    };

    if (!window.google) {
      const script = document.createElement('script');
      script.src =
        'https://maps.googleapis.com/maps/api/js?key=AIzaSyDqOIJO2ldFaC_4O6gaj4mJ4ViSpPlh4uo';
      script.async = true;
      script.defer = true;
      script.onload = initMap;
      document.body.appendChild(script);
    } else {
      initMap();
    }
  }, []);

  return (
    <div>
      <header style={styles.header}>
        <h1>Taj Mahal - The Crown Jewel of India</h1>
      </header>
      <main style={styles.main}>
        <section>
          <h2>Location</h2>
          <div id="map" style={styles.map}></div>
        </section>
        <section>
          <h2>Images</h2>
          <img
            src="https://plus.unsplash.com/premium_photo-1697729441569-f706fdd1f71c?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            style={styles.image}
          />
          <img
            src="https://www.tajmahalinagra.com/wp-content/uploads/2020/10/Taj-Mahal-Night-View-2.jpg"
            style={styles.image}
          />
        </section>
        <section>
          <h2>About Taj Mahal</h2>
          <p>
            The Taj Mahal, an epitome of love and an architectural masterpiece, 
            is one of the most iconic landmarks in India and the world. Located 
            in Agra, this stunning white marble mausoleum was commissioned in 
            1632 by the Mughal Emperor Shah Jahan in memory of his beloved wife, 
            Mumtaz Mahal. It stands as a symbol of eternal love and devotion.
          </p>
          <p>
            The Taj Mahal is renowned for its exquisite Mughal architecture, 
            combining Persian, Indian, and Islamic design elements. The central 
            dome, intricate marble inlay work, and the symmetry of the structure 
            reflect unparalleled craftsmanship. The surrounding lush gardens, 
            known as the Charbagh, enhance its grandeur and provide a tranquil 
            setting for visitors.
          </p>
          <p>
            Designated as a UNESCO World Heritage Site in 1983, the Taj Mahal 
            attracts millions of visitors annually. Whether viewed under the 
            golden rays of sunrise, the blazing afternoon sun, or the soft glow 
            of the moon, its beauty is truly mesmerizing.
          </p>
          <p>
            Beyond its breathtaking beauty, the Taj Mahal serves as a powerful 
            reminder of the rich history and cultural heritage of India. It 
            continues to inspire poets, artists, and travelers from across the 
            globe.
          </p>
        </section>
      </main>
    </div>
  );
};

const styles = {
  header: {
    backgroundColor: '#005f73',
    color: 'white',
    padding: '10px 20px',
    textAlign: 'center',
  },
  main: {
    padding: '20px',
  },
  map: {
    width: '100%',
    height: '600px',
    margin: '20px 0',
  },
  image: {
    maxWidth: '700px',
    height: 'auto',
    marginBottom: '20px',
  },
};

export default TajMahal;

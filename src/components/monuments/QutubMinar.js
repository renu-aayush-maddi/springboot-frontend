import React, { useEffect } from 'react';

const QutubMinar = () => {
  useEffect(() => {
    const initMap = () => {
      const qutubMinarLocation = { lat: 28.5244, lng: 77.1855 };
      const map = new window.google.maps.Map(document.getElementById('map'), {
        zoom: 15,
        center: qutubMinarLocation,
      });
      new window.google.maps.Marker({
        position: qutubMinarLocation,
        map: map,
        title: 'Qutub Minar',
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
        <h1>Qutub Minar - A Towering Marvel of History</h1>
      </header>
      <main style={styles.main}>
        <section>
          <h2>Location</h2>
          <div id="map" style={styles.map}></div>
        </section>
        <section>
          <h2>Images</h2>
          <img
            src="https://plus.unsplash.com/premium_photo-1697730320983-f99aab252a44?q=80&w=1587&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            style={styles.image}
          />
          <img
            src="https://images.unsplash.com/photo-1664532747590-8ab69543f61c?q=80&w=1587&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            style={styles.image}
          />
        </section>
        <section>
          <h2>About Qutub Minar</h2>
          <p>
            The Qutub Minar, located in Delhi, is one of India’s most famous 
            historical monuments and a UNESCO World Heritage Site. It stands 
            as a testament to the architectural and cultural brilliance of the 
            Delhi Sultanate. This magnificent minaret was constructed in 1192 
            by Qutb-ud-din Aibak, the founder of the Delhi Sultanate, and later 
            completed by his successors.
          </p>
          <p>
            The Qutub Minar is a striking example of Indo-Islamic architecture. 
            Made of red sandstone and marble, it rises to an impressive height 
            of 73 meters, making it the tallest brick minaret in the world. The 
            tower is adorned with intricate carvings and verses from the Quran, 
            showcasing the craftsmanship of the era.
          </p>
          <p>
            Surrounding the Qutub Minar is the Qutub Complex, which includes 
            several historically significant structures, such as the Quwwat-ul-Islam 
            Mosque, the Alai Minar, and the Iron Pillar, known for its 
            rust-resistant composition. Each element of the complex tells a 
            story of India’s rich history and diverse cultural influences.
          </p>
          <p>
            Today, the Qutub Minar is a major tourist attraction, drawing 
            visitors from across the globe to admire its architectural beauty 
            and learn about its historical significance. Whether viewed during 
            the day or illuminated at night, the Qutub Minar stands as a 
            symbol of India’s historical and architectural legacy.
          </p>
        </section>
      </main>
    </div>
  );
};

const styles = {
  header: {
    backgroundColor: '#3a3f5f',
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

export default QutubMinar;

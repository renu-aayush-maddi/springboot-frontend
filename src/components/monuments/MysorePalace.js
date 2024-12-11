import React, { useEffect } from 'react';

const MysorePalace = () => {
  useEffect(() => {
    const initMap = () => {
      const mysorePalaceLocation = { lat: 12.3052, lng: 76.6552 };
      const map = new window.google.maps.Map(document.getElementById('map'), {
        zoom: 15,
        center: mysorePalaceLocation,
      });
      new window.google.maps.Marker({
        position: mysorePalaceLocation,
        map: map,
        title: 'Mysore Palace',
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
        <h1>Mysore Palace - The Royal Gem of Karnataka</h1>
      </header>
      <main style={styles.main}>
        <section>
          <h2>Location</h2>
          <div id="map" style={styles.map}></div>
        </section>
        <section>
          <h2>Images</h2>
          <img
            src="https://th.bing.com/th/id/OIP.nj64A_dSQJTjP3m0h4l8zgHaDn?rs=1&pid=ImgDetMain"
            style={styles.image}
          />
          <img
            src="http://3.bp.blogspot.com/_hEeDlsg8wA4/TT6L8hncQhI/AAAAAAAADGU/XWItBDceBBA/s1600/11hto3p.jpg"
            style={styles.image}
          />
        </section>
        <section>
          <h2>About Mysore Palace</h2>
          <p>
            Located in the city of Mysore in Karnataka, **Mysore Palace**, also 
            known as the Amba Vilas Palace, is one of the most splendid and 
            famous royal residences in India. It is a fine example of Indo-Saracenic 
            architecture, blending Hindu, Muslim, Rajput, and Gothic styles.
          </p>
          <p>
            The palace was commissioned in 1897 after the old wooden structure was 
            destroyed in a fire during a royal wedding ceremony. It was designed 
            by the British architect Henry Irwin and completed in 1912. The palace 
            stands as a testament to the grandeur of the Wodeyar dynasty, which 
            ruled Mysore for over six centuries.
          </p>
          <p>
            The highlight of the palace is its grand **Durbar Hall**, ornate ceilings, 
            and stained-glass windows. The intricate carvings, colorful frescoes, 
            and chandeliers make it a sight to behold. The palace also houses 
            priceless collections of royal costumes, jewelry, and artworks.
          </p>
          <p>
            The palace is renowned for its **illuminations**, especially during the 
            10-day **Dasara festival**, when it is lit up with over 100,000 lights, 
            creating a magical spectacle. The surrounding gardens, temples, and 
            courtyards add to the palace’s charm, making it a favorite tourist 
            destination.
          </p>
          <p>
            Mysore Palace remains a symbol of India’s rich heritage, attracting 
            millions of visitors annually who come to admire its beauty and delve 
            into the history of the royal Wodeyar family.
          </p>
        </section>
      </main>
    </div>
  );
};

const styles = {
  header: {
    backgroundColor: '#8B0000',
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

export default MysorePalace;

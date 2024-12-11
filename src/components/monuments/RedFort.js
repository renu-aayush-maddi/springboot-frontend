import React, { useEffect } from 'react';

const RedFort = () => {
  useEffect(() => {
    const initMap = () => {
      const redFortLocation = { lat: 28.6562, lng: 77.2410 };
      const map = new window.google.maps.Map(document.getElementById('map'), {
        zoom: 15,
        center: redFortLocation,
      });
      new window.google.maps.Marker({
        position: redFortLocation,
        map: map,
        title: 'Red Fort',
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
        <h1>Red Fort - The Pride of Delhi</h1>
      </header>
      <main style={styles.main}>
        <section>
          <h2>Location</h2>
          <div id="map" style={styles.map}></div>
        </section>
        <section>
          <h2>Images</h2>
          <img
            src="https://images.unsplash.com/photo-1683201532264-86dd7f69df39?q=80&w=1440&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            style={styles.image}
          />
          <img
            src="https://plus.unsplash.com/premium_photo-1661919589683-f11880119fb7?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            style={styles.image}
          />
        </section>
        <section>
          <h2>About Red Fort</h2>
          <p>
            The Red Fort, or **Lal Qila**, is a UNESCO World Heritage Site and 
            one of the most iconic landmarks in Delhi, India. Built by the Mughal 
            Emperor Shah Jahan in 1638, the fort served as the main residence of 
            the Mughal emperors for nearly 200 years. Its stunning architecture, 
            made from red sandstone, reflects the grandeur of the Mughal era.
          </p>
          <p>
            The Red Fort is a masterpiece of Mughal design, featuring a mix of 
            Persian, Timurid, and Indian architectural styles. It is surrounded 
            by massive walls that stretch over 2 kilometers. Inside, visitors can 
            explore exquisite structures such as the Diwan-i-Aam (Hall of Public 
            Audience), Diwan-i-Khas (Hall of Private Audience), Rang Mahal, and 
            the famous Lahori Gate.
          </p>
          <p>
            The fort holds immense historical significance as it served as a 
            political and ceremonial center during the Mughal era. On India’s 
            Independence Day, the Prime Minister hoists the national flag and 
            addresses the nation from the Red Fort, making it a symbol of India’s 
            freedom and sovereignty.
          </p>
          <p>
            Today, the Red Fort attracts millions of tourists who come to admire 
            its stunning architecture and experience its rich history. The 
            sound-and-light show held in the evenings brings its glorious past to 
            life, offering a mesmerizing glimpse into India’s heritage.
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

export default RedFort;

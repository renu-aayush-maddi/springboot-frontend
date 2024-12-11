import React, { useEffect } from 'react';

const HawaMahal = () => {
  useEffect(() => {
    const initMap = () => {
      const hawaMahalLocation = { lat: 26.9239, lng: 75.8267 };
      const map = new window.google.maps.Map(document.getElementById('map'), {
        zoom: 15,
        center: hawaMahalLocation,
      });
      new window.google.maps.Marker({
        position: hawaMahalLocation,
        map: map,
        title: 'Hawa Mahal',
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
        <h1>Hawa Mahal - The Palace of Winds</h1>
      </header>
      <main style={styles.main}>
        <section>
          <h2>Location</h2>
          <div id="map" style={styles.map}></div>
        </section>
        <section>
          <h2>Images</h2>
          <img
            src="https://lonelyplanetimages.imgix.net/mastheads/GettyImages-469786746_super.jpg"
            style={styles.image}
          />
          <img
            src="https://th.bing.com/th/id/OLC.gihcRyBnmMlO4g480x360?&rs=1&pid=ImgDetMain"
            style={styles.image}
          />
        </section>
        <section>
          <h2>About Hawa Mahal</h2>
          <p>
            Located in the heart of Jaipur, Rajasthan, the **Hawa Mahal** or 
            "Palace of Winds" is an iconic architectural marvel. Built in 1799 
            by Maharaja Sawai Pratap Singh, it was designed by Lal Chand Ustad 
            in the form of Lord Krishna’s crown.
          </p>
          <p>
            The palace is made of red and pink sandstone, symbolizing Jaipur's 
            vibrant heritage. Its unique five-story facade with 953 intricately 
            carved windows (jharokhas) allowed the royal women to observe street 
            festivals and day-to-day activities without being seen, adhering to 
            the traditions of purdah.
          </p>
          <p>
            The honeycomb-like structure is an excellent example of Rajput 
            architecture infused with Mughal elements. The latticework ensures 
            a natural ventilation system, keeping the interiors cool even during 
            the scorching Rajasthan summers.
          </p>
          <p>
            Visitors can explore the upper floors of the palace, which offer 
            breathtaking views of the bustling city below. The palace stands as 
            a testament to Jaipur's rich cultural and historical legacy and 
            continues to draw tourists from around the world.
          </p>
        </section>
      </main>
    </div>
  );
};

const styles = {
  header: {
    backgroundColor: '#FF5733',
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

export default HawaMahal;

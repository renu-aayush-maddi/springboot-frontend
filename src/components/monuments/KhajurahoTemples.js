import React, { useEffect } from 'react';

const KhajurahoTemples = () => {
  useEffect(() => {
    const initMap = () => {
      const khajurahoLocation = { lat: 24.8318, lng: 79.9199 };
      const map = new window.google.maps.Map(document.getElementById('map'), {
        zoom: 15,
        center: khajurahoLocation,
      });
      new window.google.maps.Marker({
        position: khajurahoLocation,
        map: map,
        title: 'Khajuraho Temples',
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
        <h1>Khajuraho Temples - A World Heritage Masterpiece</h1>
      </header>
      <main style={styles.main}>
        <section>
          <h2>Location</h2>
          <div id="map" style={styles.map}></div>
        </section>
        <section>
          <h2>Images</h2>
          <img
            src="https://www.gosahin.com/go/p/b/1518795083_khajuraho_1.jpg"
            style={styles.image}
          />
          <img
            src="https://www.westend61.de/images/0001344237pw/lakshmana-temple-khajuraho-group-of-monuments-unesco-world-heritage-site-madhya-pradesh-state-india-asia-RHPLF14183.jpg"
            style={styles.image}
          />
        </section>
        <section>
          <h2>About Khajuraho Temples</h2>
          <p>
            The **Khajuraho Temples**, located in Madhya Pradesh, India, are 
            a UNESCO World Heritage Site and one of the finest examples of 
            Indian art and architecture. Built between the 9th and 11th centuries 
            by the Chandela dynasty, these temples are renowned for their intricate 
            carvings, stunning sculptures, and harmonious blend of spirituality 
            and sensuality.
          </p>
          <p>
            Out of the original 85 temples, around 25 have survived the test of 
            time. The temples are divided into three groups: **Western**, 
            **Eastern**, and **Southern** clusters, with the Western group being 
            the most famous for its architectural brilliance.
          </p>
          <p>
            The temples are dedicated to both Hindu and Jain deities, reflecting 
            a spirit of tolerance and inclusivity. Notable temples include the 
            **Kandariya Mahadev Temple**, dedicated to Lord Shiva, and the 
            **Lakshmana Temple**, dedicated to Lord Vishnu. The sculptures 
            adorning these temples depict various aspects of life, such as 
            gods and goddesses, celestial beings, musicians, and scenes from 
            everyday life, as well as intricate depictions of human emotions 
            and relationships.
          </p>
          <p>
            The erotic sculptures of Khajuraho, often misunderstood, symbolize 
            the celebration of life, love, and creativity, and serve as metaphors 
            for the union of the divine with the mortal. These masterpieces are 
            a testament to the advanced artistic and architectural skills of 
            the craftsmen of that era.
          </p>
          <p>
            Surrounded by beautifully landscaped gardens, the Khajuraho Temples 
            attract visitors from around the world, offering a unique blend of 
            history, culture, and spirituality.
          </p>
        </section>
      </main>
    </div>
  );
};

const styles = {
  header: {
    backgroundColor: '#4B0082',
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

export default KhajurahoTemples;

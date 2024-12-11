import React, { useEffect } from 'react';

const JantarMantar = () => {
  useEffect(() => {
    const initMap = () => {
      const jantarMantarLocation = { lat: 26.9246, lng: 75.8246 };
      const map = new window.google.maps.Map(document.getElementById('map'), {
        zoom: 15,
        center: jantarMantarLocation,
      });
      new window.google.maps.Marker({
        position: jantarMantarLocation,
        map: map,
        title: 'Jantar Mantar',
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
        <h1>Jantar Mantar - The Astronomical Marvel</h1>
      </header>
      <main style={styles.main}>
        <section>
          <h2>Location</h2>
          <div id="map" style={styles.map}></div>
        </section>
        <section>
          <h2>Images</h2>
          <img
            src="https://th.bing.com/th/id/OIP.jmAJuQr0EfgBdqa8V_m-bQHaFj?rs=1&pid=ImgDetMain"
            style={styles.image}
          />
          <img
            src="https://trendaroundus.in/wp-content/uploads/2020/09/The-Jantar-Mantar-Delhi-The-Worlds-Largest-Stone-Sundial-e1600388092266.jpg"
            style={styles.image}
          />
        </section>
        <section>
          <h2>About Jantar Mantar</h2>
          <p>
            **Jantar Mantar**, located in Jaipur, Rajasthan, is a UNESCO World 
            Heritage Site and one of the largest astronomical observatories in 
            the world. Built by Maharaja Sawai Jai Singh II in the 18th century, 
            this architectural masterpiece was designed to study celestial 
            phenomena and measure time with remarkable precision.
          </p>
          <p>
            The observatory houses 19 astronomical instruments, including the 
            world’s largest stone sundial, **Samrat Yantra**, which can measure 
            time to an accuracy of two seconds. Other notable instruments include 
            the **Jai Prakash Yantra**, which measures the position of celestial 
            bodies, and the **Rama Yantra**, used to calculate the altitude and 
            azimuth of planets.
          </p>
          <p>
            Jantar Mantar exemplifies a fusion of science, art, and culture, with 
            each instrument uniquely designed to fulfill a specific purpose. The 
            observatory demonstrates the advanced scientific knowledge and 
            innovation of its time.
          </p>
          <p>
            Today, Jantar Mantar stands as a symbol of India's rich scientific 
            heritage and continues to captivate visitors with its grandeur and 
            historical significance. It serves as an educational and cultural 
            site, attracting astronomers, historians, and tourists from around 
            the world.
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

export default JantarMantar;

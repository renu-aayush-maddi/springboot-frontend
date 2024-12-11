import React, { useEffect } from 'react';

const GatewayOfIndia = () => {
  useEffect(() => {
    const initMap = () => {
      const gatewayOfIndiaLocation = { lat: 18.9220, lng: 72.8347 };
      const map = new window.google.maps.Map(document.getElementById('map'), {
        zoom: 15,
        center: gatewayOfIndiaLocation,
      });
      new window.google.maps.Marker({
        position: gatewayOfIndiaLocation,
        map: map,
        title: 'Gateway of India',
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
        <h1>Gateway of India - The Iconic Monument of Mumbai</h1>
      </header>
      <main style={styles.main}>
        <section>
          <h2>Location</h2>
          <div id="map" style={styles.map}></div>
        </section>
        <section>
          <h2>Images</h2>
          <img
            src="https://th.bing.com/th/id/OIP.32sf7nIiSHvYZBd36sdhFAHaF7?rs=1&pid=ImgDetMain"
            style={styles.image}
          />
          <img
            src="https://3.bp.blogspot.com/-dQ1gcVL5A3o/Vhqj9ydvuQI/AAAAAAAAJ5U/uk1_d8CkHwM/s1600/Gateway-of-India-Nightview.jpg"
            style={styles.image}
          />
        </section>
        <section>
          <h2>About Gateway of India</h2>
          <p>
            The Gateway of India, located in Mumbai, is one of the most famous 
            landmarks in India. Built during the 20th century, this majestic 
            structure was originally constructed to commemorate the landing of 
            King George V and Queen Mary at Apollo Bunder during their visit to 
            India in 1911.
          </p>
          <p>
            Designed in the Indo-Saracenic style by architect George Wittet, the 
            Gateway of India stands 26 meters (85 feet) tall and overlooks the 
            Arabian Sea. It is made of yellow basalt and reinforced concrete, 
            with intricate latticework that reflects both Indian and Mughal 
            architectural influences. Its grand arch and towering structure make 
            it a symbol of Mumbai’s colonial history.
          </p>
          <p>
            The Gateway of India was also a significant site in India’s history, 
            marking the departure of the last British troops in 1948 after 
            India’s independence. Today, it is a popular tourist destination, 
            offering visitors stunning views of the Arabian Sea and a glimpse 
            into Mumbai’s vibrant culture.
          </p>
          <p>
            The surrounding area of the Gateway is bustling with activity, with 
            ferries departing for the Elephanta Caves and street vendors selling 
            local snacks and souvenirs. The Gateway of India continues to stand 
            as a proud symbol of Mumbai and India’s rich heritage.
          </p>
        </section>
      </main>
    </div>
  );
};

const styles = {
  header: {
    backgroundColor: '#1E90FF',
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

export default GatewayOfIndia;

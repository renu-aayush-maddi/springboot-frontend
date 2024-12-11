import React, { useEffect } from 'react';

const RaniKiVav = () => {
  useEffect(() => {
    const initMap = () => {
      const raniKiVavLocation = { lat: 23.8597, lng: 72.3877 };
      const map = new window.google.maps.Map(document.getElementById('map'), {
        zoom: 15,
        center: raniKiVavLocation,
      });
      new window.google.maps.Marker({
        position: raniKiVavLocation,
        map: map,
        title: 'Rani Ki Vav',
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
        <h1>Rani Ki Vav - The Queen's Stepwell</h1>
      </header>
      <main style={styles.main}>
        <section>
          <h2>Location</h2>
          <div id="map" style={styles.map}></div>
        </section>
        <section>
          <h2>Images</h2>
          <img
            src="https://th.bing.com/th/id/R.6197040cf992990cdd0f09eea54a19fd?rik=%2fWkjKKAnVSjVVw&riu=http%3a%2f%2fwww.mysteryofindia.com%2fwp-content%2fuploads%2f2014%2f08%2fIMG_3321.jpg&ehk=4uCrnE761%2fvyv2WNa5jmEhu1%2fO%2fFm3QFh%2bTakr0MOtU%3d&risl=&pid=ImgRaw&r=0"
            style={styles.image}
          />
          <img
            src="https://www.gujarattourism.com/content/dam/gujrattourism/images/heritage-sites/rani-ki-vav/Rani-Ki-Vav-1.jpg"
            style={styles.image}
          />
        </section>
        <section>
          <h2>About Rani Ki Vav</h2>
          <p>
            **Rani Ki Vav**, or "The Queen's Stepwell," is an architectural and 
            artistic masterpiece located in Patan, Gujarat, India. Built in the 
            11th century by Queen Udayamati in memory of her husband, King 
            Bhimdev I of the Solanki dynasty, this UNESCO World Heritage Site 
            exemplifies the grandeur of ancient Indian engineering and art.
          </p>
          <p>
            Designed as an inverted temple, Rani Ki Vav is a seven-tiered 
            structure adorned with over 1,500 intricately carved sculptures 
            depicting mythological and religious themes. The carvings include 
            representations of Hindu gods, celestial beings, and ornamental 
            motifs, showcasing the exceptional craftsmanship of the era.
          </p>
          <p>
            The stepwell served both as a source of water and as a spiritual 
            retreat, symbolizing the sanctity of water in Indian culture. The 
            meticulously planned design ensured efficient water management while 
            also providing a cool refuge during the scorching summers.
          </p>
          <p>
            Rani Ki Vav remains a testament to India's rich heritage, 
            engineering ingenuity, and artistic excellence. Visitors are drawn 
            to its breathtaking beauty and the stories embedded in its walls, 
            making it one of the finest examples of stepwell architecture in 
            India.
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

export default RaniKiVav;

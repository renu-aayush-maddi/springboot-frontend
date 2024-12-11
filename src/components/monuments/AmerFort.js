import React, { useEffect } from 'react';

const AmerFort = () => {
  useEffect(() => {
    const initMap = () => {
      const amerFortLocation = { lat: 26.9855, lng: 75.8513 };
      const map = new window.google.maps.Map(document.getElementById('map'), {
        zoom: 15,
        center: amerFortLocation,
      });
      new window.google.maps.Marker({
        position: amerFortLocation,
        map: map,
        title: 'Amer Fort',
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
        <h1>Amer Fort - The Majestic Jewel of Jaipur</h1>
      </header>
      <main style={styles.main}>
        <section>
          <h2>Location</h2>
          <div id="map" style={styles.map}></div>
        </section>
        <section>
          <h2>Images</h2>
          <img
            src="hhttps://2.bp.blogspot.com/-Bp9W3ArSvRY/WTU3_0pB9TI/AAAAAAAAAn0/2E-b5FODjxY00pb1NfI7m8my-99FNgK7gCLcB/s1600/Amer_Fort_Tourist_Place_in_India_HD_Photo.jpg"
            style={styles.image}
          />
          <img
            src="https://www.travelwithcg.com/wp-content/uploads/2021/02/Ganesh-Pol-2048x1365.jpg"
            style={styles.image}
          />
        </section>
        <section>
          <h2>About Amer Fort</h2>
          <p>
            Located in the historic city of Jaipur, Rajasthan, **Amer Fort** (or 
            Amber Fort) is a UNESCO World Heritage Site that stands as a shining 
            example of Rajputana architecture and culture. Built by Raja Man Singh 
            in 1592, this magnificent fort is perched on a hill, overlooking the 
            Maota Lake, offering breathtaking views of the surrounding landscape.
          </p>
          <p>
            Amer Fort is a stunning blend of Hindu and Mughal architectural styles. 
            Constructed with red sandstone and marble, the fort is known for its 
            intricate carvings, ornate palaces, and grand courtyards. Key attractions 
            within the fort include the **Sheesh Mahal** (Mirror Palace), **Diwan-i-Aam** 
            (Hall of Public Audience), **Diwan-i-Khas** (Hall of Private Audience), 
            and the **Ganesh Pol** gate adorned with beautiful frescoes.
          </p>
          <p>
            The **Sheesh Mahal** is particularly famous for its intricate mirror work, 
            where even a single ray of light can illuminate the entire hall. Another 
            highlight is the **Sukh Niwas**, where a cool climate is maintained 
            through an ingenious water system, showcasing the advanced engineering 
            of the time.
          </p>
          <p>
            Amer Fort has played a significant role in Rajasthan's history, serving 
            as the residence of the royal family. Today, it is a major tourist 
            attraction, drawing visitors from around the world to marvel at its 
            grandeur and immerse themselves in its rich history.
          </p>
          <p>
            Visitors can enjoy an **elephant ride** up to the fort, explore its 
            sprawling courtyards, or experience the mesmerizing **light-and-sound 
            show** held in the evenings, which narrates the fort's fascinating 
            history.
          </p>
        </section>
      </main>
    </div>
  );
};

const styles = {
  header: {
    backgroundColor: '#8B4513',
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

export default AmerFort;

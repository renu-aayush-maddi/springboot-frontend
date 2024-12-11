import React, { useEffect } from 'react';

const Charminar = () => {
  useEffect(() => {
    const initMap = () => {
      const charminarLocation = { lat: 17.3616, lng: 78.4747 };
      const map = new window.google.maps.Map(document.getElementById('map'), {
        zoom: 15,
        center: charminarLocation,
      });
      new window.google.maps.Marker({
        position: charminarLocation,
        map: map,
        title: 'Charminar',
      });
    };

    if (!window.google) {
      const script = document.createElement('script');
      script.src = `https://maps.googleapis.com/maps/api/js?key=AIzaSyDqOIJO2ldFaC_4O6gaj4mJ4ViSpPlh4uo`;
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
      <header style={styles.header1}>
        <h1>Charminar - The Iconic Landmark of Hyderabad</h1>
      </header>
      <main style={styles.main}>
        <section>
          <h2>Location</h2>
          <div id="map" style={styles.map}></div>
        </section>
        <section>
          <h2>Images</h2>
          <img
            src="https://images.unsplash.com/photo-1441911645956-df6e9bbc5496?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8Y2hhcm1pbmFyfGVufDB8fDB8fHww"
            alt="Charminar"
            style={styles.image1}
          />
          <img
            src="https://th.bing.com/th?id=OSK.HEROENm1gFWkuFckB_jNBCZ-grJCgRlBl3qmfUMMZ5A4CM8&w=312&h=200&c=15&rs=2&r=0&o=6&dpr=1.1&pid=SANGAM"
            alt="Charminar at Night"
            style={styles.image1}
          />
        </section>
        <section>
          <h2>About Charminar</h2>
          <p>
            Charminar, a magnificent architectural marvel, stands at the heart
            of Hyderabad, India, as a symbol of the city’s rich history and
            cultural heritage. Built in 1591 by Muhammad Quli Qutb Shah, the
            fifth ruler of the Qutb Shahi dynasty, Charminar was constructed to
            commemorate the end of a devastating plague that had ravaged the
            region. The structure’s name, Charminar, is derived from two Urdu
            words, “Char” meaning four and “Minar” meaning towers, reflecting
            its four grand minarets that are an integral part of its design.
          </p>
          <p>
            Charminar’s unique Indo-Islamic architecture, combined with Persian
            elements, makes it a standout landmark. The structure is built from
            granite and lime mortar, adorned with intricate stucco decorations
            that showcase the artistry of the era. Each of the four minarets
            rises to a height of 48.7 meters and features a double balcony.
            These minarets are connected to massive arches, which form the four
            grand entrances to the monument, allowing it to serve as a central
            meeting point in the bustling old city of Hyderabad.
          </p>
          <p>
            At the base of Charminar, visitors can explore a mosque on the
            western side, which continues to be an active place of worship. The
            upper floor houses an open gallery offering panoramic views of the
            surrounding area, including the vibrant Laad Bazaar, known for its
            traditional bangles and pearls, and the nearby Mecca Masjid, one of
            the largest mosques in India.
          </p>
          <p>
            Over the centuries, Charminar has become a symbol of Hyderabad’s
            identity and resilience. It has witnessed the city’s transformation
            from a medieval center of trade and culture to a bustling modern
            metropolis. Today, the monument is a popular tourist attraction,
            drawing visitors from across the globe to admire its beauty and
            immerse themselves in the city’s history.
          </p>
          <p>
            Charminar’s surroundings are equally captivating, with vibrant
            markets, traditional eateries, and historic landmarks creating a
            lively and culturally rich atmosphere. Its preservation is a
            testament to the city’s commitment to safeguarding its heritage
            while embracing the future. Whether it’s the intricate carvings on
            its walls, the stories of its past, or the vibrant life that unfolds
            around it, Charminar continues to inspire awe and admiration among
            those who visit.
          </p>
        </section>
      </main>
    </div>
  );
};

const styles = {
  header1: {
    backgroundColor: '#333',
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
  image1: {
    maxWidth: '700px',
    height: '700px',
    marginBottom: '20px',
  },
};

export default Charminar;

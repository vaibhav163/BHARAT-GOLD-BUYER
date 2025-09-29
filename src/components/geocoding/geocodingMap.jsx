import React, { useRef, useState, useEffect, useCallback } from 'react';
import styles from './GeocodingMap.module.css';

// Replace with your actual Google Maps API Key
const GOOGLE_MAPS_API_KEY = "https://maps.googleapis.com/maps/api/js?key=INSERT_YOUR_API_KEY&callback=initMap&v=weekly&solution_channel=GMP_CCS_geocodingservice_v2";

const GeocodingMap = () => {
  const mapRef = useRef(null); // Ref for the map DOM element
  const [map, setMap] = useState(null);
  const [geocoder, setGeocoder] = useState(null);
  const [marker, setMarker] = useState(null);
  const [addressInput, setAddressInput] = useState('');
  const [response, setResponse] = useState('');
  const [isApiLoaded, setIsApiLoaded] = useState(false);

  // Function to load the Google Maps API script
  const loadGoogleMapsScript = () => {
    if (window.google) {
      setIsApiLoaded(true);
      return;
    }

    const script = document.createElement('script');
    script.src = `https://maps.googleapis.com/maps/api/js?key=${GOOGLE_MAPS_API_KEY}&callback=initMapCallback&v=weekly&solution_channel=GMP_CCS_geocodingservice_v2`;
    script.async = true;
    script.defer = true;
    document.head.appendChild(script);

    // Global callback for the Google Maps API script
    window.initMapCallback = () => {
      setIsApiLoaded(true);
    };

    script.onerror = () => {
      console.error("Google Maps API script failed to load.");
      // Handle error gracefully, perhaps show a message to the user
    };
  };

  useEffect(() => {
    loadGoogleMapsScript();
  }, []); // Run only once on component mount

  // Initialize Map and Geocoder once API is loaded and mapRef is available
  useEffect(() => {
    if (isApiLoaded && mapRef.current && !map) {
      const googleMap = new window.google.maps.Map(mapRef.current, {
        zoom: 8,
        center: { lat: -34.397, lng: 150.644 },
        mapTypeControl: false,
      });
      setMap(googleMap);
      setGeocoder(new window.google.maps.Geocoder());
      setMarker(new window.google.maps.Marker({ map: googleMap }));
    }
  }, [isApiLoaded, map, marker]); // Dependencies for this effect

  // Clear function
  const clear = useCallback(() => {
    if (marker) {
      marker.setMap(null);
    }
    setResponse('');
  }, [marker]);

  // Geocode function
  const geocode = useCallback((request) => {
    if (!geocoder || !map || !marker) return;

    clear();
    geocoder
      .geocode(request)
      .then((result) => {
        const { results } = result;

        if (results.length > 0) {
          map.setCenter(results[0].geometry.location);
          marker.setPosition(results[0].geometry.location);
          marker.setMap(map); // Ensure marker is visible
          setResponse(JSON.stringify(result, null, 2));
        } else {
          setResponse('No results found for the given location.');
          alert("Geocode was not successful: No results found.");
        }
        return results;
      })
      .catch((e) => {
        setResponse(`Error: ${e.message}`);
        alert("Geocode was not successful for the following reason: " + e.message);
      });
  }, [geocoder, map, marker, clear]);

  // Add map click listener
  useEffect(() => {
    if (map) {
      const clickListener = map.addListener("click", (e) => {
        geocode({ location: e.latLng });
      });
      // Cleanup listener on unmount
      return () => {
        window.google.maps.event.removeListener(clickListener);
      };
    }
  }, [map, geocode]); // Re-run if map or geocode function changes

  if (!isApiLoaded) {
    return <div className={styles.loadingMessage}>Loading Google Maps...</div>;
  }

  return (
    <div className={styles.fullPageContainer}>
      <div id="map" ref={mapRef} className={styles.map}></div>

      {/* Control elements moved to JSX for React rendering */}
      <div className={styles.controlsContainer}>
        <input
          type="text"
          placeholder="Enter a location"
          value={addressInput}
          onChange={(e) => setAddressInput(e.target.value)}
          className={styles.inputText}
        />
        <input
          type="button"
          value="Geocode"
          onClick={() => geocode({ address: addressInput })}
          className={`${styles.button} ${styles.buttonPrimary}`}
        />
        <input
          type="button"
          value="Clear"
          onClick={clear}
          className={`${styles.button} ${styles.buttonSecondary}`}
        />
        <p className={styles.instructions}>
          <strong>Instructions</strong>: Enter an address in the textbox to geocode or click on the map to reverse geocode.
        </p>
        <div className={styles.responseContainer}>
          <pre className={styles.response}>{response}</pre>
        </div>
      </div>
    </div>
  );
};

export default GeocodingMap;
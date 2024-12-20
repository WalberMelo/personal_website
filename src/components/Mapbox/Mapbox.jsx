import React, { useRef, useEffect } from "react";
import mapboxgl from "mapbox-gl";

import "mapbox-gl/dist/mapbox-gl.css";

const Mapbox = () => {
  const mapRef = useRef(null);
  const mapContainerRef = useRef(null);

  useEffect(() => {
    mapboxgl.accessToken =
      "pk.eyJ1Ijoid2FsYmVybWVsbyIsImEiOiJjbTRkOTNpODcwaGpwMmtzYXZybnBiOXVvIn0.6-7LUwwEmEhy8SkKDfIFlA";

    // Initialize the map
    mapRef.current = new mapboxgl.Map({
      container: mapContainerRef.current, // Reference to the map container
      style: "mapbox://styles/mapbox/satellite-v9", // Specify the map style
      center: [-90, 40], // Initial map center [lng, lat]
      zoom: 1, // Initial zoom level
      projection: "globe", // Optional: Use globe projection
    });

    const map = mapRef.current;

    map.on("style.load", () => {
      map.setFog({}); // Set the default atmosphere style
    });

    // At low zooms, complete a revolution every two minutes.
    const secondsPerRevolution = 120;
    // Above zoom level 5, do not rotate.
    const maxSpinZoom = 5;
    // Rotate at intermediate speeds between zoom levels 3 and 5.
    const slowSpinZoom = 3;

    let userInteracting = false;
    let spinEnabled = true;

    function spinGlobe() {
      const zoom = map.getZoom();
      if (spinEnabled && !userInteracting && zoom < maxSpinZoom) {
        let distancePerSecond = 360 / secondsPerRevolution;
        if (zoom > slowSpinZoom) {
          // Slow spinning at higher zooms
          const zoomDif = (maxSpinZoom - zoom) / (maxSpinZoom - slowSpinZoom);
          distancePerSecond *= zoomDif;
        }
        const center = map.getCenter();
        center.lng -= distancePerSecond;
        // Smoothly animate the map over one second.
        // When this animation is complete, it calls a 'moveend' event.
        map.easeTo({ center, duration: 1000, easing: (n) => n });
      }
    }

    // Pause spinning on interaction
    map.on("mousedown", () => {
      userInteracting = true;
    });

    // Restart spinning the globe when interaction is complete
    map.on("mouseup", () => {
      userInteracting = false;
      spinGlobe();
    });

    // These events account for cases where the mouse has moved
    // off the map, so 'mouseup' will not be fired.
    map.on("dragend", () => {
      userInteracting = false;
      spinGlobe();
    });
    map.on("pitchend", () => {
      userInteracting = false;
      spinGlobe();
    });
    map.on("rotateend", () => {
      userInteracting = false;
      spinGlobe();
    });

    // When animation is complete, start spinning if there is no ongoing interaction
    map.on("moveend", () => {
      spinGlobe();
    });

    spinGlobe();

    // Clean up on component unmount
    return () => {
      mapRef.current.remove();
    };
  }, []);

  return (
    <div
      id="map-container"
      ref={mapContainerRef}
      style={{ height: "100%", width: "100%" }}
    ></div>
  );
};

export default Mapbox;

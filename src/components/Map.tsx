import React, { useEffect, useState } from "react";
import Map, { Marker, Popup } from "react-map-gl";
import "mapbox-gl/dist/mapbox-gl.css";

const MapComponent: React.FC = () => {
  const [viewState, setViewState] = useState({
    latitude: -26.2041, // Default coordinates (e.g., Johannesburg, South Africa)
    longitude: 28.0473,
    zoom: 10,
  });

  const [userLocation, setUserLocation] = useState<{
    latitude: number;
    longitude: number;
  } | null>(null);

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        setUserLocation({
          latitude: position.coords.latitude,
          longitude: position.coords.longitude,
        });
        setViewState({
          ...viewState,
          latitude: position.coords.latitude,
          longitude: position.coords.longitude,
          zoom: 14,
        });
      },
      (error) => console.error("Error fetching location:", error),
      { enableHighAccuracy: true }
    );
  }, []);


  return (
    <div className="w-full h-screen">
      <Map
        {...viewState}
        onMove={(evt) => setViewState(evt.viewState)}
        mapboxAccessToken={process.env.REACT_APP_MAPBOX_ACCESS_TOKEN}
        mapStyle="mapbox://styles/mapbox/streets-v11" // Map style (can customize)
      >
        {/* Example Marker */}
        <Marker latitude={-26.2041} longitude={28.0473}>
          <div className="bg-red-500 w-4 h-4 rounded-full" />
        </Marker>

        {/* Example Popup */}
        <Popup latitude={-26.2041} longitude={28.0473} closeButton={true} closeOnClick={false}>
          <div>HealthLink Location</div>
        </Popup>
      </Map>
    </div>
  );
};

export default MapComponent;

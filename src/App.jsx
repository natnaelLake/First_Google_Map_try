import { GoogleMap, Marker, useJsApiLoader } from "@react-google-maps/api";
import "./App.css";

const center = {
  lat: 9.005401,
  lng: 38.763611,
};

function App() {
  const { isLoaded } = useJsApiLoader({
    id: "google-map-script",
    googleMapsApiKey: "AIzaSyDqX5BqmsLcV91pKtQ_EOIqsg03hVHvm8Q",
  });

  return isLoaded ? (
    <GoogleMap mapContainerClassName="map-container" center={center} zoom={10}>
      <Marker position={center} className="map-marker" />
    </GoogleMap>
  ) : (
    <></>
  );
}

export default App;

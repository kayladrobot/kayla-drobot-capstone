import React from "react";
import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";

const containerStyle = {
  width: "100%",
  height: "400px",
};

const center = {
  lat: 51.505,
  lng: -0.09,
};

const Map = () => {
  return (
    <LoadScript googleMapsApiKey="AIzaSyCbmUMQ8BvBc7VfBbr-5etQSLcrM4Z8-AU">
      <GoogleMap mapContainerStyle={containerStyle} center={center} zoom={13}>
        {/* Add markers */}
        <Marker position={center} />
      </GoogleMap>
    </LoadScript>
  );
};

export default Map;


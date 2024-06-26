"use client";
import * as React from "react";
import { MapContainer, TileLayer, Marker, useMap } from "react-leaflet";

const RecenterOnChange = ({
  coords,
}: {
  coords: { lat: number; lng: number };
}) => {
  const map = useMap();
  React.useEffect(() => {
    map.flyTo([coords.lat, coords.lng], 18, {
      animate: true,
      duration: 5,
      easeLinearity: 0.75,
    });
  }, [coords]);
  return null;
};

function IPMapper({ coords }: { coords: { lat: number; lng: number } }) {
  return (
    <MapContainer
      center={[coords.lat, coords.lng]}
      zoom={13}
      scrollWheelZoom={true}
      id="map"
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <Marker position={[coords.lat, coords.lng]}></Marker>
      <RecenterOnChange coords={coords} />
    </MapContainer>
  );
}

export default IPMapper;

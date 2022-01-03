import React from 'react';
import {MapContainer, Marker, Popup, TileLayer} from 'react-leaflet';
import '../App.css';

const MapComponent = ({positions}) => {

  console.log(positions);
  return (
    <MapContainer center={[51.505, -0.09]} zoom={13} scrollWheelZoom={true}>
      <TileLayer
        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      {
        positions.map(p =>
          <Marker position={[p.latitude, p.longitude]}>
            <Popup>
              latitude: {p.latitude} <br/>
              longitude: {p.longitude} <br/>
              created: {p.creation_date} <br/>
            </Popup>
          </Marker>,
        )
      }
    </MapContainer>
  );
};

export default MapComponent;

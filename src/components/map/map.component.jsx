import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";

const Map = ({ locations }) => {
  return (
    <MapContainer
      center={[37.786468696182794, -122.45322081631939]}
      zoom={13}
      scrollWheelZoom={false}
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      {locations.data.data.map((location) => {
        return (
          <Marker
            key={location._id}
            position={[
              `${location.coordinates[0]}`,
              `${location.coordinates[1]}`,
            ]}
          >
            <Popup>{location.popupDescription}</Popup>
          </Marker>
        );
      })}
    </MapContainer>
  );
};

export default Map;

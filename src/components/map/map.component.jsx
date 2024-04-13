import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import * as L from "leaflet";
import { useState } from "react";

const Map = ({ locations }) => {
  //  Create the Icon
  const LeafIcon = L.Icon.extend({
    options: {},
  });

  const blackIcon = new LeafIcon({
    iconUrl:
      "https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-black.png",
  });

  const blackx2Icon = new LeafIcon({
    iconUrl:
      "https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-black.png",
  });

  // //  Use the state hook:
  const [icon, setIcon] = useState(blackIcon);

  // // This function will change the state's icon:

  // const changeIconColor = (icon) => {
  //   if (icon.options.iconUrl === blackIcon.options.iconUrl) {
  //     setIcon((current) => (current = blackIcon));
  //   }
  // };

  return (
    <MapContainer
      center={[37.779266172448885, -122.40718562355106]}
      zoom={14}
      scrollWheelZoom={false}
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      {locations.data.data.map((location) => {
        return (
          <Marker
            icon={blackIcon}
            key={location._id}
            position={[
              `${location.coordinates[0]}`,
              `${location.coordinates[1]}`,
            ]}
            eventHandlers={{
              mouseover: (event) => event.target.openPopup(),
            }}
          >
            <Popup>{location.popupDescription}</Popup>
          </Marker>
        );
      })}
    </MapContainer>
  );
};

export default Map;

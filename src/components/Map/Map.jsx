import React, { useRef, useEffect, useState } from "react";
import L from "leaflet";
import { createUseStyles } from "react-jss";
import clsx from "clsx";

const useStyles = createUseStyles({
  map: {
    width: "860px",
    height: "586px",
    zIndex: 1,
  },
});

const Map = ({className, country, ...props}) => {
  const classes = useStyles();
  const [map, setMap] = useState(null);
  const mapElement = useRef(null);

  useEffect(() => {
    setMap(mapInit(mapElement.current));
  }, []);

  useEffect(() => {
    country ? flyToMapPosition(map, country.coordinates) : "";
  }, [country]);

  //render
  return <div className={clsx(classes.map, className)} ref={mapElement}></div>;
};

export default Map;

function mapInit(mapElement) {
  var map = L.map(mapElement).setView([0, 0], 10);
  const attribution =
    '&copy; <a style="font-size:12px" href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors';
  const tileURL = "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"; // Supplier of tiles for map
  L.tileLayer(tileURL, { minZoom: 2, attribution }).addTo(map);
  return map;
}
function flyToMapPosition(map, { longitude, latitude }) {
  //change view of map to random country latlng location
  map.flyTo(
    {
      lat: latitude,
      lng: longitude,
    },
    6
  );
}

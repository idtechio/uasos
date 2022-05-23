import React, { useCallback, useEffect, useState } from "react";

import { GoogleMap, Marker, useJsApiLoader } from "@react-google-maps/api";

const API_KEY = process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY as string;

const defaultOptions = {
  keyboardShortcuts: false,
  fullscreenControl: false,
};

const containerStyle = {
  width: "100%",
  height: "100%",
};

const center = {
  lat: 51.3428229,
  lng: 26.6008043,
};

interface MapComponentProps {
  marker: {
    lat: number;
    lng: number;
  };
}

type Libraries = (
  | "drawing"
  | "geometry"
  | "localContext"
  | "places"
  | "visualization"
)[];

const libraries: Libraries = ["places"];

export const MapComponent = ({ marker }: MapComponentProps) => {
  const { isLoaded } = useJsApiLoader({
    id: "google-map-script",
    googleMapsApiKey: API_KEY,
    libraries,
  });

  const [map, setMap] = useState<google.maps.Map | null>(null);

  const onLoad = useCallback((map) => setMap(map), []);

  useEffect(() => {
    if (map) {
      const bounds = new google.maps.LatLngBounds();

      bounds.extend({
        lat: marker.lat,
        lng: marker.lng,
      });

      map.fitBounds(bounds);

      map.setZoom(17);
    }
  }, [map, marker]);

  return isLoaded ? (
    <GoogleMap
      zoom={10}
      center={center}
      onLoad={onLoad}
      options={defaultOptions}
      mapContainerStyle={containerStyle}
    >
      {<Marker position={marker as google.maps.LatLngLiteral} />}
    </GoogleMap>
  ) : null;
};

import "./App.css";

// function App() {
//   return <div className="loader"></div>;
// }
import React, { useState } from "react";
import DeckGL from "@deck.gl/react";
import { TerrainLayer } from "@deck.gl/geo-layers";

const ELEVATION_DECODER = {
  rScaler: 2,
  gScaler: 0,
  bScaler: 0,
  offset: -10000,
};

const INITIAL_VIEW_STATE = {
  latitude: 46.24,
  longitude: -122.18,
  zoom: 11.5,
  bearing: 140,
  pitch: 60,
};

function App() {
  const [elevation, setElevation] = useState(null);

  const layer = new TerrainLayer({
    id: "terrain",
    minZoom: 0,
    maxZoom: 23,
    strategy: "no-overlap",
    elevationDecoder: ELEVATION_DECODER,
    elevationData:
      "https://raw.githubusercontent.com/visgl/deck.gl-data/master/website/terrain.png",
    texture:
      "https://raw.githubusercontent.com/visgl/deck.gl-data/master/website/terrain-mask.png",
    bounds: [-122.5233, 37.6493, -122.3566, 37.8159],
  });

  return (
    <>
      <DeckGL
        initialViewState={INITIAL_VIEW_STATE}
        controller={true}
        layers={[layer]}
        onHover={({ object }) => {
          if (object) {
            setElevation(object.position[2]);
          } else {
            setElevation(null);
          }
        }}
      />
      <div>Elevation: {elevation}</div>
    </>
  );
}

export default App;

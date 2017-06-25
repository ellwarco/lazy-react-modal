import React, { Component } from 'react';

import ReactMapboxGl, { Layer, Feature } from "react-mapbox-gl";

export default class Map extends Component {
  render() {
    const Map = ReactMapboxGl({
      accessToken: "pk.eyJ1IjoianBkZXZyaWVzIiwiYSI6ImNqM2lycnU1dDAwZzUycXFzNDVmcTBreHUifQ.3QYwIac-tqawPlRnzSeoVw"
    });

    return (
      <Map
        style="mapbox://styles/mapbox/outdoors-v10"
        center={[6.140166106, 53.152332724]}
        zoom={[12]}
        bearing={-8}
        pitch={42}
        containerStyle={{
          height: "80vh",
          width: "80vw"
        }}>
          <Layer
            type="symbol"
            id="marker"
            layout={{ "icon-image": "marker-15" }}>
            <Feature coordinates={[6.140166106, 53.152332724]}/>
          </Layer>
      </Map>
    );
  }
}

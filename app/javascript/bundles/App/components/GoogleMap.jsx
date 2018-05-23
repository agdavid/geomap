import React, { Component } from 'react';

class GoogleMap extends Component {
  constructor(props) {
    super(props);

  }

  componentDidMount() {
    this.loadMap();
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevProps.coordinates !== this.props.coordinates) {
      this.loadMap();
      this.loadFeatures();
    }
  }

  loadMap() {
    const mapConfig = {
      zoom: 4,
      center: {
        lat: this.props.coordinates.lat,
        lng: this.props.coordinates.lng,
      }
    }
    this.map = new google.maps.Map(this.refs.map, mapConfig);
  }

  loadFeatures() {
    // features = [ {GeoJSON feature},...,{GeoJSON feature} ]
    this.props.features.map( feature => {
      let geojson = turf.featureCollection([feature]);
      let districtLayer = new google.maps.Data();
      districtLayer.addGeoJson(geojson);
      districtLayer.setMap(this.map);
    });
  }

  render() {
    // react ref allows this.refs.map
    return(
      <div ref="map" id="map"></div>
    );
  }
}

export default GoogleMap;

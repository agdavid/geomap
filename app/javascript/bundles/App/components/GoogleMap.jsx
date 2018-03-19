import React, { Component } from 'react';

class GoogleMap extends Component {
  constructor(props) {
    super(props);

  }

  componentDidMount() {
    new google.maps.Map(this.refs.map, {
      zoom: 7,
      center: {
        lat: -1.423559,
        lng: 37.906193,
      }
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

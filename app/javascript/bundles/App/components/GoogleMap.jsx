import React, { Component } from 'react';

class GoogleMap extends Component {
  constructor(props) {
    super(props);

  }

  componentDidMount() {
    var lat = this.props.coordinates.lat;
    var lng = this.props.coordinates.lng;

    new google.maps.Map(this.refs.map, {
      zoom: 7,
      center: {
        lat: lat,
        lng: lng,
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

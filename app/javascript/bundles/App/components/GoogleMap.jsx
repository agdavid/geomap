import React, { Component } from 'react';

class GoogleMap extends Component {
  constructor(props) {
    super(props);

  }

  loadMap() {
    const mapConfig = {
      zoom: 7,
      center: {
        lat: this.props.coordinates.lat,
        lng: this.props.coordinates.lng,
      }
    }
    this.map = new google.maps.Map(this.refs.map, mapConfig);
  }

  componentDidMount() {
    this.loadMap();
    // var lat = this.props.coordinates.lat;
    // var lng = this.props.coordinates.lng;
    //
    // new google.maps.Map(this.refs.map, {
    //   zoom: 7,
    //   center: {
    //     lat: lat,
    //     lng: lng,
    //   }
    // });
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevProps.coordinates !== this.props.coordinates) {
      this.loadMap();
    }
  }

  render() {
    // react ref allows this.refs.map
    return(
      <div ref="map" id="map"></div>
    );
  }
}

export default GoogleMap;

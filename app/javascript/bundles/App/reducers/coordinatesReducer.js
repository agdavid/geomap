import {
  LOAD_COUNTRY_SUCCESS
} from '../constants/';
import initialState from './initialState';

function calculateCoordinates(country) {
  // use turf included from CDN script
  var center = turf.center(country);
  // standard is (lng, lat) except GoogleMaps so remember to flip coordinates
  var coordinates = { lat: center.geometry.coordinates[1], lng: center.geometry.coordinates[0] };
  return coordinates;
}

export default function coordinatesReducer(state = initialState.coordinates, action) {
  switch (action.type) {
    case LOAD_COUNTRY_SUCCESS:
      return calculateCoordinates(action.country);
    default:
      return state;
  }
};

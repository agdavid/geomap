import {
  LOAD_COUNTRY_SUCCESS
} from '../constants/';
import initialState from './initialState';

function calculateCoordinates(country) {
  console.log("In calculateCoordinates!");
  console.log(country);
  return initialState.coordinates;
}

export default function coordinatesReducer(state = initialState.coordinates, action) {
  switch (action.type) {
    case LOAD_COUNTRY_SUCCESS:
      return calculateCoordinates(action.country);
    default:
      return state;
  }
};

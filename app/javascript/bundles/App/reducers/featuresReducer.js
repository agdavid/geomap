import {
  LOAD_COUNTRY_SUCCESS
} from '../constants';
import initialState from './initialState';

function getCountryFeatures(country) {
  return country.features;
}

export default function featuresReducer(state = initialState.features, action) {
  switch(action.type) {
    case LOAD_COUNTRY_SUCCESS:
      return getCountryFeatures(action.country);
    default:
      return state;
  }
};

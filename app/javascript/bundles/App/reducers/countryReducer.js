import {
  LOAD_COUNTRY_SUCCESS
} from '../constants/';
import initialState from './initialState';

export default function countryReducer(state = initialState.country, action) {
  switch (action.type) {
    case LOAD_COUNTRY_SUCCESS:
      return action.country;
    default:
      return state;
  }
}

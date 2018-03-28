import {
  LOAD_COUNTRIES_SUCCESS
} from '../constants/';
import initialState from './initialState';

export default function countriesReducer(state = initialState.countries, action) {
  switch (action.type) {
    case LOAD_COUNTRIES_SUCCESS:
      return action.countries;
    default:
      return state;
  }
};

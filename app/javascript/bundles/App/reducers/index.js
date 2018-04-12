import { combineReducers } from 'redux';
import nameReducer from './nameReducer';
import countriesReducer from './countriesReducer';
import countryReducer from './countryReducer';
import coordinatesReducer from './coordinatesReducer';

const rootReducer = combineReducers({
  name: nameReducer,
  countries: countriesReducer,
  country: countryReducer,
  coordinates: coordinatesReducer,
});

export default rootReducer;

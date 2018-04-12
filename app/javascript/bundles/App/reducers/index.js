import { combineReducers } from 'redux';
import nameReducer from './nameReducer';
import countriesReducer from './countriesReducer';
import countryReducer from './countryReducer'

const rootReducer = combineReducers({
  name: nameReducer,
  countries: countriesReducer,
  country: countryReducer,
});

export default rootReducer;

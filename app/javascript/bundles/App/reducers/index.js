import { combineReducers } from 'redux';
import nameReducer from './nameReducer';
import countriesReducer from './countriesReducer';

const rootReducer = combineReducers({
  name: nameReducer,
  countries: countriesReducer,
});

export default rootReducer;

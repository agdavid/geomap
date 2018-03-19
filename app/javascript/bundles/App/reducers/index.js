import { combineReducers } from 'redux';
import NameReducer from './NameReducer';

const rootReducer = combineReducers({
  name: NameReducer
});

export default rootReducer;

import {
  HELLO_WORLD_NAME_UPDATE
} from '../constants/';
import initialState from './initialState';

export default function nameReducer(state = initialState.name, action) {
  switch (action.type) {
    case HELLO_WORLD_NAME_UPDATE:
      return action.text;
    default:
      return state;
  }
};

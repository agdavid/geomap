import {
  HELLO_WORLD_NAME_UPDATE
} from '../constants/';

const INITIAL_STATE = '';

export default function nameReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case HELLO_WORLD_NAME_UPDATE:
      return action.text;
    default:
      return state;
  }
};

import { HELLO_WORLD_NAME_UPDATE } from '../constants/index';

export default function nameReducer(state = '', action) {
  switch (action.type) {
    case HELLO_WORLD_NAME_UPDATE:
      return action.text;
    default:
      return state;
  }
};

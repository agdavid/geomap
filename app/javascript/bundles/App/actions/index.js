import { HELLO_WORLD_NAME_UPDATE } from '../constants/index';

export function updateName(text) {
  return {
    type: HELLO_WORLD_NAME_UPDATE,
    text: text,
  };
}

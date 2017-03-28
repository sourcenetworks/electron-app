import * as types from '../actions/actionTypes';
import { WELCOME } from '../constants/screenNames';

// state is an enum, not an object
export default function screenReducer(state = WELCOME, action) {
  switch (action.type) {
    case types.SWITCH_TO: {
      const { newScreenName } = action;
      return newScreenName;
    }
    default:
      return state;
  }
}

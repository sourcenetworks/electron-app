import {
  SWITCH_HUB_TAB,
  TOGGLE_DRAWER,
} from '../actions/actionTypes';

const initialState = {
  currentTab: 0,
  currentSpeed: 5.1,
  drawerOpen: false,
};

export default function screenReducer(state = initialState, { type, payload }) {
  switch (type) {
    case SWITCH_HUB_TAB:
      return { ...state, currentTab: payload };
    case TOGGLE_DRAWER:
      return { ...state, drawerOpen: !state.drawerOpen };
    default:
      return state;
  }
}

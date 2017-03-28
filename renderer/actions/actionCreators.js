import {
  SWITCH_HUB_TAB,
  TOGGLE_DRAWER,
} from './actionTypes';

export const switchHubTab = newTab => ({
  type: SWITCH_HUB_TAB,
  payload: newTab,
});

export const toggleDrawer = () => ({
  type: TOGGLE_DRAWER,
});

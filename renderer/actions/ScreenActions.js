import * as types from '../actions/actionTypes';
import { HUB } from '../constants/screenNames';

// eslint-disable-next-line import/prefer-default-export
export const switchTo = newScreenName => ({ type: types.SWITCH_TO, newScreenName });

export function switchToHub() {
  return switchTo(HUB);
}

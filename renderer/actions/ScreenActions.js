import * as types from '../constants/screenActionTypes';

// eslint-disable-next-line import/prefer-default-export
export const switchTo = newScreenName => ({ type: types.SWITCH_TO, newScreenName });

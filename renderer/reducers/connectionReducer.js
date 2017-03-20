import { handle } from 'redux-pack';
import * as types from '../actions/actionTypes';
import * as status from '../constants/connectionStatus';

const initialConnectionState = {
  status: status.OFFLINE,
  networkName: null,
};

export default function connectionReducer(state = initialConnectionState, action) {
  const { type, payload } = action;
  switch (type) {
    case types.SCAN_AND_CONNECT:
      return handle(state, action, {
        start: s => ({
          ...s,
          status: status.SCANNING,
        }),
        // TODO handle error case
        failure: s => ({ ...s, status: status.OFFLINE, connectionError: payload }),
        success: s => ({ ...s, status: status.CONNECTED }),
      });
    case types.DISCONNECT:
      return handle(state, action, {
        start: s => ({
          ...s,
          status: status.OFFLINE,
        }),
        failure: s => ({ ...s, connectionError: payload }),
      });
    default:
      return state;
  }
}

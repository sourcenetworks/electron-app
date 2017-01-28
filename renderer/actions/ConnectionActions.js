import * as types from '../constants/connectionActionTypes';
import { connectToSourceNetwork, disconnectFromNetwork } from '../utils/networkUtils';

export const scanAndConnect = () => ({
  type: types.SCAN_AND_CONNECT,
  promise: connectToSourceNetwork(),
});

export const disconnect = () => ({
  type: types.DISCONNECT,
  promise: disconnectFromNetwork(),
});

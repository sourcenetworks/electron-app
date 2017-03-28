import { ipcRenderer } from 'electron';
import {
  SCAN_AND_CONNECT,
  DISCONNECT,
} from '../actions/actionTypes';
import {
  connectToSourceNetwork,
  disconnectFromNetwork,
} from '../utils/networkUtils';

export const scanAndConnect = () => ({
  type: SCAN_AND_CONNECT,
  promise: Promise.resolve(),
  // TODO: undo this after demo
  /* promise: connectToSourceNetwork(),*/
  meta: {
    onStart: ipcRenderer.send('connectedStatusChange', 'disconnected'),
    onSuccess: () => ipcRenderer.send('connectedStatusChange', 'connected'),
    onFailure: () => ipcRenderer.send('connectedStatusChange', 'disconnected'),
  },
});

export const disconnect = () => ({
  type: DISCONNECT,
  promise: disconnectFromNetwork(),
  meta: {
    onStart: ipcRenderer.send('connectedStatusChange', 'disconnected'),
  },
});

import { ipcRenderer } from 'electron';
import * as types from '../constants/connectionActionTypes';
import { connectToSourceNetwork, disconnectFromNetwork } from '../utils/networkUtils';

export const scanAndConnect = () => ({
  type: types.SCAN_AND_CONNECT,
  promise: connectToSourceNetwork(),
  meta: {
    onStart: ipcRenderer.send('connectedStatusChange', 'disconnected'),
    onSuccess: () => ipcRenderer.send('connectedStatusChange', 'connected'),
    onFailure: () => ipcRenderer.send('connectedStatusChange', 'disconnected'),
  },
});

export const disconnect = () => ({
  type: types.DISCONNECT,
  promise: disconnectFromNetwork(),
  meta: {
    onStart: ipcRenderer.send('connectedStatusChange', 'disconnected'),
  },
});

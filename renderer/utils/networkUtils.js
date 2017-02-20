import promiseIpc from 'electron-promise-ipc';

export function connectToSourceNetwork() {
  return promiseIpc.send('sourceNetworkingAction', 'connect');
}

export function disconnectFromNetwork() {
  return promiseIpc.send('sourceNetworkingAction', 'disconnect');
}

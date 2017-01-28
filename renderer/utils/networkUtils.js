import Promise from 'bluebird';

export function connectToSourceNetwork() {
  // fake it for now!
  return Promise.resolve('connected to network').delay(1000);
}

export function disconnectFromNetwork() {
  // fake it for now!
  return Promise.resolve('disconnected from network').delay(500);
}

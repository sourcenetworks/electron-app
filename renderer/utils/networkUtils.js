import Promise from 'bluebird';
import { NetworkUtility } from 'source-background-lib';

export function connectToSourceNetwork() {
  console.log('hello');
  return NetworkUtility.getSourceNetworksInRange()
  .then(networks => {

  });
  return Promise.resolve('connected to network').delay(4000);
}

export function disconnectFromNetwork() {
  // fake it for now!
  return Promise.resolve('disconnected from network').delay(2000);
}

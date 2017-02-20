const Promise = require('bluebird');
const promiseIpc = require('electron-promise-ipc').default;
const Source = require('source-background-lib').default;

module.exports = (config) => {

  // Assumes networks are written as `Source-XX` where XX is the price of the network
  const getLowestCostNetwork = (networks) => {
    return networks.map(net => Number(net.split('-')[1]))
    .then(Math.min.apply(Math));
  }

  promiseIpc.on('sourceNetworkingAction', (action) => {
    switch (action) {
      case 'connect':
        return Source.getSourceNetworksInRange()
        .then(getLowestCostNetwork)
        .then(price => Source.createSession(`Source-${price}`));
        break;
      case 'disconnect':
        return Source.disconnectSession();
      default:
        break;
    }
  });
};
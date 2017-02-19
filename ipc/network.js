const Promise = require('bluebird');
const promiseIpc = require('electron-promise-ipc');
const Source = require('source-background-lib').default;

module.exports = (config) => {
  // Assumes networks are written as `Source-XX` where XX is the price of the network
  const getCheapestSourceNetwork = (networks) => {
    return networks.map(net => Number(net.split('-')[0]))
    .then(Math.min.apply(Math));
  }

  promiseIpc.on('sourceNetworkingAction', (event, action) => {
    switch (action) {
      case 'connect':
        return Source.getSourceNetworksInRange()
        .then(getCheapestSourceNetwork)
        .then(price => Source.createSession(`Source-${price}`));
        break;
      case 'disconnect':
        return Source.disconnectSession();
      default:
        break;
    }
  });
};

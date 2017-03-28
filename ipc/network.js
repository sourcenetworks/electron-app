const Promise = require('bluebird');
const promiseIpc = require('electron-promise-ipc').default;
const Source = require('@sourcenetworks/background-lib').default;

module.exports = (config) => {
  // Assumes networks are written as `Source-XX` where XX is the price of the network
  const getLowestCostNetwork = (networks) => {
    const nets = networks.map(net => {
      return Number(net.SSID.split('-')[1]);
    });

    const lowest = Math.min.apply(Math, nets);
    return lowest;
  };

  promiseIpc.on('sourceNetworkingAction', (action) => {
    switch (action) {
      case 'connect':
        return Source.getSourceNetworksInRange()
        .then(getLowestCostNetwork)
        .then(price => Source.createSession(`Source-${price}`));
      case 'disconnect':
        return Source.disconnectSession();
      default:
        return null;
    }
  });
};

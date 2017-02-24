const Promise = require('bluebird');
const promiseIpc = require('electron-promise-ipc').default;
const Source = require('@sourcenetworks/background-lib').default;

module.exports = (config) => {
  // Assumes networks are written as `Source-XX` where XX is the price of the network
  const getLowestCostNetwork = (networks) => {
    if (networks.length === 0) return Promise.reject({
      type: 'NO SOURCE NETWORKS'
    });

    const nets = networks.map(net => {
      return Number(net.SSID.split('-')[1]);
    });

    const lowest = Math.min.apply(Math, nets);
    return lowest;
  }

  promiseIpc.on('sourceNetworkingAction', (action) => {
    switch (action) {
      case 'connect':
        return Source.getSourceNetworksInRange()
        .then(getLowestCostNetwork)
        .then(price => Source.createSession(`Source-${price}`))
        .catch(err => {
          switch (err.type) {
            case 'NO SOURCE NETWORKS':
              return Source.createFallbackSession();
          }
        });
        break;
      case 'disconnect':
        return Source.disconnectSession();
      default:
        break;
    }
  });
};

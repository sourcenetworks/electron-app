const { ipcMain } = require('electron');
const { connected, disconnected } = require('../constants/trayIcons');

const networkRoutes = require('./network');
const wallet = require('./wallet');

module.exports = ({ menubar }) => {
  ipcMain.on('connectedStatusChange', (event, status) => {
    switch (status) {
      case 'connected':
        menubar.tray.setImage(connected);
        break;
      case 'disconnected':
        menubar.tray.setImage(disconnected);
        break;
      default:
        throw new Error(`Unrecognized connection status ${status}`);
    }
  });

  wallet();
  networkRoutes();
};

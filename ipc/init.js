const { ipcMain } = require('electron');
const { connected, disconnected } = require('../constants/trayIcons');

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
};

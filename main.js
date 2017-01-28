process.env.NODE_ENV = process.env.NODE_ENV || 'production';

const path = require('path');
const electron = require('electron');
const menubar = require('menubar');

const BrowserWindow = electron.BrowserWindow;
const isDevelopment = process.env.NODE_ENV === 'development';

const mb = menubar({
  dir: __dirname,
  icon: path.join(__dirname, '/Icon-Template.png'),
  preloadWindow: true,
  alwaysOnTop: isDevelopment,
  transparent: true,
  resizable: false,
  hasShadow: false,
  width: 350,
  height: 420,

});

mb.on('ready', () => {
  if (isDevelopment) {
    /* eslint-disable no-console, global-require, import/no-extraneous-dependencies */
    const devToolsInstaller = require('electron-devtools-installer');
    const installExtension = devToolsInstaller.default;
    const REACT_DEVELOPER_TOOLS = devToolsInstaller.REACT_DEVELOPER_TOOLS;

    BrowserWindow.removeDevToolsExtension('RemoteDev DevTools');
    BrowserWindow.addDevToolsExtension('node_modules/remotedev-extension/dist');
    installExtension(REACT_DEVELOPER_TOOLS)
      .then(name => console.log(`Added Extension:  ${name}`))
      .catch(err => console.log('An error occurred: ', err));

    mb.window.openDevTools();
    /* eslint-enable no-console, global-require, import/no-extraneous-dependencies*/
  }
});

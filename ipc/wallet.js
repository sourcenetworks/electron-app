const promiseIpc = require('electron-promise-ipc').default;
const Source = require('@sourcenetworks/background-lib').default;

module.exports = (config) => {
  promiseIpc.on('createAccount', (password) => {
    console.log('This is the password passed to whatever' + password); // This should be a string
    return Source.getMnemonic(); // @todo: change getMnemonic to actually take a password

    // should return a string with the 12 word mnemonic
  });
};

const Promise = require('bluebird');
const Source = require('@sourcenetworks/background-lib').default;
const promiseIpc = require('electron-promise-ipc').default;

module.exports = (config) => {

    promiseIpc.on('createAccount', (password) => {
        return Source.generateMnemonic()
            .then(mnemonic => console.log(mnemonic));
        // @todo: change getMnemonic to actually take a password
        // should return a string with the 12 word mnemonic
    });
};

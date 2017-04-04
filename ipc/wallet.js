const Promise = require('Bluebird');
const promiseIpc = require('electron-promise-ipc').default;
const Source = require('@sourcenetworks/background-lib').default;

module.export = () => {

    promiseIpc.on('genKeysFromPass', (password) =>
        return Source.generateMnemonic(password)
            .then(mnemonic => console.log(mnemonic));
    });
};

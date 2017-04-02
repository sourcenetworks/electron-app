import promiseIpc from 'electron-promise-ipc';
import isRenderer from 'is-electron-renderer';

export function getNewMnemonic(password) {
    // console.log('This is the password passed to walletUtils.getNewMnemonic ' + password);
    // if (isRenderer) return console.log("In renderer");
    return promiseIpc.send('createAccount', password);
}

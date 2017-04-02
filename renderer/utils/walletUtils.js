// import Promise from 'bluebird';
// import { ipcRenderer } from 'electron';
import promiseIpc from 'electron-promise-ipc';

export function getNewMnemonic(password) {
    console.log('This is the password passed to walletUtils.getNewMnemonic ' + password);
    return promiseIpc.send('createAccount', password);

}

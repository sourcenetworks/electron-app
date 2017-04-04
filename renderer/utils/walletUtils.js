import promiseIpc from 'electron-promise-ipc';

export function genKeyLol (password) {
    return promiseIpc.send('genKeysFromPass', password);
}

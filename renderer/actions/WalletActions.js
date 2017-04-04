import promise from 'bluebird';
import { ipcRenderer } from 'electron';
import promiseIpc from 'electron-promise-ipc';

// @todo: I know this related to redux -> but why doesn't
// createAccount or getNewMnemonic work without Redux?

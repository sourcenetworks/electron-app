import Promise from 'bluebird';
import * as Source from "@sourcenetworks/background-lib";
import promiseIpc from "electron-promise-ipc";

module.export = (config) => {

    promiseIpc.on('createAccount', (password) => {
        console.log('This is the password passed to whatever' + password); // This should be a string
        return Source.getMnemonic(); // @todo: change getMnemonic to actually take a password

        // should return a string with the 12 word mnemonic
    }
};

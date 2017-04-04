import { ipcRenderer } from 'electron';
import { CREATE_NEW_ACCOUNT } from '../actions/actionTypes';
import { genKeyLol } from '../utils/walletUtils';

export const createAcct = (password) = ({
    type: CREATE_NEW_ACCOUNT,
    promise: genKeyLol(password)
});

export function createKeyAndMnemonic(password) {
    return createAcct(password);
    // Because just returning an object???
}

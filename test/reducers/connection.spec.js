import { LIFECYCLE } from 'redux-pack';
import { expect } from 'chai';
import connection from '../../renderer/reducers/connectionReducer';
import { SCAN_AND_CONNECT, DISCONNECT } from '../../renderer/actions/actionTypes';
import * as status from '../../renderer/constants/connectionStatus';
import makePackAction from './makePackAction';


describe('reducers', () => {
  describe('connection', () => {
    it('should handle initial state', () => {
      expect(connection(undefined, {})).to.eql({
        status: status.OFFLINE,
        networkName: null,
      });
    });

    it('should handle SCAN_AND_CONNECT start', () => {
      const initialState = { status: status.OFFLINE };
      const expectedEndState = { status: status.SCANNING };
      const action = makePackAction(LIFECYCLE.START, { type: SCAN_AND_CONNECT });
      const endState = connection(initialState, action);
      expect(endState).to.eql(expectedEndState);
    });

    it('should handle SCAN_AND_CONNECT failure', () => {
      const error = new Error('explosion');
      const initialState = { status: status.SCANNING };
      const expectedEndState = { status: status.OFFLINE, connectionError: error };
      const action = makePackAction(LIFECYCLE.FAILURE, { type: SCAN_AND_CONNECT, payload: error });
      const endState = connection(initialState, action);
      expect(endState).to.eql(expectedEndState);
    });


    it('should handle SCAN_AND_CONNECT success', () => {
      const initialState = { status: status.SCANNING };
      const expectedEndState = { status: status.CONNECTED };
      const action = makePackAction(LIFECYCLE.SUCCESS, { type: SCAN_AND_CONNECT });
      const endState = connection(initialState, action);
      expect(endState).to.eql(expectedEndState);
    });

    it('should handle DISCONNECT start', () => {
      const initialState = { status: status.CONNECTED };
      const expectedEndState = { status: status.OFFLINE };
      const action = makePackAction(LIFECYCLE.START, { type: DISCONNECT });
      const endState = connection(initialState, action);
      expect(endState).to.eql(expectedEndState);
    });
  });
});

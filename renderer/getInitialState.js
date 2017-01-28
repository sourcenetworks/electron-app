// implemented as a function because eventually this will inolve a readFileSync call
// (or possibly some other implementation)
import { WELCOME } from './constants/screenNames';
import { OFFLINE } from './constants/connectionStatus';

export default function getInitialState() {
  return {
    currentScreen: WELCOME,
    connection: {
      status: OFFLINE,
      networkName: null,
    },
  };
}

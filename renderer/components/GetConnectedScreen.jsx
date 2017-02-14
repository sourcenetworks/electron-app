import React, { PropTypes } from 'react';
import Screen from './Screen';
import SimpleHeader from './SimpleHeader';
import ScreenContent from './ScreenContent';
import { OFFLINE, SCANNING, CONNECTED } from '../constants/connectionStatus';
import connectionStatusPropType from '../propTypes/connectionStatusPropType';
import notConnectedImgPath from '../../static/img/not_connected.svg';
import searchingForWifiImgPath from '../../static/img/searching_for_wifi.svg';
import connectedImgPath from '../../static/img/connected_to_wifi.svg';
import '../../styles/get-connected-screen.scss';

const propTypes = {
  connectionStatus: connectionStatusPropType,
  beginConnectionSearch: PropTypes.func,
};

function imageOfStatus(connectionStatus) {
  switch (connectionStatus) {
    case OFFLINE:
      return <img alt="Not connected" src={notConnectedImgPath} />;
    case SCANNING:
      return <img alt="Scanning" src={searchingForWifiImgPath} />;
    case CONNECTED:
      return <img alt="Connected" src={connectedImgPath} />;
    default:
      throw new Error(`Unrecognized connection state ${connectionStatus}`);
  }
}

function isOffline(connectionStatus) {
  return connectionStatus !== CONNECTED;
}

export function ConnectionButton({ connectionStatus, beginConnectionSearch }) {
  switch (connectionStatus) {
    case OFFLINE:
      return (
        <button onClick={beginConnectionSearch} className="btn connect-button offline">
          Scan for Source
        </button>
      );
    case SCANNING:
      return (
        <button className="btn connect-button scanning">
          Searching for wifi networks…
        </button>
      );
    case CONNECTED:
      return (
        <button className="btn connect-button connected">
          See how source works
        </button>
      );
    default:
      throw new Error(`Unrecognized connection state ${connectionStatus}`);

  }
}

ConnectionButton.propTypes = propTypes;

export default function GetConnectedScreen({ connectionStatus, beginConnectionSearch }) {
  return (
    <Screen>
      <SimpleHeader />
      <ScreenContent>
        <div className="get-connected-screen">
          <div className="image-container">
            {imageOfStatus(connectionStatus)}
          </div>
          <h1>{isOffline(connectionStatus) ? 'Offline' : 'You’re connected!'}</h1>
          <h4>
            {
              isOffline(connectionStatus) ?
              'You’re not currently connected to Source wifi.' :
              'We’ve connected you to a Source host nearby. Happy surfing!'
            }
          </h4>
          <ConnectionButton
            connectionStatus={connectionStatus}
            beginConnectionSearch={beginConnectionSearch}
          />
          {connectionStatus === CONNECTED && (
            <button className="btn-reset go-to-overview">
              No thanks, just take me to the overview
            </button>
          )}
        </div>
      </ScreenContent>
    </Screen>
  );
}

GetConnectedScreen.propTypes = propTypes;

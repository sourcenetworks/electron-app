import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as ConnectionActions from '../actions/ConnectionActions';
import GetConnectedScreen from '../components/GetConnectedScreen';
import connectionStatusPropType from '../propTypes/connectionStatusPropType';

function GetConnectedScreenContainer({ connectionActions, connectionStatus }) {
  return (
    <GetConnectedScreen
      beginConnectionSearch={connectionActions.scanAndConnect}
      connectionStatus={connectionStatus}
    />
  );
}

GetConnectedScreenContainer.propTypes = {
  connectionActions: PropTypes.shape({
    scanAndConnect: PropTypes.func,
    disconnect: PropTypes.func,
  }).isRequired,
  connectionStatus: connectionStatusPropType.isRequired,
};

const mapStateToProps = state => ({
  connectionStatus: state.connection.status,
});

const mapDispatchToProps = dispatch => ({
  connectionActions: bindActionCreators(ConnectionActions, dispatch),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(GetConnectedScreenContainer);

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as ConnectionActions from '../actions/ConnectionActions';
import { switchToHub } from '../actions/ScreenActions';
import GetConnectedScreen from '../components/GetConnectedScreen';

const mapStateToProps = state => ({
  connectionStatus: state.connection.status,
});

const mapDispatchToProps = dispatch => (
  bindActionCreators({
    beginConnectionSearch: ConnectionActions.scanAndConnect,
    switchToHub,
  }, dispatch)
);

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(GetConnectedScreen);

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import {
  switchHubTab,
  toggleDrawer,
} from '../actions/actionCreators';
import Hub from '../components/Hub';

const mapStateToProps = state => ({
  currentTab: state.hub.currentTab,
  currentSpeed: state.hub.currentSpeed,
  drawerOpen: state.hub.drawerOpen,
});

const mapDispatchToProps = dispatch => (
  bindActionCreators({
    switchTab: switchHubTab,
    toggleDrawer,
  }, dispatch)
);

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Hub);

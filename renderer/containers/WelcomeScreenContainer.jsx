import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as screenNames from '../constants/screenNames';
import * as ScreenActions from '../actions/ScreenActions';
import WelcomeScreen from '../components/WelcomeScreen';

// @todo: import * WalletActions from '../actions/WalletActions';

function WelcomeScreenContainer({ screenActions }) {
  return (
    <WelcomeScreen
      dismiss={() => screenActions.switchTo(screenNames.GET_CONNECTED)}
    />
  );
}

WelcomeScreenContainer.propTypes = {
  screenActions: PropTypes.shape({
    switchTo: PropTypes.func,
  }).isRequired,
};

const mapStateToProps = () => ({});

const mapDispatchToProps = dispatch => ({
  screenActions: bindActionCreators(ScreenActions, dispatch),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(WelcomeScreenContainer);

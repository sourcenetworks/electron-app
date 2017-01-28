import React from 'react';
import { connect } from 'react-redux';
import * as screenNames from '../constants/screenNames';
import screenNamePropType from '../propTypes/screenNamePropType';
import WelcomeScreenContainer from './WelcomeScreenContainer';
import GetConnectedScreenContainer from './GetConnectedScreenContainer';

// screenName -> Screen container component to render
const screenContainerComponent = {
  [screenNames.WELCOME]: WelcomeScreenContainer,
  [screenNames.GET_CONNECTED]: GetConnectedScreenContainer,
};

function App(props) {
  const { currentScreen } = props;
  const ScreenComponent = screenContainerComponent[currentScreen];
  return <ScreenComponent />;
}

App.propTypes = {
  currentScreen: screenNamePropType.isRequired,
};

const mapStateToProps = state => ({
  currentScreen: state.currentScreen,
});

export default connect(
  mapStateToProps,
)(App);

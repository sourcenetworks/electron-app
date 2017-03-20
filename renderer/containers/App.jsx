import React from 'react';
import { connect } from 'react-redux';
import * as screenNames from '../constants/screenNames';
import screenNamePropType from '../propTypes/screenNamePropType';
import WelcomeScreenContainer from './WelcomeScreenContainer';
import GetConnectedScreenContainer from './GetConnectedScreenContainer';
import HubContainer from './HubContainer';

// screenName -> Screen container component to render
const screenContainerComponent = {
  [screenNames.WELCOME]: WelcomeScreenContainer,
  [screenNames.GET_CONNECTED]: GetConnectedScreenContainer,
  [screenNames.HUB]: HubContainer,
};

function App({ currentScreen }) {
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

import React, { PropTypes } from 'react';
import Screen from './Screen';
import SimpleHeader from './SimpleHeader';
import ScreenContent from './ScreenContent';
import '../../styles/welcome-screen.scss';

const propTypes = {
  dismiss: PropTypes.func.isRequired,
};

export default function WelcomeScreen({ dismiss }) {
  return (
    <Screen>
      <SimpleHeader />
      <ScreenContent>
        <div className="welcome-screen">
          <h1>Welcome to Source</h1>
          <h2>Soon we’ll have a NUX on this screen. But for now...</h2>
          <button onClick={dismiss} className="btn">Get Started</button>
        </div>
      </ScreenContent>
    </Screen>
  );
}

WelcomeScreen.propTypes = propTypes;

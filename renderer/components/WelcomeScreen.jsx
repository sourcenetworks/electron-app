import React, { PropTypes } from 'react';
import styled from 'styled-components';

import Screen from './Screen';
import SimpleHeader from './SimpleHeader';
import ScreenContent from './ScreenContent';
import Button from './Button';

const propTypes = {
  dismiss: PropTypes.func.isRequired,
};

const WelcomeScreenH1 = styled.h1`
  margin: 40px 0;
`;

const WelcomeScreenH2 = styled.h2`
  margin-bottom: 40px;
`;

const WelcomeScreenContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export default function WelcomeScreen({ dismiss }) {
  return (
    <Screen>
      <SimpleHeader />
      <ScreenContent>
        <WelcomeScreenContent>
          <WelcomeScreenH1>
            Welcome to Source
          </WelcomeScreenH1>
          <WelcomeScreenH2>
            Soon we’ll have a NUX on this screen. But for now...
          </WelcomeScreenH2>
          <Button onClick={dismiss}>Get started</Button>
        </WelcomeScreenContent>
      </ScreenContent>
    </Screen>
  );
}

WelcomeScreen.propTypes = propTypes;

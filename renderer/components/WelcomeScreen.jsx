import React, { PropTypes } from 'react';
import styled from 'styled-components';

import Screen from './Screen';
import SimpleHeader from './SimpleHeader';
import ScreenContent from './ScreenContent';
import Button from './Button';
import LoginForm from './LoginForm';

const propTypes = {
  dismiss: PropTypes.func.isRequired,
};

const WelcomeScreenH1 = styled.h1`
  margin: 20px 0;
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
          <LoginForm />
          <Button onClick={dismiss}>Get started</Button>
        </WelcomeScreenContent>
      </ScreenContent>
    </Screen>
  );
}

WelcomeScreen.propTypes = propTypes;

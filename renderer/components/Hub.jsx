import React, { PropTypes } from 'react';
import styled from 'styled-components';

import Speed from './Speed';
import Wallet from './Wallet';
import Screen from './Screen';
import NetworksHeader from './NetworksHeader';
import ScreenContent from './ScreenContent';
import ReferralFooter from './ReferralFooter';

const propTypes = {
  switchTab: PropTypes.func.isRequired,
  currentTab: PropTypes.number.isRequired,
  currentSpeed: PropTypes.number.isRequired,
  drawerOpen: PropTypes.bool.isRequired,
  toggleDrawer: PropTypes.func.isRequired,
};

const Tab = styled.button`
  color: ${props => props.theme.blue};
  font-size: 18px;
  border-bottom: ${props =>
    props.selected ? `2px solid ${props.theme.blue}` : null
  };
`;

const TabsContainer = styled.div`
  display: flex;
  justify-content: space-around;
  text-align: center;
  margin-top: 10px;
  margin-bottom: 10px;
`;

function TabBar({ switchTab, currentTab }) {
  const tabNames = ['Speed', 'Wallet'];
  return (
    <TabsContainer>
      {tabNames.map((tabName, idx) => (
        <Tab
          key={tabName}
          onClick={() => switchTab(idx)}
          selected={currentTab === idx}
        >
          {tabName}
        </Tab>
      ))}
    </TabsContainer>
  );
}

TabBar.propTypes = {
  switchTab: PropTypes.func.isRequired,
  currentTab: PropTypes.number.isRequired,
};

export default function Hub({
  switchTab,
  currentTab,
  currentSpeed,
  drawerOpen,
  toggleDrawer,
}) {
  const tabContentComponents = [
    <Speed speed={currentSpeed} />,
    <Wallet />,
  ];

  return (
    <Screen>
      <NetworksHeader
        drawerOpen={drawerOpen}
        toggleDrawer={toggleDrawer}
      />
      <ScreenContent>
        <TabBar switchTab={switchTab} currentTab={currentTab} />
        {tabContentComponents[currentTab]}
        <ReferralFooter />
      </ScreenContent>
    </Screen>
  );
}

Hub.propTypes = propTypes;

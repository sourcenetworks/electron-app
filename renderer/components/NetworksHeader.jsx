import React, { PropTypes } from 'react';
import FontAwesome from 'react-fontawesome';
import styled from 'styled-components';
import Header from './Header';
import Spacing from './Spacing';
import PullRight from './PullRight';
import HeaderGearButton from './HeaderGearButton';
import Text from './Text';

const propTypes = {
  toggleDrawer: PropTypes.func.isRequired,
  drawerOpen: PropTypes.bool,
};

const defaultProps = {
  drawerOpen: false,
};

const IconWrapper = styled.span`
  color: ${props => props.theme.darkGray};
  font-size: 18px;
  padding-left: 5px;
  padding-right: 5px;
`;

const Drawer = styled.div`
  position: absolute;
  z-index: 1;
  // Make sides flush with container
  left: 10px;
  right: 10px;
  padding-left: 10px;
  padding-right: 10px;
  background-color: ${props => props.theme.lightGray};
  box-shadow: 0 -1px 7px 2px rgba(0,0,0,.16);
`;

const Rule = styled.div`
  border-bottom: 1.5px solid ${props => props.theme.darkGray};
  width: 100%;
  margin-top: 5px;
  margin-bottom: 5px;
  border-color: ${props => props.theme.mediumGray}
`;

const CheckmarkWrapper = styled.span`
  visibility: ${props => !props.selected ? 'hidden' : null}
`;

const NetworkItemWrapper = styled.li`
  padding-top: 2.5px;
  padding-bottom: 2.5px;
  &:hover {
    background-color: #0D70DF;
  }
`;
function NetworkItem({ children, selected }) {
  return (
    <Spacing vertical={5}>
      <NetworkItemWrapper>
        <CheckmarkWrapper selected={selected}>
          <FontAwesome name="check" />
        </CheckmarkWrapper>
        {children}
        <PullRight>
          <FontAwesome name="wifi" />
        </PullRight>
      </NetworkItemWrapper>
    </Spacing>
  );
}

NetworkItem.propTypes = {
  children: PropTypes.node.isRequired,
  selected: PropTypes.bool,
};

NetworkItem.defaultProps = {
  selected: false,
};

export default function NetworksHeader({
  drawerOpen,
  toggleDrawer,
}) {
  return (
    <div>
      <Header>
        <div className="header-text-simple">
          <IconWrapper>
            <FontAwesome name="wifi" />
          </IconWrapper>
          <span>Source</span>
          <button onClick={toggleDrawer}>
            <IconWrapper>
              <FontAwesome name="caret-down" />
            </IconWrapper>
          </button>
        </div>
        <div className="align-right">
          <HeaderGearButton />
        </div>
      </Header>

      {drawerOpen && (
        <Drawer>
          <Text small muted>
            Networks available
          </Text>

          <Rule />

          <ul>
            <NetworkItem selected>Source Joes network</NetworkItem>
            <NetworkItem>Source Drews network</NetworkItem>
            <NetworkItem>Home</NetworkItem>
          </ul>
          <Rule />

          <Spacing vertical={10}>
            <Text small muted>Request free acess to current network</Text>
          </Spacing>
        </Drawer>
       )}
    </div>
  );
}

NetworksHeader.propTypes = propTypes;
NetworksHeader.defaultProps = defaultProps;

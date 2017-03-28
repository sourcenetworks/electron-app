import React, { PropTypes } from 'react';
import { clipboard } from 'electron';
import styled from 'styled-components';
import PullLeft from './PullLeft';
import PullRight from './PullRight';
import fbLogoPath from '../../static/img/facebook_logo.png';
import imessageLogoPath from '../../static/img/imessage_logo.png';
import twitterLogoPath from '../../static/img/twitter_logo.png';

const CircleImage = styled.img`
  width: 30px;
  height: 30px;
  margin-right: 10px;
  clip-path: circle(15px at center)
`;

const FooterWrapper = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  padding-top: 10px;
  padding-left: 10px;
  padding-bottom: 10px;
  background-color: ${props => props.theme.lightGray};
  font-size: 14px;
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
`;

const ReferralLink = styled.button`
  text-decoration: underline;
  display: block;
  padding: 0;
  margin-top: 5px;
  cursor: pointer;
`;

const ToolTipWrapper = styled.div`
  position: absolute;
  top: -7px;
`;

const ToolTipBody = styled.span`
  position: relative;
  background-color: white;
  box-shadow: 0 -1px 7px 2px rgba(0,0,0,.16);
  border-radius: 4px;
  padding: 7px;
  z-index: 2;
`;

const Arrow = styled.div`
  position: absolute;
  top: 3px;
  left: 50%;
  box-shadow: 0 -1px 7px 2px rgba(0,0,0,.16);
  transform: translateX(-50%) translateY(10px) rotate(45deg);
  width: 20px;
  height: 20px;
  background-color: white;
  border-bottom-right-radius: 4px;
`;

function ToolTip() {
  return (
    <ToolTipWrapper>
      <ToolTipBody>Copied to clipboard!</ToolTipBody>
      <Arrow />
    </ToolTipWrapper>
  );
}

export default function ReferralFooter() {
  const referralURL = 'www.sourcewifi.com/123';
  return (
    <FooterWrapper>
      <PullLeft>
        <span>Refer a friend - get free data</span>
        {/* <ToolTip /> */}
        <ReferralLink
          onClick={() => {
            clipboard.writeText(referralURL);
            this.setState({ tooltipVisible: true });
          }}
        >
          {referralURL}
        </ReferralLink>
      </PullLeft>

      <PullRight>
        <CircleImage src={imessageLogoPath} />
        <CircleImage src={twitterLogoPath} />
        <CircleImage src={fbLogoPath} />
      </PullRight>

    </FooterWrapper>
  );
}

/* ReferralFooter.propTypes = propTypes;*/

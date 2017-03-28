import React, { PropTypes } from 'react';
import styled from 'styled-components';
import Button from './Button';
import Spacing from './Spacing';
import PullLeft from './PullLeft';
import PullRight from './PullRight';

const TimeLeftBarOuter = styled.div`
  border: 1px solid ${props => props.theme.lightGray};
  background-color: ${props => props.theme.lightGray};
  height: 18px;
  width: 95%;
  margin: 0 auto;
  border-radius: 20px;
`;

const TimeLeftBarInner = styled.div`
  background-color: ${props => props.theme.blue};
  position: relative;
  top: 1px;
  height: 16px;
  width: ${props => props.timeLeftPercent}%;
  border-radius: inherit;
`;

const TimeLeftCopy = styled.p`
  font-size: 18px;
  clear: both;
`;

const EmphasizedTimeLeft = styled.span`
  font-weight: bold;
`;

const TimeLeftLabels = styled.div`
  width: 95%;
  margin: 0 auto;
  margin-top: 5px;
  font-size: 12px;
`;

function TimeLeft({ timeLeftPercent }) {
  return (
    <div>
      <TimeLeftBarOuter>
        <TimeLeftBarInner timeLeftPercent={timeLeftPercent} />
      </TimeLeftBarOuter>

      <TimeLeftLabels>
        <PullLeft><span>0hr.</span></PullLeft>
        <PullRight><span>5hr.</span></PullRight>
      </TimeLeftLabels>
    </div>
  );
}

export default function Wallet() {
  const TIME_LEFT_PERCENT = 50;
  return (
    <div>
      <Spacing vertical={25}>
        <TimeLeft timeLeftPercent={TIME_LEFT_PERCENT} />
      </Spacing>

      <Spacing vertical={55}>
        <TimeLeftCopy>
          You have
          <EmphasizedTimeLeft> 2 hours and 30 minutes </EmphasizedTimeLeft>
          of browsing remaining
        </TimeLeftCopy>
      </Spacing>

      <Button>+ Add more data</Button>
    </div>
  );
}


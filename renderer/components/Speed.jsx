import React, { PropTypes } from 'react';
import styled from 'styled-components';

const propTypes = {
  speed: PropTypes.number.isRequired,
};

const SpeedNumber = styled.p`
  font-size: 35px;
  font-weight: bold;
`;

const SpeedWrapper = styled.div`
  text-align: center;
  margin-top: 80px;
`;

export default function Speed({ speed }) {
  return (
    <SpeedWrapper>
      <SpeedNumber>{speed}</SpeedNumber>
      <p>MB Per Second</p>
    </SpeedWrapper>
  );
}

Speed.propTypes = propTypes;

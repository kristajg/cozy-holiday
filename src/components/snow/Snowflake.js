

import React from 'react';
import styled, { keyframes } from 'styled-components';

const animateSnowFromTopDown = ({ screenHeight }) => keyframes`
  from {
    top: -5px;
  }
  to {
    top: ${screenHeight + 5}px;
  }
`;

const SnowflakeStyle = styled.div`
  position: absolute;
  top: -5px;
  left: ${props => props.xPosition}px;
  height: 5px;
  width: 5px;
  background-color: #fff;
  border-radius: ${props => props.isRound ? '50%' : '0'};
  animation: ${props => animateSnowFromTopDown(props)} infinite 5s;
  animation-delay: ${props => props.delay}s;
  animation-timing-function: linear;
`;

const Snowflake = ({ flakeShape, screenHeight, xPosition, fallingSpeed }) => (
  <SnowflakeStyle
    isRound={flakeShape === 'round'}
    screenHeight={screenHeight}
    xPosition={xPosition}
    fallingSpeed={fallingSpeed}
    delay={Math.random() * 6 + 0}
  />
);

export default Snowflake;

import React from 'react';
import styled, { keyframes } from 'styled-components';

const animateSnowFromTopDown = ({ screenHeight }) => keyframes`
  0% {
    top: -5px;
  }
  100% {
    top: ${screenHeight - 5}px;
  }
`;

const flipSnow = keyframes`
  100% {
    transform: rotateZ(360deg) rotateX(360deg);
  }
`;

const swaySnow = ({swayTiming, secondSwayTiming, xPosition }) => keyframes`
  ${swayTiming}% {
    left: calc(${xPosition}px - 3%);
  }
  100% {
    left: ${xPosition}px;
  }
`;

const SnowflakeStyle = styled.div`
  position: absolute;
  top: -5px;
  left: ${props => props.xPosition}px;
  height: 5px;
  width: 5px;
  overflow: hidden;
  background-color: #fff;
  border-radius: ${props => props.isRound ? '50%' : '0'};
  animation: ${props => animateSnowFromTopDown(props)} infinite 5s, ${props => swaySnow(props)} infinite 5s ease-in-out, ${flipSnow} infinite 2.5s;
  animation-delay: ${props => props.delay}s;
  animation-timing-function: linear;
`;

const Snowflake = ({
  flakeShape,
  screenHeight,
  xPosition,
  fallingSpeed,
  swayTiming,
}) => (
  <SnowflakeStyle
    isRound={flakeShape === 'round'}
    screenHeight={screenHeight}
    xPosition={xPosition}
    fallingSpeed={fallingSpeed}
    delay={Math.random() * 6 + 0}
    swayTiming={swayTiming}
  />
);

export default Snowflake;

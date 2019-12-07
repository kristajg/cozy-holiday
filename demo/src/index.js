import React, { Component } from 'react';
import { render } from 'react-dom';
import styled, { keyframes } from 'styled-components';

import CozyHoliday from '../../src/CozyHoliday';

// Development / demo animations and styling
const fadeIn = keyframes`
  0% {
    opacity: 0;
    top: 0px;
  }
  50% {
    top: -15px;
  }
  100% {
    opacity: 1;
    top: 0px;
  }
`;

const DemoWrapper = styled.div`
  text-align: center;
  animation: ${fadeIn} 1.5s ease-in-out;
  margin-top: 5%;
  font-family: 'Press Start 2P', cursive;
  color: #fff;
`;

const DemoTitle = styled.div`
  padding-top: 20%;
  font-size: 22px;

  @media only screen and (max-width: 600px) {
    padding-top: 50%;
    font-size: 18px;
    line-height: 24px;
  }
`;

class Demo extends Component {
  render() {
    return (
      <DemoWrapper>
        <DemoTitle>Cozy Holiday Demo v0.1.17</DemoTitle>
        <CozyHoliday />
      </DemoWrapper>
    );
  }
}

render(<Demo />, document.querySelector('#demo'));

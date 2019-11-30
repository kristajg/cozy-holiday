// Third party libararies
import React from 'react';
import PropTypes from 'prop-types';
import styled, { keyframes } from 'styled-components';

// Pixel asset imports
import lights from '../../assets/festive_lights.png';

const slideInFromTop = keyframes`
  0% {
    top: -55px;
  }
  80% {
    top: 8px;
  }
  100% {
    top: -3px;
  }
`;

const slideOut = keyframes`
  0% {
    top: -3px;
  }
  20% {
    top: 8px;
  }
  100% {
    top: -55px;
  }
`;

const LightsContainer = styled.div`
  background-image: url(${lights});
  background-size: 320px;
  background-repeat-y: no-repeat;
  width: 100%;
  height: 55px;
  position: absolute;
  top: ${props => props.visible ? '-3' : '-55'}px;
  left: -10px;
  animation: ${props => props.visible ? slideInFromTop : slideOut} 800ms ease;

  @media only screen and (max-width: 600px) {
    background-size: 215px;
    left: -15px;
  }
`;

const Lights = ({ visible }) => <LightsContainer visible={visible} />;

Lights.propTypes = {
  visible: PropTypes.bool.isRequired,
};

export default Lights;

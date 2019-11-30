// Third party libararies
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled, { keyframes } from 'styled-components';

// Pixel asset imports
import Nog0 from '../../assets/nog/sprite_0.png';
import Nog1 from '../../assets/nog/sprite_1.png';
import Nog2 from '../../assets/nog/sprite_2.png';
import Nog3 from '../../assets/nog/sprite_3.png';
import Nog4 from '../../assets/nog/sprite_4.png';

const slideInFromRight = keyframes`
  0% {
    right: -250px;
  }
  80% {
    right: 20px;
  }
  90% {
    right: -5px;
  }
  100% {
    right: 5px;
  }
`;

const slideOut = keyframes`
  0% {
    right: 5px;
  }
  20% {
    right: 20px;
  }
  100% {
    right: -250px;
  }
`;

const NogWrapper = styled.div`
  position: absolute;
  bottom: 110px
  right: 0px;
  width: 190px;
  max-width: 100%;
  height: 265px;
  overflow: hidden;
  cursor: pointer;
  -webkit-tap-highlight-color: transparent;
`;

const NogImage = styled.img`
  position: absolute;
  right: ${props => props.visible ? '0' : '-280'}px;

  width: 190px;
  height: auto;
  animation: ${props => props.visible ? slideInFromRight : slideOut} 900ms ease;

  -webkit-transition: width 600ms, height 600ms;
  transition: width 600ms, height 600ms;
`;

const nogImages = [
  Nog0,
  Nog1,
  Nog2,
  Nog3,
  Nog4,
];

class Eggnog extends Component {
  state = {
    nogStep: 0,
    nogImage: Nog0,
  };

  changeNogStepOnClick = () => {
    const { nogStep } = this.state;
    let newStep = nogStep;
    nogStep === 4 ? newStep = 0 : newStep += 1;
    this.setState({ nogStep: newStep, nogImage: nogImages[newStep] });
  }

  render() {
    const { visible } = this.props;
    const { nogImage } = this.state;
    return (
      <NogWrapper onClick={() => this.changeNogStepOnClick()}>
        <NogImage visible={visible} src={nogImage} alt="Cup of eggnog" />
      </NogWrapper>
    );
  }
}

Eggnog.propTypes = {
  visible: PropTypes.bool.isRequired,
};

export default Eggnog;

// Third party libraries
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled, { keyframes, css } from 'styled-components';

// Asset imports
import fire from '../../assets/fire.gif';
import cracklingSound from '../../assets/crackling_fire_hq.mp3';

const slideInFromLeft = keyframes`
  0% {
    left: -128px;
  }
  80% {
    left: 35px;
  }
  90% {
    left: 15px;
  }
  100% {
    left: 20px;
  }
`;

const slideOut = keyframes`
  0% {
    left: 20px;
  }
  20% {
    left: 30px;
  }
  100% {
    left: -128px;
  }
`;

const FireplaceWrapper = styled.div`
  position: fixed;
  left: ${props => (props.visible ? '20' : '-128')}px;
  bottom: 100px;
  height: 128px;
  width: 128px;
  ${props =>
    props.visible
      ? css`
          animation: ${slideInFromLeft} 800ms ease;
        `
      : ''};
  ${props =>
    props.closingFireplace
      ? css`
          animation: ${slideOut} 800ms ease;
        `
      : ''};
`;

const FireImage = styled.img`
  position: relative;
  height: 128px;
  width: 128px;
  -webkit-transition: width 600ms, height 600ms;
  transition: width 600ms, height 600ms;
`;

class Fireplace extends Component {
  state = {
    mouseIsHovered: false,
    closingFireplace: false,
  };

  componentDidUpdate(prevProps) {
    const { visible, fireSoundOn } = this.props;
    const audio = document.getElementById('fireplace-audio');

    // Fix animation on close
    if (prevProps.visible && prevProps.visible !== visible) {
      this.setState({ closingFireplace: true });
    } else if (prevProps.visible !== visible) {
      this.setState({ closingFireplace: false });
    }

    // Play audio on show
    if (fireSoundOn && visible && prevProps.visible !== visible) {
      if (audio instanceof HTMLAudioElement) {
        audio.volume = 0.4;
        audio.play();
      }
    } else if (prevProps.visible !== visible) {
      audio.pause();
    }
  }

  mouseOut = () => this.setState({ mouseIsHovered: false });

  mouseOver = () => this.setState({ mouseIsHovered: true });

  render() {
    return (
      <FireplaceWrapper
        visible={this.props.visible}
        closingFireplace={this.state.closingFireplace}
      >
        <FireImage
          src={fire}
          alt="Fireplace"
          mouseIsHovered={this.state.mouseIsHovered}
          onMouseOut={() => this.mouseOut()}
          onMouseOver={() => this.mouseOver()}
        />
        <audio id="fireplace-audio" src={cracklingSound} loop />
      </FireplaceWrapper>
    );
  }
}

Fireplace.propTypes = {
  visible: PropTypes.bool.isRequired,
  fireSoundOn: PropTypes.bool.isRequired,
};

export default Fireplace;

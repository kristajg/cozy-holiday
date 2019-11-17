import React, { Component } from 'react';
import styled, { keyframes } from 'styled-components';
import fire from './assets/fire.gif';
import cracklingSound from './assets/crackling_fire.mp3';

const animateSize = keyframes`
  0% {
    height: 128px;
    width: 128px;
  }
  50% {
    height: 168px;
    width: 168px;
  }
  100% {
    height: 128px;
    width: 128px;
  }
`;

const FireplaceImage = styled.img`
  display: ${props => props.visible ? 'block' : 'none'};
  position: absolute;
  bottom: 20px;
  left: 20px;
  height: 128px;
  width: 128px;
`;

// TODO: animate in from lower-left using keyframes
// TODO: animate size change on mouseover

class Fireplace extends Component {
  componentDidUpdate(prevProps) {
    const { visible } = this.props;
    const audio = document.getElementById('fireplace-audio');
    if (visible && prevProps.visible !== visible) {
      if (audio instanceof HTMLAudioElement) {
        audio.play();
      }
    } else if (prevProps.visible !== visible) {
      audio.pause();
    }
  }

  render() {
    const { visible } = this.props;
    return (
      <div>
        <FireplaceImage visible={visible} src={fire} alt="Fireplace" />
        <audio id='fireplace-audio' src={cracklingSound} loop />
      </div>
    );
  }
}

export default Fireplace;

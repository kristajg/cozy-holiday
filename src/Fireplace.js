import React, { Component } from 'react';
import styled, { keyframes } from 'styled-components';
import fire from './assets/fire.gif';
import cracklingSound from './assets/crackling_fire.mp3';

const animateSizeUp = keyframes`
  0% {
    height: 128px;
    width: 128px;
  }
  100% {
    height: 168px;
    width: 168px;
  }
`;

const animateSizeDown = keyframes`
  0% {
    height: 168px;
    width: 168px;
  }
  100% {
    height: 128px;
    width: 128px;
  }
`;

const FireplaceWrapper = styled.div`
  display: ${props => props.visible ? 'block' : 'none'};
`;

const FireplaceImage = styled.img`
  position: absolute;
  bottom: 20px;
  left: 20px;
  height: 128px;
  width: 128px;
`;

// TODO: animate in from lower-left using keyframes
// TODO: animate size change on mouseover

class Fireplace extends Component {
  state = {
    animateFireSize: false,
  };

  componentDidUpdate(prevProps) {
    const { visible } = this.props;
    const audio = document.getElementById('fireplace-audio');
    if (visible && prevProps.visible !== visible) {
      if (audio instanceof HTMLAudioElement) {
        audio.volume = 0.3;
        audio.play();
      }
    } else if (prevProps.visible !== visible) {
      audio.pause();
    }
  }

  toggleSizeAnimation = () => {
    console.log('umm')
    this.setState({ animateFireSize: !this.state.animateFireSize });
  }

  render() {
    return (
      <FireplaceWrapper visible={this.props.visible}>
        <FireplaceImage
          src={fire}
          alt="Fireplace"
          onMouseEnter={() => this.toggleSizeAnimation()}
          onMouseLeave={() => this.toggleSizeAnimation()}
          animateFireSize={this.state.animateFireSize}
        />
        <audio id='fireplace-audio' src={cracklingSound} loop />
      </FireplaceWrapper>
    );
  }
}

export default Fireplace;

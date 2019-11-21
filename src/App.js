import React, { PureComponent } from 'react';
import styled, { keyframes } from 'styled-components';
import Fireplace from './Fireplace';
import Snow from './components/snow/Snow';

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

const CozyHolidayWrapper = styled.div`
  text-align: center;
  padding-top: 15%;
  font-family: 'Press Start 2P', cursive;
  font-size: 18px;
  color: #fff;
  animation: ${fadeIn} 1.7s ease-in-out;
`;

const TemporaryButton = styled.div`
  margin: 0 auto;
  text-align: center;
  vertical-align: middle;
  width: 380px;
  height: 60px;
  border: 2px solid #fff;
  border-radius: 4px;
  background-color: #ff8494;
  font-family: 'Press Start 2P', cursive;
  line-height: 60px;
  color: #fff;
  cursor: pointer;
  -webkit-box-shadow: 0px 0px 7px 0px rgba(103,103,103,1);
  -moz-box-shadow: 0px 0px 7px 0px rgba(103,103,103,1);
  box-shadow: 0px 0px 7px 0px rgba(103,103,103,1);

  &:hover {
    opacity: .9;
  }

  @media only screen and (max-width: 600px) {
    width: 75%;
  }
`;

class App extends PureComponent {
  state = {
    fireVisible: false,
    isSnowing: false,
    showEggnog: false,
    snowIntensity: 'mild', // number of snowflakes, decides snowing intensity. TODO: accept snowIntensity as a prop: mild, flurry, blizzard
  };

  fireDisplayToggle = () => {
    console.log('wtf hey?')
    this.setState({ fireVisible: !this.state.fireVisible });
  };

  snowDisplayToggle = () => {
    this.setState({ isSnowing: !this.state.isSnowing });
  };

  eggnogToggle = () => {
    this.setState({ showEggnog: !this.state.showEggnog });
  }

  render() {
    console.log('uhhh what ', this.state.fireVisible);
    return (
      <CozyHolidayWrapper>
        Welcome to the Cozy Holiday Experience
        <br />
        <br />
        <br />
        <TemporaryButton onClick={() => this.fireDisplayToggle()}>
          Fireside Chat
        </TemporaryButton>
        <br />
        <br />
        <TemporaryButton onClick={() => this.snowDisplayToggle()}>
          Let it Snow
        </TemporaryButton>
        <br />
        <br />
        <TemporaryButton onClick={() => this.eggnogToggle()}>
          Chug some Nog
        </TemporaryButton>
        <Fireplace visible={this.state.fireVisible} />
        {(this.state.isSnowing &&
          <Snow
            isSnowing={this.state.isSnowing}
            snowIntensity={this.state.snowIntensity}
          />
        )}
      </CozyHolidayWrapper>
    );
  }
}

export default App;

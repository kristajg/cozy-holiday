// Third party libraries
import React, { PureComponent } from 'react';
import styled, { keyframes } from 'styled-components';

// Holiday components
import Fireplace from './components/fireplace/Fireplace';
import Snow from './components/snow/Snow';
import Eggnog from './components/eggnog/Eggnog';
import Lights from './components/lights/Lights';
import Cat from './components/cat/Cat';
import Navigation from './components/navigation/Navigation';

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

const CozyHolidayWrapper = styled.div`
  text-align: center;
  animation: ${fadeIn} 1.5s ease-in-out;
  margin-top: 5%;
  font-family: 'Press Start 2P', cursive;
  color: #fff;
`;

const CozyHolidayPanel = styled.div`
  margin: 0 auto 25px auto;
  padding: 25px;
  font-size: 18px;
  width: 60%;
  border: 2px solid #fff;
  border-radius: 2px;

  @media only screen and (max-width: 600px) {
    width: 75%;
  }
`;

const PanelTitle = styled.div`
  padding-bottom: 20px;
  line-height: 24px;
`;

const TemporaryButton = styled.div`
  margin: 0 auto;
  text-align: center;
  vertical-align: middle;
  width: 350px;
  height: 60px;
  border: 2px solid #fff;
  border-radius: 4px;
  background-color: #ff0012;
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
    navigationVisible: false,
    fireVisible: false,
    snowVisible: false,
    eggnogVisible: false,
    lightsVisible: false,
    catVisible: false,
    snowIntensity: 'mild', // number of snowflakes, decides snowing intensity. TODO: accept snowIntensity as a prop: mild, flurry, blizzard
  };

  genericToggle = toggleItem => {
    this.setState({ [toggleItem]: !this.state[toggleItem] });
  }

  render() {
    return (
      <CozyHolidayWrapper>
        {/* Temporary Panel for dev & demo */}
        <CozyHolidayPanel>
          <PanelTitle>
            Welcome to the Cozy Holiday Experience
          </PanelTitle>
          <TemporaryButton onClick={() => this.genericToggle('fireVisible')}>
            Fireside
          </TemporaryButton>
          <br />
          <br />
          <TemporaryButton onClick={() => this.genericToggle('snowVisible')}>
            Snow
          </TemporaryButton>
          <br />
          <br />
          <TemporaryButton onClick={() => this.genericToggle('eggnogVisible')}>
            Nog
          </TemporaryButton>
          <br />
          <br />
          <TemporaryButton onClick={() => this.genericToggle('lightsVisible')}>
            Lights
          </TemporaryButton>
          <br />
          <br />
          <TemporaryButton onClick={() => this.genericToggle('catVisible')}>
            Cat
          </TemporaryButton>
        </CozyHolidayPanel>

        {/* Display content and animations */}
        <Fireplace visible={this.state.fireVisible} />
        {(this.state.snowVisible &&
          <Snow
            isSnowing={this.state.snowVisible}
            snowIntensity={this.state.snowIntensity}
          />
        )}
        <Eggnog visible={this.state.eggnogVisible} />
        <Lights visible={this.state.lightsVisible} />
        <Cat visible={this.state.catVisible} />

        {/* Actual tray for library */}
        <Navigation
          visible={this.state.navigationVisible}
          toggle={this.genericToggle}
          // hideIcons={['cat', 'fire']}
        />
      </CozyHolidayWrapper>
    );
  }
}

export default App;

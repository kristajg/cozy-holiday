// Third party libraries
import React, { PureComponent } from 'react';
import styled from 'styled-components';

// Holiday components
import Fireplace from './components/fireplace/Fireplace';
import Snow from './components/snow/Snow';
import Eggnog from './components/eggnog/Eggnog';
import Lights from './components/lights/Lights';
import Cat from './components/cat/Cat';
import Navigation from './components/navigation/Navigation';

const CozyHolidayWrapper = styled.div`
  text-align: center;
  font-family: 'Press Start 2P', cursive;
  color: #fff;
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
  };

  render() {
    return (
      <CozyHolidayWrapper>
        {/* Display content and animations */}
        <Fireplace visible={this.state.fireVisible} />
        {this.state.snowVisible && (
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

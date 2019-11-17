import React, { PureComponent } from 'react';
import styled from 'styled-components';
import Fireplace from './Fireplace';
import Snow from './Snow';

const CozyHolidayWrapper = styled.div`
  text-align: center;
  padding-top: 20%;
  font-family: 'Press Start 2P', cursive;
  font-size: 24px;
  color: #fff;
`;

const TemporaryButton = styled.div`
  margin: 0 auto;
  text-align: center;
  vertical-align: middle;
  width: 380px;
  height: 60px;
  border: 2px solid gray;
  border-radius: 4px;
  background-color: #fff;
  font-family: 'Press Start 2P', cursive;
  line-height: 60px;
  color: #000;
  cursor: pointer;

  &:hover {
    opacity: .9;
  }
`;

class App extends PureComponent {
  state = {
    fireVisible: false,
    isSnowing: false,
  };

  fireDisplayToggle = () => {
    this.setState({ fireVisible: !this.state.fireVisible });
  };

  snowDisplayToggle = () => {
    this.setState({ isSnowing: !this.state.isSnowing });
  };

  render() {
    return (
      <CozyHolidayWrapper>
        Welcome to the cozy holiday!
        <br />
        <br />
        <br />
        <TemporaryButton onClick={() => this.fireDisplayToggle()}>
          Toggle for fire
        </TemporaryButton>
        <br />
        <br />
        <TemporaryButton onClick={() => this.snowDisplayToggle()}>
          Make it snow
        </TemporaryButton>
        <br />
        <br />
        <Fireplace visible={this.state.fireVisible} />
        <Snow isSnowing={this.state.isSnowing} />
      </CozyHolidayWrapper>
    );
  }
}

export default App;

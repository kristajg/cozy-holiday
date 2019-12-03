// Third party libraries
import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
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

class CozyHoliday extends PureComponent {
  static defaultProps = {
    snowIntensity: 'mild',
    hideIcons: [],
  };

  state = {
    navigationVisible: false,
    fireVisible: false,
    snowVisible: false,
    eggnogVisible: false,
    lightsVisible: false,
    catVisible: false,
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
            snowIntensity={this.props.snowIntensity}
          />
        )}
        <Eggnog visible={this.state.eggnogVisible} />
        <Lights visible={this.state.lightsVisible} />
        <Cat visible={this.state.catVisible} />

        {/* Navigation Tray */}
        <Navigation
          visible={this.state.navigationVisible}
          toggle={this.genericToggle}
          hideIcons={this.props.hideIcons}
        />
      </CozyHolidayWrapper>
    );
  }
}

CozyHoliday.propTypes = {
  snowIntensity: PropTypes.string.isRequired,
  hideIcons: PropTypes.array,
};

export default CozyHoliday;

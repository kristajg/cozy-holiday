// Third party libraries
import React, { Component } from 'react';
import PropTypes from 'prop-types';

// Components
import Snowflake from './Snowflake';

const snowIntensityConfig = {
  mild: 35,
  flurry: 55,
  blizzard: 125,
  snowDayDontComeIntoWork: 500,
};

const randomizeXPostion = screenWidth =>
  Math.floor(Math.random() * screenWidth + 0);

const randomizeFallingSpeed = () => Math.floor(Math.random() * 5 + 0);

const randomizeSwayPercent = () => Math.floor(Math.random() * 60 + 20);

class Snow extends Component {
  state = {
    screenWidth: 0,
    screenHeight: 0,
    flakeShape: 'round', // options are square or round (for now)
  };

  componentDidMount() {
    this.updateWindowDimensions();
    window.addEventListener('resize', this.updateWindowDimensions);
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.updateWindowDimensions);
  }

  updateWindowDimensions = () => {
    this.setState({
      screenWidth: window.innerWidth,
      screenHeight: window.innerHeight,
    });
  };

  startSnow = () => {
    let numSnowflakes = snowIntensityConfig[this.props.snowIntensity];
    if (numSnowflakes) {
      let allFlakes = [];
      for (let i = 0; i < numSnowflakes; i++) {
        let flakeShape = Boolean(i % 2) ? 'round' : 'square';
        allFlakes.push(this.renderFlake(i, flakeShape));
      }
      return allFlakes;
    }
    console.warn(
      'Please enter a valid snowIntensity prop option: mild, flurry, or blizzard',
    );
  };

  renderFlake = (key, flakeShape) => {
    const { screenHeight, screenWidth } = this.state;
    return (
      <Snowflake
        key={key}
        screenHeight={screenHeight}
        flakeShape={flakeShape}
        xPosition={randomizeXPostion(screenWidth)}
        fallingSpeed={randomizeFallingSpeed()}
        swayTiming={randomizeSwayPercent()}
      />
    );
  };

  render() {
    return <div>{this.startSnow()}</div>;
  }
}

Snow.propTypes = {
  snowIntensity: PropTypes.string,
};

export default Snow;

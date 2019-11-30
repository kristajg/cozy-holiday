// Third party libraries
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled, { keyframes } from 'styled-components';

// Assets
import arrowUp from '../../assets/icons/arrow_up.png';
import arrowDown from '../../assets/icons/arrow_down.png';
import fireIcon from '../../assets/icons/fire_icon.png';
import snowIcon from '../../assets/icons/snow_icon.png';
import mugIcon from '../../assets/icons/mug_icon.png';
import lightIcon from '../../assets/icons/light_icon.png';
import catIcon from '../../assets/icons/cat_icon.png';

const slideUp = keyframes`
  0% {
    bottom: -60px;
  }
  100% {
    bottom: 0px;
  }
`;

const slideDown = keyframes`
  0% {
    bottom: 0px;
  }
  100% {
    bottom: -60px;
  }
`;

const NavigationWrapper = styled.div`
  position: absolute;
  bottom: ${props => props.visible ? '0px' : '-60px'};
  padding: 10px;
  width: 100%;
  height: 40px;
  line-height: 40px;
  color: #fff;
  background-color: #282828;
  animation: ${props => props.visible ? slideUp : slideDown} 900ms ease;
`;

const Tab = styled.div`
  position: absolute;
  right: 60px;
  top: -40px;
  padding-top: 5px;
  width: 70px;
  height: auto;
  background-color: #282828;
  border-top-right-radius: 2px;
  border-top-left-radius: 2px;
  cursor: pointer;
`;

const TabImage = styled.img`
  width: 40px;
  height: auto;
`;

const Tray = styled.div``;

const IconList = styled.ul`
  list-style-type: none;
  margin: 0;
  padding: 0;
`;

const ListItem = styled.li`
  display: inline-block;
  width: 80px;
  color: #fff;
  font-family: 'Press Start 2P', cursive;
`;

const Icon = styled.img`
  height: 38px;
  width: 38px;
  cursor: pointer;

  &:hover {
    opacity: .9;
  }
`;

const options = [
  {
    name: 'fire',
    icon: fireIcon,
    toggleAction: 'fireVisible',
  },
  {
    name: 'snow',
    icon: snowIcon,
    toggleAction: 'snowVisible',
  },
  {
    name: 'eggnog',
    icon: mugIcon,
    toggleAction: 'eggnogVisible',
  },
  {
    name: 'lights',
    icon: lightIcon,
    toggleAction: 'lightsVisible',
  },
  {
    name: 'cat',
    icon: catIcon,
    toggleAction: 'catVisible',
  },
];

const filterOptions = removeOptions => options.filter(option => removeOptions.indexOf(option.name) < 0);

class Navigation extends Component {
  render() {
    const { visible, toggle, hideIcons = [] } = this.props;
    const optionsToShow = hideIcons.length ? filterOptions(hideIcons) : options;
    return (
      <NavigationWrapper visible={visible}>
        <Tab onClick={() => toggle('navigationVisible')}>
          <TabImage src={visible ? arrowUp : arrowDown} alt="arrow icon" />
        </Tab>
        <Tray>
          <IconList>
            {optionsToShow.map(option => (
              <ListItem key={option.name}>
                <Icon src={option.icon} alt={`${option.name} icon`} onClick={() => toggle(option.toggleAction)} />
              </ListItem>
            ))}
          </IconList>
        </Tray>
      </NavigationWrapper>
    );
  } 
}

Navigation.propTypes = {
  visible: PropTypes.bool.isRequired,
  toggle: PropTypes.func.isRequired,
  hideIcons: PropTypes.array,
};

export default Navigation;

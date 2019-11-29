// Third party libraries
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled, { keyframes } from 'styled-components';

// Assets
import arrowUp from '../../assets/icons/arrow_up.png';
import arrowDown from '../../assets/icons/arrow_down.png';
import fireIcon from '../../assets/icons/fire_icon.png';

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
  top: -43px;
  padding-top: 7px;
  width: 100px;
  height: auto;
  background-color: #282828;
  border-top-right-radius: 2px;
  border-top-left-radius: 2px;
  cursor: pointer;
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

// TODO: accept icons as props
// TODO: tooltips over icons, also available as props

const optionsMap = [
  {
    name: 'fire',
    icon: fireIcon,
    toggleAction: 'fireVisible',
  },
  {
    name: 'snow',
    // icon: snowIcon,
    toggleAction: 'snowVisible',
  },
  {
    name: 'eggnog',
    // icon: eggnogIcon,
    toggleAction: 'eggnogVisible',
  },
  {
    name: 'lights',
    // icon: lightsIcon,
    toggleAction: 'lightsVisible',
  },
  {
    name: 'cat',
    // icon: catIcon,
    toggleAction: 'catVisible',
  },
];

class Navigation extends Component {
  render() {
    const { visible, toggle } = this.props;
    // Filter out iconsToHide if it's present
    // TODO: handle error if all icons are hidden
    return (
      <NavigationWrapper visible={visible}>
        <Tab onClick={() => toggle('navigationVisible')}>
          <img src={visible ? arrowUp : arrowDown} alt="arrow icon" />
        </Tab>
        <Tray>
          <IconList>
            {optionsMap.map(option => (
              <ListItem>
                {option.icon ?
                  (<Icon src={option.icon} alt={`${option.name} icon`} onClick={() => toggle(option.toggleAction)} />) : 
                  (<div onClick={() => toggle(option.toggleAction)}>{option.name}</div>)
                }
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
  iconsToHide: PropTypes.array,
};

export default Navigation;

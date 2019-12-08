// Third party libraries
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

// Pixel assets
import cat from '../../assets/cat.gif';

const CatWrapper = styled.div`
  display: ${props => (props.visible ? 'block' : 'none')};
  position: fixed;
  bottom: 65px;
  left: 155px;
`;

class Cat extends Component {
  render() {
    const { visible } = this.props;
    return (
      <CatWrapper visible={visible}>
        <img src={cat} alt="Cat" />
      </CatWrapper>
    );
  }
}

Cat.propTypes = {
  visible: PropTypes.bool.isRequired,
};

export default Cat;

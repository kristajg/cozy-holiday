import React, { Component } from 'react';
import styled from 'styled-components';
import cat from '../../assets/cat.gif';

const CatWrapper = styled.div`
  display: ${props => props.visible ? 'block' : 'none'};
`;

class Cat extends Component {
  render() {
    const { visible } = this.props;
    return (
      <CatWrapper visible={visible}>
        <img src={cat} alt='Cat' />
      </CatWrapper>
    );
  }
}

export default Cat;

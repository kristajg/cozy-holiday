import React from 'react';
import styled from 'styled-components';
import lights from '../../assets/festive_lights.png';

const LightsWrapper = styled.div`
  display: ${props => props.visible ? 'block' : 'none'};
`;

const LightsContainer = styled.div`
  background-image: url(${lights});
  background-size: 320px;
  background-repeat-y: no-repeat;
  width: 100%;
  height: 55px;
  position: absolute;
  top: -3px;
  left: -10px;
  overflow: hidden;
`;

const Lights = ({ visible }) => (
  <LightsWrapper visible={visible}>
    <LightsContainer />
  </LightsWrapper>
);

export default Lights;

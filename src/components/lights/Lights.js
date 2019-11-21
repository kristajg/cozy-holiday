import React from 'react';
import styled from 'styled-components';

const LightsWrapper = styled.div`
  display: ${props => props.visible ? 'block' : 'none'};
`;

const Lights = ({ visible }) => (
  <LightsWrapper visible={visible}>
    TODO: display strand lights up top
  </LightsWrapper>
);

export default Lights;

import React from 'react';
import styled from 'styled-components';
import fire from './assets/fire.gif';

const FireplaceImage = styled.img`
  display: ${props => props.visible ? 'block' : 'none'};
  position: absolute;
  bottom: 20px;
  left: 20px;
`;

// TODO: animate in from lower-left using keyframes

const Fireplace = ({ visible }) => (
  <FireplaceImage visible={visible} src={fire} alt="Fireplace" />
);

export default Fireplace;

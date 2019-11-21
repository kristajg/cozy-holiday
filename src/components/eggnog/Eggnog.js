import React from 'react';
import nog from '../../assets/nog.png';
import styled, { keyframes } from 'styled-components';

// const slideInFromRight = keyframes`
//   0% {
//     right: -138px;
//   }
//   80% {
//     right: 35px;
//   }
//   90% {
//     right: 15px;
//   }
//   100% {
//     right: 20px;
//   }
// `;

// const slideOut = keyframes`
//   0% {
//     right: 20px;
//   }
//   20% {
//     right: 30px;
//   }
//   100% {
//     right: -138px;
//   }
// `;

const NogWrapper = styled.div`
  position: absolute;
  right: 0;
  bottom: 54%;
  width: 280px;
  height: auto;
  display: ${props => props.visible ? 'block' : 'none'};
`;

const NogImage = styled.img`
  position: relative;
  width: 280px;
  height: auto;
  -webkit-transition: width 600ms, height 600ms;
  transition: width 600ms, height 600ms;

  &:hover {
    width: 255px;
    height: auto;
  }
`;

const Eggnog = ({ visible }) => (
  <NogWrapper visible={visible}>
    <NogImage src={nog} alt="Cup of eggnog" />
  </NogWrapper>
);

export default Eggnog;

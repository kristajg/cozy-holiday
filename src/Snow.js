import React from 'react';
import styled from 'styled-components';

const Snowflake = styled.div`
  height: 5px;
  width: 5px;
  background-color: #fff;
  border-radius: ${props => props.isRound ? '50%' : '0'};
`;

// TODO: randomize snow from top
// TODO: animate snow falling down
// TODO: animate snow swaying
// TODO: recursively snow over time

const Snow = ({ isSnowing }) => (
  <div>TODO: Make snow</div>
);

export default Snow;

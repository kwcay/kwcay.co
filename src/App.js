import React from 'react';
import styled from 'styled-components';

export default () => (
  <React.Fragment>
    <Title>Kwahu &amp; Cayes</Title>
    <Message>Coming Soon</Message>
  </React.Fragment>
);

const Title = styled.h1`
  font-weight: normal;
  text-align: center;
  margin: 10vw 0 2vw;
`;

const Message = styled.h2`
  color: dimgray;
  font-weight: normal;
  text-align: center;
`;

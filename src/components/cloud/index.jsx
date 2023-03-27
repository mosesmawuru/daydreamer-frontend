import React from 'react'

import styled from 'styled-components';

import cloud from "assets/images/cloud.png";

const CloudContainer = styled.div`
  @keyframes cloudAnimation {
    0%   {margin-top: 0;}
    50%   {margin-top: 20px;}
    100% {margin-top: 0;}
  }
`;

const Cloud = () => {

  return (
    <CloudContainer>
      <img src={cloud} alt="cloud" />
    </CloudContainer>
  )
}

export default Cloud;
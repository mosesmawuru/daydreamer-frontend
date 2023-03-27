import React from 'react'

import styled from 'styled-components';

import cloud from "assets/images/star.png";

const StarContainer = styled.div`
  @keyframes StarAnimation1 {
    0%   {margin-top: 0; transform: rotate(0deg);}
    33%   {margin-top: 10px;transform: rotate(10deg);}
    66%   {margin-top: 10px;transform: rotate(-10deg);}
    100% {margin-top: 0;transform: rotate(360deg);}
  }
  @keyframes StarAnimation2 {
    0%   {transform: scale(0.9);}
    25%   {transform: scale(1.3);}
    50%   {transform: scale(0.9);}
    75%   {transform: scale(1.3);}
    100% {transform: scale(0.9);}
  }
`;

const Star = () => {

  return (
    <StarContainer>
      <img src={cloud} alt="cloud" />
    </StarContainer>
  )
}

export default Star;
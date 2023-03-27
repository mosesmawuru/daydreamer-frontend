import React from 'react'

import styled from 'styled-components';

// import cloud from "assets/images/stars.png";

const StarsContainer = styled.div`
  @keyframes StarsAnimation {
    0%   {opacity:0.9;}
    100% {opacity:0.8;}
  }
`;

const Stars = () => {

  return (
    <StarsContainer>
      {/* <img src={cloud} alt="cloud" /> */}
    </StarsContainer>
  )
}

export default Stars;
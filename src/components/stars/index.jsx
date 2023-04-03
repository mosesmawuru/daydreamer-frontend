import React from 'react'
import styled from 'styled-components';

const StarsContainer = styled.div`
  @keyframes StarsAnimation {
    0%   {opacity:0.9;}
    100% {opacity:0.8;}
  }
`;

const Stars = () => {

  return (
    <StarsContainer>
    </StarsContainer>
  )
}

export default Stars;
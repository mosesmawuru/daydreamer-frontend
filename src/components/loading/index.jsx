import React from "react";
import styled from "styled-components";

import loadingImg from "assets/images/loading.gif";

const LoadingContainer = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Loading = () => {
  return (
    <LoadingContainer>
      <img src={loadingImg} alt="Loading..." />
    </LoadingContainer>
  );
}

export default Loading;
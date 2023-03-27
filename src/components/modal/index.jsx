import React from "react";
import styled from "styled-components";

const ModalContainer = styled.div`
  background-color: rgba(0,0,0,0.6);
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  span {
    position: fixed;
    right: 40px;
    top: 40px;
    color: #fff;
    font-size: 30px;
    font-weight: bold;
  }
  img {
    width: 50%;
    height: 50%;
  }
`;

const Modal = ({ path }) => {
  return (
    <ModalContainer>
      <span>&times;</span>
      <img src={path} alt="nfts" />
    </ModalContainer>
  )
}

export default Modal;
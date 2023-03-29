import React, { useEffect, useContext, useState } from 'react'

import styled from 'styled-components'

import board from 'assets/images/faqBoard.png';
import cButton from 'assets/images/cButton.png';

import { useEthContext } from "../../contexts/EthereumContext";
import { toast } from "react-toastify";
import axios from "axios";
import { MouseContext } from 'contexts/mouse-context';

// style
const FaqContainer = styled.div`
  position: absolute;
  width: 450px;
  height: 780px;
  left: calc((100vw - 450px) / 2);

  font-family: "Titan One";
  font-size: 20px;
  color: #52d7ff;
  z-index: 998;

  // amination area
  animation-name: RaiseUpFaqBoard;
  animation-duration: 1.5s;
  animation-timing-function: ease-out;
  animation-fill-mode: forwards;

    background: url(${board}) no-repeat;
    background-size: 100% 100%;

  @keyframes RaiseUpFaqBoard {
    0% {
      top: 100vh;
    }
    100% {
      top: -90px;
    }
  }
  @keyframes RaiseUpFaqBoardMore {
    0% {
      top: -200px;
    }
    100% {
      top: -330px;
    }
  }

  @media screen and (max-width: 800px) {
    right: calc((100vw - 400px)/2);
  }
  @media screen and (max-width: 425px) {
    left: 0;
  }
  @media screen and (max-width: 375px) {
    left: -10px;
  }
  @media screen and (max-width: 320px) {
    left: -25px;
  }

  div.wallet-button {
    background: url(${cButton}) no-repeat;
    background-size: 100% 100%;
    width: 190px;
    height: 100px;
    position: absolute;
    bottom: 180px;
    left: 100px;
    transform: scale(1.2);

    span {
      transform: rotate(-4deg);
      position: absolute;
      bottom: 25px;
    }
  }
  div.wallet-button:hover {
    span {
      color: #ff3e3e;
    }
  }

  span.minus:hover, span.plus:hover {
    color: #ff3e3e;
  }
  div.mint-button {
    transform: scale(0.8);

    animation-duration: 0.5s;
    animation-timing-function: ease;
    animation-fill-mode: forwards;
    @keyframes Appear {
      from { bottom: 180px }
      to { bottom: 100px }
    }
    span {
      left: 43px;
    }
  }

  div.notice-wl {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    span {
      font-weight: lighter;
      font-size: 18px;
      position: absolute;
      text-align: center;
      width: 100%;
      transform: translateY(-3px) rotate(-4deg);
    }
    /* span:first-child {
      bottom: 45px;
    } */
    /* span:last-child {
      bottom: 15px;
    } */
  }

  span.count {
    letter-spacing: 3px;
  }

  div.graphic {
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: space-between;
    align-items: flex-end;
    img {
      object-fit: cover;
      overflow: visible;
      width: 130px;
      height: 180px;
    }
    img:first-child {
      transform: scale(0.8);
    }
    img:last-child {
      transform: translateY(-30px) translateX(-10px);
    }
  }
`;

const FaqBoard = () => {
  const { cursorChangeHandler } = useContext(MouseContext);

  const onClickMint = async () => {

  }

  const WLchecker = async () => {

  };

  const handleConnectWalletMetamask = async () => {
  };

  return (
    <FaqContainer>

      <div className="wallet-button mint-button" onMouseEnter={() => cursorChangeHandler("hovered")} onMouseLeave={() => cursorChangeHandler("")} onMouseDown={() => cursorChangeHandler("clicked")} onMouseUp={() => cursorChangeHandler("hovered")}>
        <span onClick={WLchecker}>Check WL</span>
      </div>
      <div className="wallet-button" onMouseEnter={() => cursorChangeHandler("hovered")} onMouseLeave={() => cursorChangeHandler("")} onMouseDown={() => cursorChangeHandler("clicked")} onMouseUp={() => cursorChangeHandler("hovered")}>
        <span style={{ left: "13px" }} onClick={onClickMint}>Connect Wallet</span>
      </div>
      <div className='graphic'>
        <img src="https://drive.google.com/uc?id=1gq8F6ZEjQ2ArUR622w7T21wRnER9L3iH" alt="" />
        <img src="https://drive.google.com/uc?id=1XZxhUtb_nSoFYyrl5rRk8LNm8NR8TSWe" alt="" />
      </div>
    </FaqContainer>
  )
}

export default FaqBoard;
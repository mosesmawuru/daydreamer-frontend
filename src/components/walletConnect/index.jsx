import React, { useEffect } from 'react';
import styled from 'styled-components';
import { AiOutlineSearch } from 'react-icons/ai';

import walletBoard from "assets/images/walletBoard.png";
import metamask from "assets/images/metamask.png";

const WalletContainer = styled.div`
  background: url(${walletBoard}) no-repeat;
  background-size: cover;
  background-position: center;
  width: 450px;
  height: 400px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  position: absolute;
  top:-300px;
  row-gap: 10px;
  animation-duration: 0.5s;
  animation-timing-function: ease;
  animation-fill-mode: forwards;

  @keyframes AppearWalletBoard {
    from { top: -300px }
    to { top: 80px }
  }

  input {
    outline: none;
    border: none;
    background: transparent;
    color: #fff;
  }
  div:first-child {
    border: 1px solid #fff;
    border-radius: 20px;
    padding: 0 10px;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  div:last-child {
    img {
      border: 1px solid green;
      background-color: #f0f0f0;
      border-radius: 50%;
      width: 60px;
      height: 60px;
    }
  }
`;

const WalletConnect = ({ flag, metamaskConnect }) => {
  useEffect(() => {
    console.log(flag)
    if (flag)
      document.getElementsByClassName('wallet-container')[0].style.animationName = "AppearWalletBoard";
    else
      document.getElementsByClassName('wallet-container')[0].style.animationName = "";
  }, [flag])

  return (
    <WalletContainer className='wallet-container'>
      <div><input type="text" placeholder='Wallet Address Here...' /><AiOutlineSearch /></div>
      <div>
        <img src={metamask} alt="" onClick={metamaskConnect} />
      </div>
    </WalletContainer>
  )
}

export default WalletConnect;
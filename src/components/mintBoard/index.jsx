import React, { useContext, useEffect, useState } from 'react'

import styled from 'styled-components'

import board from 'assets/images/walletBoard.png';
import cButton from 'assets/images/cButton.png';
import wlButton from 'assets/images/wlButton.png';

import { toast } from "react-toastify";
import axios from "axios";
import { MouseContext } from 'contexts/mouse-context';
import { ConnectButton } from "@rainbow-me/rainbowkit";

import { useAccount } from 'wagmi';

// style
const FaqContainer = styled.div`
  position: absolute;
  width: 500px;
  height: 500px;
  left: calc((100vw - 450px) / 2);

  font-family: "Titan One";
  font-size: 20px;
  color: #52d7ff;
  z-index: 998;

  // amination area
  animation-name: RaiseUpFaqBoard;
  animation-duration: 1s;
  animation-timing-function: ease-out;
  animation-fill-mode: forwards;

    background: url(${board}) no-repeat;
    background-size: 100% 100%;

  @keyframes RaiseUpFaqBoard {
    0% {
      top: -500px;
    }
    100% {
      top: 0px;
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
    left: -40px;
  }
  @media screen and (max-width: 375px) {
    width: 110%;
    height: 400px;
    left: -5%;
  }
  @media screen and (max-width: 320px) {
    
  }

  div.wallet-button {
    background: url(${cButton}) no-repeat;
    background-size: 100% 100%;
    width: 200px;
    height: 100px;
    position: absolute;
    bottom: 200px;
    left: 150px;
    transform: scale(1.2);

    span {
      transform: rotate(-4deg);
      position: absolute;
      bottom: 25px;
      width: 100%;
      text-align: center;
    }
    span:hover {
      color: #ff3e3e;
    }

    @media screen and (max-width: 375px) {
      scale: 0.8;
      bottom: 150px;
      left: 110px;
    }
    @media screen and (max-width: 325px) {
      left: 80px;
    }
  }
  div.mint-button {

    background: url(${wlButton}) no-repeat;
    background-size: 100% 100%;
    width: 200px;
    height: 200px;
    position: absolute;
    width: 300px;
    left: 100px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    row-gap: 20px;
    
    bottom: 45px;
    /* animation-duration: 0.5s;
    animation-timing-function: ease;
    animation-fill-mode: forwards;
    opacity: 0; */
    /* @keyframes Appear {
      from { bottom: 180px; opacity: 0 }
      to { bottom: 100px; opacity: 1; }
    } */
    span {
      left: 43px;
    }
    span:hover {
      color: #ff3e3e;
    }
    input {
      width: 250px;
      height: 30px;
      outline: none;
      border: 2px solid #52d7ff;
      border-radius: 20px;
      padding-left: 10px;
      padding-right: 5px;
      color: #52d7ff;
      font-family: "Titan One";
      font-size: 18px;
      font-weight: lighter;
    }
    input:focus {
      border: 2px solid #ff3e3e;
    }

    @media screen and (max-width: 375px) {
      scale: 0.8;
      bottom: 18px;
      left: 65px;
    }
    @media screen and (max-width: 325px) {
      left: 30px;
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
      transform: scale(0.8) translateY(10px) translateX(25px);
      @media screen and (max-width: 375px) {
        display: none;
      }
    }
    img:last-child {
      transform: translateY(-20px) translateX(-5px);
      @media screen and (max-width: 375px) {
      transform: scale(1.3) translateY(25vh) translateX(30vw);
      }
    }
  }
`;

const FaqBoard = () => {
  const { cursorChangeHandler } = useContext(MouseContext);

  const [addr, setWalletAddress] = useState(undefined);
  const [wlLoading, setWlLoading] = useState(false);
  const { address } = useAccount();

  useEffect(() => {
    setWalletAddress(address);
  }, [address])

  const WLchecker = async () => {
    if (addr === undefined) {
      toast.error("Please connect your wallet or confirm the wallet address!", {
        theme: "dark",
      });
      return;
    }
    setWlLoading(true);
    const proof = await axios
      .get(`https://ddbackendapp.vercel.app/get/${addr}`)
      .then((res) => {
        return res.data.proof;
      });
    setWlLoading(false);
    if (proof.length === 0) {
      toast.error("Sorry, You are not in WhiteList.", {
        theme: "light",
      });
    }
    else {
      toast.success("Congratulation, You are on WhiteList.", {
        theme: "light",
      });
    }
  };

  return (
    <FaqContainer>
      <ConnectButton.Custom>
        {({
          account,
          chain,
          openAccountModal,
          openChainModal,
          openConnectModal,
          authenticationStatus,
          mounted,
        }) => {
          // Note: If your app doesn't use authentication, you
          // can remove all 'authenticationStatus' checks

          if (account) setWalletAddress(account.address);

          const ready = mounted && authenticationStatus !== "loading";
          const connected =
            ready &&
            account &&
            chain &&
            (!authenticationStatus ||
              authenticationStatus === "authenticated");

          return (
            <div
              {...(!ready && {
                "aria-hidden": true,
                style: {
                  opacity: 0,
                  pointerEvents: "none",
                  userSelect: "none",
                },
              })}
            >
              {(() => {
                if (!connected) {
                  return (
                    <div>
                      <div className="mint-button" onMouseEnter={() => cursorChangeHandler("hovered")} onMouseLeave={() => cursorChangeHandler("")} onMouseDown={() => cursorChangeHandler("clicked")} onMouseUp={() => cursorChangeHandler("hovered")}>
                        <input type="text" placeholder='Wallet Address Here...' onChange={(e) => setWalletAddress(e.target.value)} />
                        {wlLoading ? <span>Checking ...</span> : <span onClick={WLchecker}>Check WL</span>}
                      </div>
                      <div className="wallet-button" onMouseEnter={() => cursorChangeHandler("hovered")} onMouseLeave={() => cursorChangeHandler("")} onMouseDown={() => cursorChangeHandler("clicked")} onMouseUp={() => cursorChangeHandler("hovered")}>
                        <span onClick={openConnectModal}>Connect Wallet</span>
                      </div>
                    </div>
                  );
                }

                if (chain.unsupported) {
                  return (
                    <button onClick={openChainModal} type="button">
                      Wrong network
                    </button>
                  );
                }

                return (
                  <div style={{ display: "flex", gap: 12 }}>
                    <div className="mint-button" onMouseEnter={() => cursorChangeHandler("hovered")} onMouseLeave={() => cursorChangeHandler("")} onMouseDown={() => cursorChangeHandler("clicked")} onMouseUp={() => cursorChangeHandler("hovered")}>
                      {account !== undefined ? null : <input type="text" placeholder='Wallet Address Here...' onChange={(e) => setWalletAddress(e.target.value)} />}
                      {wlLoading ? <span>Checking ...</span> : <span onClick={WLchecker}>Check WL</span>}
                    </div>
                    <div className="wallet-button" onMouseEnter={() => cursorChangeHandler("hovered")} onMouseLeave={() => cursorChangeHandler("")} onMouseDown={() => cursorChangeHandler("clicked")} onMouseUp={() => cursorChangeHandler("hovered")}>
                      <span onClick={openAccountModal}>{account.displayName}</span>
                    </div>
                  </div>
                );
              })()}
            </div>
          );
        }}
      </ConnectButton.Custom>

      <div className='graphic'>
        <img src="https://drive.google.com/uc?id=1gq8F6ZEjQ2ArUR622w7T21wRnER9L3iH" alt="" />
        <img src="https://drive.google.com/uc?id=1XZxhUtb_nSoFYyrl5rRk8LNm8NR8TSWe" alt="" />
      </div>
    </FaqContainer>
  )
}

export default FaqBoard;
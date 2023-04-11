import React, { useContext, useEffect, useState } from 'react'
import styled from 'styled-components'
import board from 'assets/images/walletBoard.png';
import cButton from 'assets/images/cButton.png';
import wlButton from 'assets/images/wlButton.png';
import mintButton from 'assets/images/mintButton.png';
import { toast } from "react-toastify";
import axios from "axios";
import { MouseContext } from 'contexts/mouse-context';
import { ConnectButton } from "@rainbow-me/rainbowkit";
import { useAccount } from 'wagmi';
import moment from 'moment-timezone';

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
      top: -40px;
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
    left: calc((100vw - 500px)/2);
  }
  @media screen and (max-width: 425px) {
    left: -40px;
    }
  @media screen and (max-width: 390px) {
    left: -55px;
    scale: 0.9;
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
    height: 80px;
    position: absolute;
    bottom: 235px;
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
      bottom: 180px;
      left: calc(110px - ((375px - 100vw) / 1.7));
    }
    @media screen and (max-width: 325px) {
      left: 80px;
    }
  }
  div.mint-button {

    background: url(${wlButton}) no-repeat;
    background-size: 100% 100%;
    position: absolute;
    height: 150px;
    width: 300px;
    left: 100px;
    bottom: 125px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    row-gap: 20px;
    span {
      margin-top: -10px;
    }
    span:hover {
      color: #ff3e3e;
    }
    input {
      width: 250px;
      height: 30px;
      margin-top: 6px;
      outline: none;
      border: 2px solid #52d7ff;
      border-radius: 20px;
      padding-left: 10px;
      padding-right: 5px;
      color: #52d7ff;
      font-family: "Titan One";
      font-size: 18px;
      font-weight: lighter;
      transform: rotate(-2deg);
    }
    input:focus {
      border: 2px solid #ff3e3e;
    }

    @media screen and (max-width: 375px) {
      scale: 0.8;
      bottom: 82px;
      left: calc(65px - ((375px - 100vw) / 1.7));
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
      transform: scale(0.8) translateY(25px) translateX(25px);
      @media screen and (max-width: 391px) {
        display: none;
      }
    }
    img:last-child {
      transform: translateY(0px) translateX(-5px);
      @media screen and (max-width: 391px) {
        transform: scale(1.3) translateY(18vh) translateX(35vw);
      }
      @media screen and (max-width: 375px) {
        transform: scale(1.3) translateY(25vh) translateX(30vw);
      }
    }
  }
`;

const MintButtonArea = styled.div`
  background-size: 100% 100%;
  width: 350px;
  height: 120px;
  position: absolute;
  left: 75px;
  bottom: 130px;
  color: #33cfff;
  font-size: 30px;
  text-align: center;
  -webkit-text-stroke: 1px #fff;

  @media screen and (max-width: 375px) {
    width: 300px;
    left: calc(60px - ((375px - 100vw) / 1.7));
    bottom: 70px;
  }

  div {
    display: flex;
    justify-content: space-around;
    align-items: center;
    gap: 10px;
    @media screen and (max-width: 375px) {
      justify-content: center;
      gap: 8px;
    }
  }

  span {
    width: 23%;
    height: 78px;
    border: 3px dashed #83d1e9;
    border-radius: 50%;
    background: rgba(255, 255, 255, 0.35);
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-bottom: 10px;
    @media screen and (max-width: 375px) {
      width: 20%;
      height: 60px;
      font-size: 25px;
    }
  }

  i {
    font-size: 20px;
  }

  a {
    /* padding: 10px;
    margin-top: 10px; */
    background: transparent;
    border: none;
    font-size: 1.8rem;
    -webkit-text-stroke: 1px #fff;
    color: #33cfff;
    font-family: "Titan One";
    z-index: 998;
    text-decoration: none;

    @media screen and (max-width: 375px) {
      font-size: 1.5rem;
    }
  }
  a:hover {
    -webkit-text-stroke: 1px #fff;
    color: #ff3e3e;
  }
`;

const MintBoard = () => {
  const { cursorChangeHandler } = useContext(MouseContext);

  const [addr, setWalletAddress] = useState(undefined);
  const [wlLoading, setWlLoading] = useState(false);
  const { address } = useAccount();

  // for countdown timer
  const [day, setDay] = useState(0);
  const [hour, setHour] = useState(0);  
  const [min, setMin] = useState(0);  
  const [sec, setSec] = useState(0);  
  const [isExpired, setIsExpired] = useState(false);

  const toTimeZone = (time, zone) => {
    var format = `YYYY/MM/DD HH:mm:ss`;
    return moment(time, format).tz(zone).format(format);
}

  useEffect(() => {
    setWalletAddress(address);
  }, [address])

  useEffect(() => {
    // Set the date we're counting down to
    // var utcM = new Date("April 12, 2023 09:00:00").getUTCMonth();
    // var utcD = new Date("April 12, 2023 09:00:00").getUTCDate();
    // var utcH = new Date("April 12, 2023 09:00:00").getUTCHours();
    // var utcMin = new Date("April 12, 2023 09:00:00").getUTCMinutes();
    // var utcS = new Date("April 12, 2023 09:00:00").getUTCSeconds();

    let countDownDate = new Date ("April 12, 2023 09:00:00").getTime();


    // countDownDate = countDownDate - new Date("Jan 5, 2024 15:37:25").getTimezoneOffset();

    // Update the count down every 1 second
    var x = setInterval(() => {

      // Get today's date and time
      var now = new Date();
      let pdtTimeNow = toTimeZone(now, "America/Los_Angeles");
      let newNow = new Date(pdtTimeNow).getTime();

      // Find the distance between now and the count down date
      var distance = countDownDate - newNow;

      // Time calculations for days, hours, minutes and seconds
      var days = Math.floor(distance / (1000 * 60 * 60 * 24));
      var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      var seconds = Math.floor((distance % (1000 * 60)) / 1000);

      // Set vals
      setDay(days);
      setHour(hours);
      setMin(minutes);
      setSec(seconds);
      // If the count down is finished, set isExpired to true
      if (distance < 0) {
        clearInterval(x);
        setIsExpired(true);
      }
    }, 1000);
  }, [])

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
      {/* <ConnectButton.Custom>
        {({
          account,
          chain,
          openAccountModal,
          openChainModal,
          openConnectModal,
          authenticationStatus,
          mounted,
        }) => {

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
      </ConnectButton.Custom> */}
      <MintButtonArea>
        <div>          
          <span>{day}<i>d</i></span>
          <span>{hour}<i>h</i></span>
          <span>{min}<i>m</i></span>
          <span>{sec}<i>s</i></span>
        </div>
        <a href="https://opensea.io/collection/day-dreamerz/drop" target={'_blank'} onMouseEnter={() => cursorChangeHandler("hovered")} onMouseLeave={() => cursorChangeHandler("")}>Minting on Opensea</a>
      </MintButtonArea>

      <div className='graphic'>
        <img src="https://drive.google.com/uc?id=1gq8F6ZEjQ2ArUR622w7T21wRnER9L3iH" alt="" />
        <img src="https://drive.google.com/uc?id=1XZxhUtb_nSoFYyrl5rRk8LNm8NR8TSWe" alt="" />
      </div>
    </FaqContainer>
  )
}

export default MintBoard;
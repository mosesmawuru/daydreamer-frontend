import React, { useContext } from 'react'

import styled from 'styled-components'

import board from 'assets/images/faqBoard1.png';
import sticky from 'assets/images/sticky.png';
import substicky from 'assets/images/substicky.png';
import pin from 'assets/images/pin.png';
import { MouseContext } from "../../contexts/mouse-context";

// style
const FaqContainer = styled.div`
  /* display: flex; */
  position: absolute;
  width: 400px;
  height: 870px;
  /* border: 1px solid red; */
  left: calc((100vw - 400px)/2);
  z-index: 999;

  // amination area
  animation-name: RaiseUpFaqBoard;
  animation-duration: 1.5s;
  animation-timing-function: ease-out;
  animation-fill-mode: forwards;

    background: url(${board});
    background-size: 100% 100%;

  @keyframes RaiseUpFaqBoard {
    0% {
      top: 100vh;
    }
    100% {
      top: -250px;
    }
  }
  @keyframes RaiseUpFaqBoardMore {
    0% {
      top: -200px;
    }
    100% {
      top: -400px;
    }
  }

  @media screen and (max-width: 1777px) {
    /* animation-name: RaiseUpFaqBoardMore; */
  }
  @media screen and (max-width: 800px) {
    /* right: calc((100vw - 400px)/2); */
  }
  @media screen and (max-width: 425px) {
    width: 340px;
    left: 38px;
    img.pin {
      position: absolute;
      transform: scale(0.9) !important;
      bottom: 290px !important;
      left: 120px !important;
      z-index: 5;
    }
    div.substicky > div span:nth-child(1) {
      font-size: 25px !important;
    }
    div.substicky > div span:nth-child(2) {
      font-size: 15px !important;
      /* padding: 0px 49px 0 70px !important; */
    }
  }
  @media screen and (max-width: 375px) {
    left: 15px;
    
  }
  @media screen and (max-width: 320px) {
    left: -10px;

  }

  img.flying-superman {
    object-fit: cover;
    width: 350px;
    height: 350px;
    position: absolute;
    right: 0;
    bottom: 0;
    transform: rotateY(180deg) translateX(-250px);

    @media screen and (max-width: 425px) {
      display: none;
    }
  }

  div {
    position: absolute;
    width: 100%;
    bottom: 0px;
    img {
      width: 105%;
      height: 100%;
      transform: scale(1.2);
    }
  }

  div.sticky {
  }
  div.substicky {
    animation-timing-function: ease-out;
    animation-fill-mode: forwards;
    animation-duration: 1s;
  }

  div.substicky > div {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    transform: rotate(2deg);
    color: #424242;

    /* border: 1px solid red; */
    padding: 40px 20px 30px 40px;
  }

  div.substicky > div span:nth-child(1) {
    font-family: 'Pacifico';
    font-style: normal;
    font-weight: bolder;
    font-size: 30px;
    text-align: center;
    /* line-height: 73px; */
    z-index: 5;
    padding-bottom: 20px;
  }
  div.substicky > div span:nth-child(2) {
    font-family: "Kalam";
    font-style: normal;
    font-weight: 400;
    font-size: 17px;
    line-height: 20px;
    letter-spacing: 0px;
    word-spacing: -1px;
    overflow-y: auto;
    z-index: 5;
  }
  div.substicky > div span:nth-child(2)::-webkit-scrollbar {
    display: none;
  }

  // animation - fall sticky
  @keyframes FallStickyAnimation {
    0% {
      bottom: 0;
    }
    100% {
      bottom: -150%;
    }
  }

  img.pin {
    position: absolute;
    bottom: 348px;
    left: 154px;
    z-index: 99;
    transform: scale(1.1);
  }

`;

const stickyData = [
  {
    title: "Q. What are the Mint Details of Day Dreamerz?",
    desc: "Supply: 2525<br  > WL Mint Price: TBA<br  > public Mint Price: TBA<br  > Mint Date & Time: TBA<br  > Chain: ETH"
  },
  {
    title: "Q. How to mint Ordinal Dreamerz?",
    desc: "The minting process for Ordinal Dreamerz will take place on the ETH Chain and holders can claim their Ordinal NFT by burning their ETH NFT. Once the burning process is complete, the Ordinal Dreamerz NFT will be airdropped to holder. "
  },
  {
    title: "Q. How to get Ordinal Dreamerz?",
    desc: "Every Day Dreamerz holder will receive a free mint of one Ordinal Dreamerz. <br  >1x Day Dreamerz = 1x Ordinal Dreamerz Free Mint."
  },
  {
    title: "Q. What are the utilities for Ordinal Dreamerz?",
    desc: "All Ordinal Dreamerz holders will enjoy the same benefits and privileges as Day Dreamerz holders."
  },
  {
    title: "Q. What are the utilities(2) Ordinal Dreamerz",
    desc: "Ordinal Dreamerz is a unique collection that features charming pixelated dreamerz, designed as a token of appreciation for our Day Dreamerz holders. Our main goal is to add value to the holders' experience and protect their aspirations. All Ordinal Dreamerz holders will enjoy the same benefits and privileges in the Day Dreamerz ecosystem."
  },
  {
    title: "Q. What are the utilities(1) D-Connect",
    desc: "Our D-Connect platform is the embodiment of that belief, where we bring together individuals from all walks of life to share their unique talents, skills, and knowledge, and provide support and guidance to those seeking to turn their dreams into reality. We are dedicated to creating a platform that not only celebrates the beauty of dreaming but also provides practical tools and resources to help dreamers achieve their goals, no matter how big or small.More detailed information about D- Connect can be found in our whitepaper."
  },
  {
    title: "Q. What is our vision?",
    desc: "Our vision is to empower dreamers from all backgrounds and professions, whether they are artists, scientists, entrepreneurs, or innovators. We aim to create a community where everyone can connect and collaborate, fostering a space where individuals can learn from one another and grow together. Our goal is to provide resources, support, and mentorship to help individuals achieve their dreams and make a positive impact in their respective field."
  },
  {
    title: "Q. What is Day Dreamerz?",
    desc: "Day Dreamerz is a collection that celebrates the aspirations and dreams of every child. Our project is founded on the fundamental belief that each child has a unique dream that they strive to achieve when they grow up. We are dedicated to preserving the magic of dreaming and creating a platform that fosters connections and shared passions among dreamers."
  },
]

const FaqBoard = () => {

  const onStickyClick = (e, key) => {
    const target = document.getElementById("substicky-" + key)
    target.style.animationName = "FallStickyAnimation";
    target.style.zIndex = 6;
    const len = stickyData.length;
    const key1 = (key + len - 1) % len;
    const targetEnd = document.getElementById("substicky-" + key1)
    targetEnd.style.animationName = "";
    targetEnd.style.zIndex = 5;
  }

  const { cursorChangeHandler } = useContext(MouseContext);

  const dragMouseDown = (e) => {
    cursorChangeHandler("clicked");
  }
  const dragMouseUp = () => {
    cursorChangeHandler("hovered");
  }

  return (
    <FaqContainer>
      <div className='sticky'>
        <img src={sticky} alt="sticky" />
      </div>
      {stickyData.map((item, key) => (<div className="substicky" id={`substicky-${key}`} onClick={e => onStickyClick(e, key)} onMouseDown={dragMouseDown} onMouseOver={() => cursorChangeHandler("hovered")} onMouseOut={() => cursorChangeHandler("")} onMouseUp={dragMouseUp}>
        <img src={substicky} alt="substicky" />
        <div>
          <span>{item.title}</span>
          <span dangerouslySetInnerHTML={{ __html: item.desc }} style={{ maxHeight: 190 }} />
        </div>
      </div>))}
      <img src={pin} alt="pin" className='pin' />
      <img src="https://drive.google.com/uc?id=14az6FCC5YRD4lMBmtuv-Y4vl_jgynbWT" alt="superman" className='flying-superman' />
    </FaqContainer>
  )
}

export default FaqBoard;
import React, { useState, useContext } from 'react'
import { FaTwitter, FaDiscord } from 'react-icons/fa';
import { VscTriangleDown } from 'react-icons/vsc';
import { useNavigate } from 'react-router-dom';

import {
  LandingContainer,
  DarkMask,
  LinkButtons
} from './ordinal.style'

import BgComponent from '../../components/background1';
import QuickMenu from '../../components/quickMenu';
import Switch from '../../components/switch';
import Logo from '../../components/logo';

import PageFlip from '../../components/pageFlipOrdinal';

import nft1 from "assets/images/nfts/ordinal/ordinal.gif";

import opensea from 'assets/images/icons/os.png'
import whitepaper from 'assets/images/icons/wp.png'

import { MouseContext } from "../../contexts/mouse-context";

const Intro = (props) => {
  const navigate = useNavigate();
  const [isMask, setMask] = useState(false);
  const { cursorChangeHandler } = useContext(MouseContext);

  const onChildClick = () => {
    navigate('/');
  }

  const onChildOver = () => {
    cursorChangeHandler("hovered")
    setMask(true);
  }
  const onChildLeave = () => {
    cursorChangeHandler("")
    setMask(false);
  }

  const scrollUp = () => {
    const parentEle = document.getElementsByClassName("aboutus-body")[0];
    const top = parentEle.scrollTop;
    parentEle.scrollTop = top + 20;
  }

  return (
    <LandingContainer>
      <BgComponent />
      <LinkButtons>
        <Switch className="switch" onThemeClick={props.onThemeClick} />
        <div>
          <a href="https://twitter.com/DayDreamerzNFTs" rel="noreferrer" target={'_blank'} style={{ width: "60%", height: '60%', color: '#FFF' }}><FaTwitter style={{ width: "100%", height: "100%" }} /></a>
        </div>
        <div>
          <a href="https://discord.gg/daydreamerz" rel="noreferrer" target={'_blank'} style={{ width: "60%", height: '60%', color: '#FFF' }}><FaDiscord style={{ width: "100%", height: "100%" }} /></a>
        </div>
        <div>
          <a href="https://opensea.io/" rel="noreferrer" target={'_blank'} style={{ width: "60%", height: '60%', color: '#FFF' }}><img src={opensea} alt="" style={{ width: "100%", height: "100%", scale: "1.5" }} /></a>
        </div>
        <div>
          <a href="https://whitepaper.daydreamerz.io/" rel="noreferrer" target={'_blank'} style={{ width: "60%", height: '60%', color: '#FFF' }}><img src={whitepaper} alt="" style={{ width: "100%", height: "100%", scale: "1.5" }} /></a>
        </div>
      </LinkButtons>
      <DarkMask isMask={isMask}></DarkMask>


      <div className="book">
        <PageFlip />
        <img className='nav-child1' src="https://drive.google.com/uc?id=1NHxR5bSh5X-i122_tcG-Re_046FvSHFP" alt="child1" />
        <img className='nav-child2' src="https://drive.google.com/uc?id=139iyqtbq3Jg7df8KZOnVFczK0cXhwFRf" alt="child2" />
      </div>
      {/* for responsiveness */}
      <div className="scroll">
        <div className='aboutus-title'>Ordinal<br /> Dreamerz</div>
        <div className='aboutus-body'>
          <p>Ordinal Dreamerz is a unique collection that features charming pixelated dreamerz, designed as a token of appreciation for our Day Dreamerz holders. Our main goal is to add value to the holders' experience and protect their aspirations. All Ordinal Dreamerz holders will enjoy the same benefits and privileges in the Day Dreamerz ecosystem.</p>
          <p>
            The minting of Ordinal Dreamerz will commence after the launch of our genesis collection "Day Dreamerz". We will announce the date and time of the snapshot well in advance.</p>
          <p>
            Every Day Dreamerz holder will receive a free mint of one Ordinal Dreamerz.<br />
            1x Day Dreamerz = 1x Ordinal Dreamerz Free Mint.</p>
          <img src={nft1} alt="nft1" />
        </div>
        <VscTriangleDown size={40} opacity={0.6} onClick={scrollUp} />
        <img className='nav-child3' src="https://drive.google.com/uc?id=139iyqtbq3Jg7df8KZOnVFczK0cXhwFRf" alt="child1" onClick={onChildClick} onMouseOver={() => onChildOver()} onMouseOut={() => onChildLeave()} onMouseDown={() => cursorChangeHandler("clicked")} onMouseUp={() => cursorChangeHandler("hovered")} />
      </div>
      <Logo />
      <QuickMenu setMask={setMask} />
    </LandingContainer >
  )
}

export default Intro;
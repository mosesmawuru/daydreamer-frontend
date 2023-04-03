import React, { useState } from 'react'
// import { useNavigate } from 'react-router-dom';
import { FaTwitter, FaDiscord } from 'react-icons/fa';

import { VscTriangleDown } from 'react-icons/vsc';

import {
  LandingContainer,
  DarkMask,
  LinkButtons
} from './dreamerz.style'

import BgComponent from '../../components/background1';
import QuickMenu from '../../components/quickMenu';
import Switch from '../../components/switch';
import Logo from '../../components/logo';

import PageFlip from '../../components/pageFlip';

import nft1 from "assets/images/nfts/day.gif";

import opensea from 'assets/images/icons/os.png'
import whitepaper from 'assets/images/icons/wp.png'


const Intro = (props) => {
  const [isMask, setMask] = useState(false);

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
        <img className='nav-child1' src="https://drive.google.com/uc?id=1cLDBylGiJk0Ym24jgSI9SDiZ8vB-zBTl" alt="child1" />
        <img className='nav-child2' src="https://drive.google.com/uc?id=1yI_F33-TS1R_lWbEWojUJwZIuklBC6Uc" alt="child2" />
      </div>
      {/* for responsiveness */}
      <div className="scroll">
        <div className='aboutus-title'>Day Dreamerz</div>
        <div className='aboutus-body'>
          <p>Day Dreamerz is a collection that celebrates the aspirations and dreams of every child. Our project is founded on the fundamental belief that each child has a unique dream that they strive to achieve when they grow up. We are dedicated to preserving the magic of dreaming and creating a platform that fosters connections and shared passions among dreamers.</p>
          <p>
            Our D-Connect platform is the embodiment of that belief, where we bring together individuals from all walks of life to share their unique talents, skills, and knowledge, and provide support and guidance to those seeking to turn their dreams into reality. We are dedicated to creating a platform that not only celebrates the beauty of dreaming but also provides practical tools and resources to help dreamers achieve their goals, no matter how big or small.</p>
          <img src={nft1} alt="nft1" />
        </div>
        <VscTriangleDown size={40} opacity={0.6} onClick={scrollUp} />
        <img className='nav-child3' src='https://drive.google.com/uc?id=1yI_F33-TS1R_lWbEWojUJwZIuklBC6Uc' alt="child1" />
      </div>
      <Logo />
      <QuickMenu setMask={setMask} />
    </LandingContainer >
  )
}

export default Intro;
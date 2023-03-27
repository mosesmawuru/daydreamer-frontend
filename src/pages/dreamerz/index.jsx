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

import nft1 from "assets/images/nfts/1.png";
import nft2 from "assets/images/nfts/2.png";
import nft3 from "assets/images/nfts/3.png";
import nft4 from "assets/images/nfts/4.png";
import nft5 from "assets/images/nfts/5.png";
import nft6 from "assets/images/nfts/6.png";
import nft7 from "assets/images/nfts/7.png";
import nft8 from "assets/images/nfts/8.png";
import nft9 from "assets/images/nfts/9.png";
import nft10 from "assets/images/nfts/10.png";
import nft11 from "assets/images/nfts/11.png";
import nft12 from "assets/images/nfts/12.png";
import nft13 from "assets/images/nfts/13.png";
import nft14 from "assets/images/nfts/14.png";
import nft15 from "assets/images/nfts/15.png";
import nft16 from "assets/images/nfts/16.png";
import nft17 from "assets/images/nfts/17.png";
import nft18 from "assets/images/nfts/18.png";
import nft19 from "assets/images/nfts/19.png";
import nft20 from "assets/images/nfts/20.png";
import nft21 from "assets/images/nfts/21.png";
import nft22 from "assets/images/nfts/22.png";
import nft23 from "assets/images/nfts/23.png";
import nft24 from "assets/images/nfts/24.png";

import opensea from 'assets/images/icons/os.png'
import whitepaper from 'assets/images/icons/wp.png'

// import { MouseContext } from "../../contexts/mouse-context";

const Intro = (props) => {
  // const navigate = useNavigate();

  const [isMask, setMask] = useState(false);
  // const { cursorChangeHandler } = useContext(MouseContext);

  // const onChildClick = () => {
  //   navigate('/');
  // }

  // const onChildOver = () => {
  //   cursorChangeHandler("hovered")
  //   setMask(true);
  // }
  // const onChildLeave = () => {
  //   cursorChangeHandler("")
  //   setMask(false);
  // }

  const scrollUp = () => {
    const parentEle = document.getElementsByClassName("aboutus-body")[0];
    const top = parentEle.scrollTop;
    parentEle.scrollTop = top + 20;
  }

  // console.log(123123123, props);
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
          <img src={nft1} alt="nft1" />
          <p>Adventurer</p>
          <p>Day Dreamerz is a collection that celebrates the aspirations and dreams of every child. Our project is founded on the fundamental belief that each child has a unique dream that they strive to achieve when they grow up. We are dedicated to preserving the magic of dreaming and creating a platform that fosters connections and shared passions among dreamers.</p>
          <img src={nft2} alt="nft1" />
          <p>Artist</p>
          <p>
            Our D-Connect platform is the embodiment of that belief, where we bring together individuals from all walks of life to share their unique talents, skills, and knowledge, and provide support and guidance to those seeking to turn their dreams into reality. We are dedicated to creating a platform that not only celebrates the beauty of dreaming but also provides practical tools and resources to help dreamers achieve their goals, no matter how big or small.</p>
          <img src={nft3} alt="nft1" /><p>Astronaut</p>
          <img src={nft4} alt="nft1" /><p>Chef original</p>
          <img src={nft5} alt="nft1" /><p>Dancer</p>
          <img src={nft6} alt="nft1" /><p>Basketball player</p>
          <img src={nft7} alt="nft1" /><p>Detective</p>
          <img src={nft8} alt="nft1" /><p>Diver original</p>
          <img src={nft9} alt="nft1" /><p>Flight Attendant</p>
          <img src={nft10} alt="nft1" /><p>Diver with</p>
          <img src={nft11} alt="nft1" /><p>Doctor</p>
          <img src={nft12} alt="nft1" /><p>Magician otiginal</p>
          <img src={nft13} alt="nft1" /><p>Magician</p>
          <img src={nft14} alt="nft1" /><p>engineer</p>
          <img src={nft15} alt="nft1" /><p>Fire Fighter</p>
          <img src={nft16} alt="nft1" /><p>Makeup Artist</p>
          <img src={nft17} alt="nft1" /><p>News Reporter</p>
          <img src={nft18} alt="nft1" /><p>Guitarist</p>
          <img src={nft19} alt="nft1" /><p>Pilot</p>
          <img src={nft20} alt="nft1" /><p>Sailor</p>
          <img src={nft21} alt="nft1" /><p>Singer</p>
          <img src={nft22} alt="nft1" /><p>Race Driver</p>
          <img src={nft23} alt="nft1" /><p>Scientists</p>
          <img src={nft24} alt="nft1" /><p>Singer</p>
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
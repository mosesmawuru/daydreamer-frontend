import React, { useState } from 'react';
// import { useNavigate } from 'react-router-dom';
import { FaTwitter, FaDiscord } from 'react-icons/fa';
import { VscTriangleDown } from 'react-icons/vsc';

import {
  VisionContainer,
  DarkMask,
  LinkButtons
} from './aboutus.style'

import BgComponent from '../../components/background1';
import QuickMenu from '../../components/quickMenu';
import Switch from '../../components/switch';
import Logo from '../../components/logo';

import opensea from 'assets/images/icons/os.png'
import whitepaper from 'assets/images/icons/wp.png'

// import child1 from 'assets/images/child1.png';
// import child2 from 'assets/images/graphic/333.gif';

// import nft2 from "assets/images/nfts/2.png";
// import nft4 from "assets/images/nfts/4.png";

// import { MouseContext } from "../../contexts/mouse-context";

const AboutUs = (props) => {

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
    const parentEle = document.getElementsByClassName("ourvision-body")[0];
    const top = parentEle.scrollTop;
    parentEle.scrollTop = top + 20;
  }

  return (
    <VisionContainer>
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
          <a href="https://opensea.io/" rel="noreferrer" target={'_blank'} style={{ width: "60%", height: '60%', color: '#FFF' }}><img src={opensea} style={{ width: "100%", height: "100%", scale: "1.5" }} /></a>
        </div>
        <div>
          <a href="https://whitepaper.daydreamerz.io/" rel="noreferrer" target={'_blank'} style={{ width: "60%", height: '60%', color: '#FFF' }}><img src={whitepaper} style={{ width: "100%", height: "100%", scale: "1.5" }} /></a>
        </div>
      </LinkButtons>
      <DarkMask isMask={isMask}></DarkMask>


      <div className="scroll" id='scroll' style={{ scrollTop: "100px" }}>
        <div className='ourvision-title'>About Us</div>
        <div className='ourvision-body'>
          Our mission is to empower dreamers from all backgrounds and professions, whether they are artists, scientists, entrepreneurs, or innovators.<br />
          We aim to create a community where everyone can connect and collaborate, fostering a space where individuals can learn from one another and grow together.<br />
          Our goal is to provide resources, support, and mentorship to help individuals achieve their dreams and make a positive impact in their respective field.<br />
          Join us on this journey as we work together to build a better future, one dream at a time.<br />
          We are creating a space that is safe, inclusive, and supportive, where individuals can pursue their passions with confidence and enthusiasm.<br />
          Let us come together and celebrate the beauty of dreaming!


          Our mission is to empower dreamers from all backgrounds and professions, whether they are artists, scientists, entrepreneurs, or innovators.<br />
          We aim to create a community where everyone can connect and collaborate, fostering a space where individuals can learn from one another and grow together.<br />
          Our goal is to provide resources, support, and mentorship to help individuals achieve their dreams and make a positive impact in their respective field.<br />
          Join us on this journey as we work together to build a better future, one dream at a time.<br />
          We are creating a space that is safe, inclusive, and supportive, where individuals can pursue their passions with confidence and enthusiasm.<br />
          Let us come together and celebrate the beauty of dreaming!
          Our mission is to empower dreamers from all backgrounds and professions, whether they are artists, scientists, entrepreneurs, or innovators.<br />
          We aim to create a community where everyone can connect and collaborate, fostering a space where individuals can learn from one another and grow together.<br />
          Our goal is to provide resources, support, and mentorship to help individuals achieve their dreams and make a positive impact in their respective field.<br />
          Join us on this journey as we work together to build a better future, one dream at a time.<br />
          We are creating a space that is safe, inclusive, and supportive, where individuals can pursue their passions with confidence and enthusiasm.<br />
          Let us come together and celebrate the beauty of dreaming!

        </div>
        <VscTriangleDown size={40} opacity={0.6} onClick={scrollUp} />
        <img src="https://drive.google.com/uc?id=1KeSFl6n0ehSm_Hb3UMcvjtv5bfG1adhK" alt="child1" />
        {/* <img src={child2} alt="child1" onClick={onChildClick} onMouseOver={() => onChildOver()} onMouseOut={() => onChildLeave()} onMouseDown={() => cursorChangeHandler("clicked")} onMouseUp={() => cursorChangeHandler("hovered")} /> */}
      </div>
      {/* <div className="children">
        <img src={child1} alt="child1" onClick={onChildClick} onMouseOver={() => onChildOver()} onMouseOut={() => onChildLeave()} onMouseDown={() => cursorChangeHandler("clicked")} onMouseUp={() => cursorChangeHandler("hovered")} />
        <img src={child2} alt="child2" onClick={onChildClick} onMouseOver={() => onChildOver()} onMouseOut={() => onChildLeave()} onMouseDown={() => cursorChangeHandler("clicked")} onMouseUp={() => cursorChangeHandler("hovered")} />
      </div> */}
      <Logo />
      <QuickMenu setMask={setMask} />
    </VisionContainer >
  )
}

export default AboutUs;
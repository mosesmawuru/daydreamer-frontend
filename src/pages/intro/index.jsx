import React, { useState, useContext } from 'react'
import { useNavigate } from 'react-router-dom';

import {
  LandingContainer,
  DarkMask

} from './intro.style'

import BgComponent from '../../components/background1';
import QuickMenu from '../../components/quickMenu';
import Logo from '../../components/logo';

import PageFlip from '../../components/pageFlip';

import child1 from 'assets/images/child1.png';
import child2 from 'assets/images/child6.png';


import nft1 from "assets/images/nfts/1.png";
import nft2 from "assets/images/nfts/2.png";
import nft3 from "assets/images/nfts/3.png";
import nft4 from "assets/images/nfts/4.png";

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

  // console.log(123123123, props);
  return (
    <LandingContainer>
      <BgComponent />
      {/* <LinkButtons>
        <Switch className="switch" onThemeClick={props.onThemeClick} />
        <div>
          <FaTwitter style={{ width: "60%", height: '60%', color: '#FFF' }} />
        </div>
        <div>
          <FaDiscord style={{ width: "60%", height: '60%', color: '#FFF' }} />
        </div>
      </LinkButtons> */}
      <DarkMask isMask={isMask}></DarkMask>


      <div className="book">
        <PageFlip />
      </div>
      {/* for responsiveness */}
      <div className="scroll">
        <div className='aboutus-title'>Art Flexible</div>
        <div className='aboutus-body'>
          <img src={nft1} alt="nft1" />
          <img src={nft2} alt="nft1" />
          <img src={nft3} alt="nft1" />
          <img src={nft4} alt="nft1" />
          <img src={nft1} alt="nft1" />
          <img src={nft2} alt="nft1" />
          <img src={nft3} alt="nft1" />
          <img src={nft4} alt="nft1" />
        </div>
      </div>
      <div className="children">
        <img src={child1} alt="child1" onClick={onChildClick} onMouseOver={() => onChildOver()} onMouseOut={() => onChildLeave()} onMouseDown={() => cursorChangeHandler("clicked")} onMouseUp={() => cursorChangeHandler("hovered")} />
        <img src={child2} alt="child2" onClick={onChildClick} onMouseOver={() => onChildOver()} onMouseOut={() => onChildLeave()} onMouseDown={() => cursorChangeHandler("clicked")} onMouseUp={() => cursorChangeHandler("hovered")} />
      </div>
      <Logo />
      <QuickMenu />
    </LandingContainer >
  )
}

export default Intro;
import React, { useContext, useState } from 'react';
// import { useNavigate } from 'react-router-dom';

import {
  LandingContainer,
  ChildrenArea,
  LinkButtons,
  DarkMask
} from './comming.style'

import Switch from '../../components/switch';
import Title from '../../components/commingTitle';
import BgComponent from '../../components/background1';
import Logo from '../../components/logo';

// import react icons
import { FaTwitter, FaDiscord } from 'react-icons/fa';
import QuickMenu from '../../components/quickMenu';

import opensea from 'assets/images/icons/os.png'
import whitepaper from 'assets/images/icons/wp.png'

import { MouseContext } from "../../contexts/mouse-context";

const Comming = (props) => {
  // const navigate = useNavigate();

  const [isMask, setMask] = useState(false);
  const { cursorChangeHandler } = useContext(MouseContext);

  // const onChildClick = () => {
  //   window.location.assign('https://whitepaper.daydreamerz.io/artwork');
  // }
  const onChildOver = () => {
    cursorChangeHandler("hovered")
    // setMask(true);
  }
  const onChildLeave = () => {
    cursorChangeHandler("")
    // setMask(false);
  }

  // console.log(123123123, props);
  return (
    <LandingContainer>
      <BgComponent />

      <ChildrenArea>
        <div>
          <Title text="Comming Soon" />
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
          {/* <div className='return' onMouseOver={() => onChildOver()} onMouseOut={() => onChildLeave()} onMouseDown={() => cursorChangeHandler("clicked")} onMouseUp={() => cursorChangeHandler("hovered")} onClick={() => navigate('/')}></div> */}
          <a href="https://whitepaper.daydreamerz.io/artwork" rel="noreferrer" target={'_blank'} ><div className="logo" onMouseOver={() => onChildOver()} onMouseOut={() => onChildLeave()} onMouseDown={() => cursorChangeHandler("clicked")} onMouseUp={() => cursorChangeHandler("hovered")}></div></a>
        </div>
      </ChildrenArea>
      <Logo />
      <QuickMenu setMask={setMask} />
    </LandingContainer>
  )
}

export default Comming;
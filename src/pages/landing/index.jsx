import React, { useEffect, useState } from 'react'

import {
  LandingContainer,
  DarkMask,
  LinkButtons,
  Board
} from './landing.style'

import Switch from '../../components/switch';
import Title from '../../components/title';
import ChildrenComponent from '../../components/children';
import BgComponent from '../../components/background1';
import QuickMenu from '../../components/quickMenu';
import Logo from '../../components/logo';
import Loading from '../../components/loading';

import opensea from 'assets/images/icons/os.png'
import whitepaper from 'assets/images/icons/wp.png'

// import react icons
import { FaTwitter, FaDiscord } from 'react-icons/fa';

const Landing = (props) => {

  const [isMask, setMask] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 3500);
  }, [])

  return (
    <LandingContainer>
      {loading ? <Board><Loading /></Board> : null}
      <BgComponent />
      <Title text="Day Dreamerz" />
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
      <ChildrenComponent isPosLeftChildren={false} setMask={setMask} />
      <Logo />
      <DarkMask isMask={isMask}></DarkMask>
      <QuickMenu setMask={setMask} />
    </LandingContainer>
  )
}

export default Landing;
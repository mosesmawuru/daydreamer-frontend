import React, { useState } from 'react'
import { FaTwitter, FaDiscord } from 'react-icons/fa';

import {
  LandingContainer,
  DarkMask,
  LinkButtons
} from './mint.style'

import MintBoard from '../../components/mintBoard';
import BgComponent from '../../components/background2';

import QuickMenu from '../../components/quickMenu';
import Switch from '../../components/switch';
import Logo from '../../components/logo';

import opensea from 'assets/images/icons/os.png'
import whitepaper from 'assets/images/icons/wp.png'

const Mint = (props) => {

  const [isMask, setMask] = useState(false);

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
      <MintBoard setMask={setMask} />
      <Logo />
      <DarkMask isMask={isMask}></DarkMask>
      <QuickMenu setMask={setMask} />
    </LandingContainer>
  )
}

export default Mint;
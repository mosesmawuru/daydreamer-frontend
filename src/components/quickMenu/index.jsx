import React from 'react'
import styled from 'styled-components'
import opensea from 'assets/images/icons/os.png'
import whitepaper from 'assets/images/icons/wp.png'

import { FaTimes } from 'react-icons/fa';
import { FaTwitter, FaDiscord } from 'react-icons/fa';


// style
const MenuContainer = styled.div`
  position: absolute;
  bottom: -400px;
  width: 100%;
  z-index: 9999999999999999;
  div.clickable-area {
    background-color: #fff;
    border-top-left-radius: 10px;
    border-top-right-radius: 10px;
    width: 80%;
    height: 60px;
    margin: auto;
    display: flex;
    justify-content: center;
    align-items: center;

    box-shadow: 0 3px 3px 0 rgb(0 0 0 / 37%), 0 1px 11px 0 rgb(0 0 0 / 74%);
    div.class1 {
      position: absolute;
      color: #fff;
      font-weight: 100;
      font-size: 24px;
      font-family: "Titan One";
      letter-spacing: 5px;
      text-shadow: 2px 2px 4px #000;
    }
  }

  div.menu-body {
    position: relative;
    width: 90%;
    height:330px;
    background-color: #fff;
    margin: auto;
    border-top-left-radius: 10px;
    border-top-right-radius: 10px;

    div.social-api {
      width: 80%;
      display: flex ;
      justify-content:space-around ;
      align-items:center ;
      display: none;
      margin-top: 5px;

      div:nth-child(1) {
        display:flex ;
        justify-content:center ;
        align-items:center ;
        background-color:${({ theme }) => theme.link_bg} ;
        border-radius:50% ;
        width:40px ;
        height:40px ;
        box-shadow: 0 3px 3px 0 rgb(0 0 0 / 37%), 0 1px 11px 0 rgb(0 0 0 / 74%);
      }
      div:nth-child(2) {
        display:flex ;
        justify-content:center ;
        align-items:center ;
        background-color:${({ theme }) => theme.link_bg} ;
        border-radius:50% ;
        width:40px ;
        height:40px ;
        box-shadow: 0 3px 3px 0 rgb(0 0 0 / 37%), 0 1px 11px 0 rgb(0 0 0 / 74%);
      }
      div:nth-child(3) {
        display:flex ;
        justify-content:center ;
        align-items:center ;
        background-color:${({ theme }) => theme.link_bg} ;
        border-radius:50% ;
        width:40px ;
        height:40px ;
        box-shadow: 0 3px 3px 0 rgb(0 0 0 / 37%), 0 1px 11px 0 rgb(0 0 0 / 74%);
      }
      div:nth-child(4) {
        display:flex ;
        justify-content:center ;
        align-items:center ;
        background-color:${({ theme }) => theme.link_bg} ;
        border-radius:50% ;
        width:40px ;
        height:40px ;
        box-shadow: 0 3px 3px 0 rgb(0 0 0 / 37%), 0 1px 11px 0 rgb(0 0 0 / 74%);
      }

      @media screen and (max-width: 515px) {
        display: flex;
      }
    }

    span {
      color: #8d8b8b;
      font-size: 30px;
      position: absolute;
      right: 15px;
      top: 15px;
    }
    span:hover {
      color: #fafafa;
    }
    div.sub-menu-container {
      display: flex;
      width: 100%;
      height: 100%;
      padding-top: 50px;
      padding-bottom: 10px;
      flex-direction: column;
      justify-content: space-around;
      align-items: center;
      
      font-size: 25px;
      font-family: "Titan One";
      letter-spacing: 2px;
      text-shadow: 2px 2px 4px #696969;
    }
    div.sub-menu-container > div:nth-child(1) {
      color: #91d7ff;
      transform: translateY(-20px);
    }
    div.sub-menu-container a {
      color: #91d7ff;
      text-decoration: none;
    }
    div.sub-menu-container a:hover {
      color: #38b6ff;
    }
    @media screen and (min-width: 880px){
    top: 0px !important;
  }
  }

  @media screen and (max-width: 880px){
    bottom: -330px;
  }
`;

const Menu = (props) => {

  const onMenuClick = () => {
    document.getElementsByClassName("menu-body")[0].style.top = "-330px";
    props.setMask(true);
  }
  const onClose = () => {
    document.getElementsByClassName("menu-body")[0].style.top = "0px";
    props.setMask(false);
  }

  return (
    <MenuContainer>
      <div className='clickable-area' onClick={onMenuClick}>
        <div className='class1'>QUICK MENU</div>
      </div>
      <div className='menu-body'>
        <span onClick={onClose}><FaTimes /></span>
        <div className='sub-menu-container'>
          <div>QUICK MENU</div>
          <div><a href="/about-us">About US</a> </div>
          <div><a href="/day-dreamerz">Day Dreamerz</a> </div>
          <div><a href="/ordinal-dreamerz">Ordinal Dreamerz</a> </div>
          <div><a href="/D-connect">D-connect</a> </div>
          <div><a href="/mint">WL checker</a> </div>
          <div><a href="/faq">FAQ</a> </div>
          <div className='social-api'>
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
          </div>
        </div>
      </div>
    </MenuContainer>
  );
}
export default Menu;
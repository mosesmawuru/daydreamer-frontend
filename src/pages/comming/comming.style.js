import styled from "styled-components";

import board from "assets/images/board.png";
import logo from "assets/images/logo.png";

export const LandingContainer = styled.div`
  @keyframes container_bg_animation2{
    0%   {background:#17334A;}
    99.99% {background:#90D6FF;}
    100% {background:linear-gradient(to right, #94CEF9, #90D6FF);}
  }
  @keyframes container_bg_animation1{
    0%   {background:#90D6FF;}
    99.99% {background:#17334A;}
    100% {background:linear-gradient(to right, #17334A, #275A80);}
  }
  width:100vw ;
  height:100vh ;
  position: relative ;

  animation-name: ${({ theme }) => theme.container_bg_animation} ;    
  animation-duration:1.5s;
  animation-timing-function:linear ;
  animation-fill-mode: forwards;

  width:100vw ;
  height:100vh ;
  position: relative ;
  @media screen and (max-width: 600px) {
    height: 89vh;
  }
  @media screen and (max-width: 375px) {
    height: 88vh;
  }
`;


export const LinkButtons = styled.div`
  width:300px ;
  height: 80px;
  position: relative ;
  top: 70vh;
  margin: auto;
  display: flex ;
  justify-content:space-around ;
  align-items:center ;
  transform: rotate(-2deg);
  div:nth-child(1) {
  }
  div.switch {    
    opacity: 0;
    animation-name: LinkAnimation;
    animation-duration: 0.3s;
    animation-delay: 1.5s;
    animation-fill-mode: forwards;
    animation-timing-function: ease-in;
  }
  div:nth-child(2) {
    opacity: 0;
    display:flex ;
    justify-content:center ;
    align-items:center ;
    background-color:${({ theme }) => theme.link_bg} ;
    border-radius:50% ;
    width:40px ;
    height:40px ;
    
    animation-name: LinkAnimation;
    animation-duration: 0.3s;
    animation-delay: 1.8s;
    animation-fill-mode: forwards;
    animation-timing-function: ease-in;
    box-shadow: 0 3px 3px 0 rgb(0 0 0 / 37%), 0 1px 11px 0 rgb(0 0 0 / 74%);
    @media screen and (max-width: 515px) {
      display: none;
    }
  }
  div:nth-child(3) {
    opacity: 0;
    display:flex ;
    justify-content:center ;
    align-items:center ;
    background-color:${({ theme }) => theme.link_bg} ;
    border-radius:50% ;
    width:40px ;
    height:40px ;
    
    animation-name: LinkAnimation;
    animation-duration: 0.3s;
    animation-delay: 2.1s;
    animation-fill-mode: forwards;
    animation-timing-function: ease-in;
    box-shadow: 0 3px 3px 0 rgb(0 0 0 / 37%), 0 1px 11px 0 rgb(0 0 0 / 74%);
    @media screen and (max-width: 515px) {
      display: none;
    }
  }
  div:nth-child(4) {
    opacity: 0;
    display:flex ;
    justify-content:center ;
    align-items:center ;
    background-color:${({ theme }) => theme.link_bg} ;
    border-radius:50% ;
    width:40px ;
    height:40px ;

    box-shadow: 0 3px 3px 0 rgb(0 0 0 / 37%), 0 1px 11px 0 rgb(0 0 0 / 74%);
    
    animation-name: LinkAnimation;
    animation-duration: 0.3s;
    animation-delay: 2.4s;
    animation-fill-mode: forwards;
    animation-timing-function: ease-in;
    @media screen and (max-width: 515px) {
      display: none;
    }
  }
  div:nth-child(5) {
    opacity: 0;
    display:flex ;
    justify-content:center ;
    align-items:center ;
    background-color:${({ theme }) => theme.link_bg} ;
    border-radius:50% ;
    width:40px ;
    height:40px ;

    box-shadow: 0 3px 3px 0 rgb(0 0 0 / 37%), 0 1px 11px 0 rgb(0 0 0 / 74%);
    
    animation-name: LinkAnimation;
    animation-duration: 0.3s;
    animation-delay: 2.7s;
    animation-fill-mode: forwards;
    animation-timing-function: ease-in;
    @media screen and (max-width: 515px) {
      display: none;
    }
  }
  
  @media screen and (max-width: 1270px) {
    position: relative;
    left: 0;
  }
  @media screen and (max-width: 1024px) {
    top:63vh;
  }
  @media screen and (max-width: 768px) {
    position: fixed;
    top: 10px;
    left: calc(100vw - 320px);
    transform: rotate(0);
  }
  @media screen and (max-width: 515px) {
    width: 80px;
    left: unset;
    right: 25px;
  }
  @media screen and (max-width: 320px) {
    justify-content: flex-end;
    padding-left: 5px;
  }
  
  @keyframes LinkAnimation {
    0%   {opacity: 0; margin-top: 50px;}
    100% { opacity: 1; margin-top: 0;}
  }
`;

export const ChildrenArea = styled.div`

  @media screen and (max-width: 1024px) {
    width: 90vw;
    left: 5vw;
  }
  @media screen and (max-width: 1024px) {
    width: 95vw;
    height: 640px;
    left: 2.5vw;
  }
  @media screen and (max-width: 425px) {
    width: 95vw;
    height: 540px;
  }

  background: url(${board});
  background-size: 100% 100%;
  position: absolute;
  height: 90vh;
  width: 900px;
  left: calc((100vw - 900px) / 2);

  div.logo {
    background: url(${logo});
    background-size: 100% 100%;
    position: absolute;
    top: 30vh;
    left: 380px;
    width: 150px;
    height: 180px;
    transform: rotate(-3deg) scale(0.8);

    @media screen and (max-width: 1440px) {
      top: 230px;
      transform: scale(0.8) rotate(-3deg);
    }
    @media screen and (max-width: 1024px) {
      top: 180px;
      transform: scale(0.8) rotate(-3deg);
    }
    @media screen and (max-width: 768px) {
      top: 180px;
      left: 39vw;
      transform: scale(0.8) rotate(-3deg);
    }
    @media screen and (max-width: 500px) {
      left: 35vw;
    }
    @media screen and (max-width: 425px) {
      left: calc((100vw - 150px) / 2);
      top: 150px;
      transform: scale(0.7) rotate(-3deg);
    }
  }
  div.logo:hover {
    transform: rotate(-3deg) scale(1.1);
  }

  div.return:hover {
    transform: scale(1.1);
  }
`;

export const DarkMask = styled.div`
  width: 100vw ;
  height:100vh ;
  z-index: 10;
  background-color: rgba(0,0,0,0.5) ;
  position: absolute;
  opacity: 0;
  display: ${props => props.isMask ? "block" : "none"} ;
  animation-name: ${props => props.isMask ? "show" : "hide"};
  animation-duration: 0.5s;
  animation-timing-function:linear ;
  animation-fill-mode: forwards;

  @keyframes show {
    0% { opacity: 0; }
    100% { opacity: 1; }
  }
  @keyframes hide {
    0% { opacity: 1; }
    100% { opacity: 0; }
  }
`;
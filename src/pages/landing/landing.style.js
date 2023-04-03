import styled from "styled-components";

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

  @media screen and (max-width: 600px) {
    height: 89vh;
  }
  @media screen and (max-width: 375px) {
    height: 88vh;
  }
`;


export const DarkMask = styled.div`
  width: 100vw ;
  height:100vh ;
  z-index: 10;
  background-color: rgba(0,0,0,0.5) ;
  position: absolute;
  top: 0;
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

export const LinkButtons = styled.div`
  width:300px ;
  height: 80px;
  position: absolute ;
  top:260px ;
  left:150px ;
  display: flex ;
  justify-content:space-around ;
  align-items:center ;
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
 
    box-shadow: 0 3px 3px 0 rgb(0 0 0 / 37%), 0 1px 11px 0 rgb(0 0 0 / 74%);
    animation-name: LinkAnimation;
    animation-duration: 0.3s;
    animation-delay: 1.8s;
    animation-fill-mode: forwards;
    animation-timing-function: ease-in;
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

    box-shadow: 0 3px 3px 0 rgb(0 0 0 / 37%), 0 1px 11px 0 rgb(0 0 0 / 74%);
    
    animation-name: LinkAnimation;
    animation-duration: 0.3s;
    animation-delay: 2.1s;
    animation-fill-mode: forwards;
    animation-timing-function: ease-in;
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
    margin: auto;
    position: relative;
    left: 0;
  }
  @media screen and (max-width: 1024px) {
    top: 230px;
  }
  @media screen and (max-width: 918px) {
    top: 380px;
  }
  @media screen and (max-width: 768px) {
    position: fixed;
    top: 10px;
    left: calc(100vw - 320px);
  }
  @media screen and (max-width: 515px) {
    width: 80px;
    left: unset;
    right: 25px;
  }
  @media screen and (max-width: 320px) {
    justify-content: flex-end;
    right: 20px;
    width: 100px;
    div {
      margin: 5px;
    }
  }

  @keyframes LinkAnimation {
    0%   {opacity: 0; margin-top: 50px;}
    100% { opacity: 1; margin-top: 0;}
  }

`;

export const Board = styled.div`
  width: 100vw;
  height: 100vh;
  background: #fff;
  z-index: 9999999999999999;
  position: absolute;
`;
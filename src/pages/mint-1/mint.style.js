import styled from "styled-components";

import btn1 from "assets/images/btn1.png";

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
  /* background: ${({ theme }) => theme.container_bg}; */

  animation-name: ${({ theme }) => theme.container_bg_animation} ;    
  animation-duration:1.5s;
  animation-timing-function:linear ;
  animation-fill-mode: forwards;
  width:100vw ;
  height:100vh ;
  position: relative ;

  .faq-board {
    display: none;
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

export const LinkButtons = styled.div`
/* border: 1px solid red; */
  width:220px ;
  position: fixed;
  top:28px ;
  right:15px ;
  display: flex ;
  justify-content:space-around ;
  align-items:center ;
  z-index: 999;
  div:nth-child(1) {
    /* cursor: pointer; */
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
    @media screen and (max-width: 425px) {
      display: none;
    }
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
    @media screen and (max-width: 425px) {
      display: none;
    }
  }
  @media screen and (max-width: 425px) {
    width: 80px;
    left: unset;
    right: 25px;
  }
`;

export const WLChecker = styled.div`
  width: 100vw;
  height: 100vh;
  position: absolute;

  div:first-child {
    position: absolute;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 600px;
    height: 436px;
    top: 20%;
    left: calc((100vw - 600px) / 2);
    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
    @media screen and (max-width: 1440px) {
      width: 40%;
      left: 30%;
    }
    @media screen and (max-width: 1024px) {
      width: 50%;
      left: 25%;
    }
    @media screen and (max-width: 768px) {
      width: 70%;
      left: 15%;
    }
    @media screen and (max-width: 425px) {
      width: 80%;
      left: 10%;
    }
  }
  & > div:nth-child(2) {
    position: absolute;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    align-items: center;
    row-gap: 30px;
    width: 25%;
    height: 45%;
    top: 280px;
    left: 38%;
    
    @media screen and (max-width: 1440px) {
      width: 30%;
      left: 35%;
      top: 35%;
    }
    @media screen and (max-width: 1440px) {
      width: 40%;
      left: 30%;
      top: 35%;
    }
    @media screen and (max-width: 768px) {
      width: 60%;
      left: 20%;
      top: 35%;
    }
    @media screen and (max-width: 425px) {
      width: 70%;
      left: 15%;
      top: 25%;
      row-gap: 10px;
    }
    @media screen and (max-width: 375px) {
      top: 29%;
    }

    span.wlc-title {
      font-family: "Titan One";
      color: #FFDB52;
      font-size: 38px;
      text-align: center;
    @media screen and (max-width: 425px) {
      font-size: 30px;
    }
    }
    div {
      width: 100%;
      height: 144px;
      background: url(${btn1}) no-repeat;
      background-size: contain;
      background-position: center;
      display: flex;
      justify-content: center;
      align-items: center;
      font-family: "Titan One";
      font-size: 26px;
      
      @media screen and (max-width: 1440px) {
        padding-left: 55px;
      }
      @media screen and (max-width: 1024px) {
        padding-left: 10px;
      }
      @media screen and (max-width: 768px) {
        padding-left: 20px;
      }
      @media screen and (max-width: 425px) {
        height: 100px;
        font-size: 20px;
        letter-spacing: -1px;
        padding-left: 8px;
      }
      span.connect-text {
        width: 63%;
        text-align: center;
        color: #fff;
        -webkit-text-stroke: 1px #36b1ee;
      }
      span.connect-text:hover {
        color: #36b1ee;
        -webkit-text-stroke: 1px white;
      }
      span.check-text {
        text-align: center;
        width: 37%;
        color: green;
        font-size: 30px;
        -webkit-text-stroke: 1px white;
      }
    }
  }

  img.guitarman {
    position: absolute;
    object-fit: cover;
    width: 300px;
    height: 200px;
    transform: rotateY(180deg);
    bottom: 50px;
    left: calc((100vw - 850px) / 2);
    
    @media screen and (max-width: 1440px) {
      left: 20%;
    }
    @media screen and (max-width: 1024px) {
      bottom: 13%;
      left: 13%;
    }
    @media screen and (max-width: 768px) {
      bottom: 11%;
      left: 0%;
    }
    @media screen and (max-width: 425px) {
      display: none;
    }
  }
  img.computerman {
    position: absolute;
    object-fit: cover;
    width: 250px;
    height: 130px;
    transform: rotateY(180deg);
    bottom: 50px;
    right: calc((100vw - 750px) / 2);
    @media screen and (max-width: 1440px) {
      right: 23%;
    }
    @media screen and (max-width: 1024px) {
      bottom: 13%;
      right: 15%;
    }
    @media screen and (max-width: 768px) {
      bottom: 11%;
      right: 3%;
    }
    @media screen and (max-width: 425px) {
      display: none;
    }
  }
`;
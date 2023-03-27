import styled from "styled-components";


import bookImg from "assets/images/book.png";
import scrollImg from "assets/images/scroll.png";

export const LandingContainer = styled.div`
  width:100vw ;
  height:100vh ;
  position: relative ;
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


  .book {
    position: relative;
    background: url(${bookImg});
    background-size: 100% 100%;
    background-repeat: no-repeat;
    width: 910px;
      height: 700px;
    margin: auto;
    top: calc((100vh - 700px) / 2);
    border-radius: 10px;
    @media screen and (max-width: 1020px) {
      display: none;
    }
  } 
    div.scroll {
    position: relative;
    background: url(${scrollImg});
    background-size: 100% 100%;
    width: 70vw;
    height: 90vh;
    margin: auto;
    top: 5vh;
    padding: 20vh 8vw;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    display: none;
    /* border: 1px solid red; */
    @media screen and (max-width: 1020px) {
      display: flex;
      width: 80vw;
    }
    @media screen and (max-width: 768px) {
      width: 85vw;
    }
    @media screen and (max-width: 425px) {
      width: 94vw;
    }
    div.aboutus-title {      
      font-family: 'Titan One';
      font-style: normal;
      font-weight: 400;
      font-size: 48px;
      line-height: 55px;
      padding-bottom: 20px;
    }
    div.aboutus-body {
      overflow-y: scroll;
      display: flex;
      justify-content: space-around;
      align-items: center;
      flex-wrap: wrap;      
      box-shadow: 0 3px 3px 0 rgb(0 0 0 / 37%), 0 1px 11px 0 rgb(0 0 0 / 74%);
      border-radius: 10px;
      img {
        margin-top: 10px;
        width: 48%;
      }
    }
  }  

  .children {
    position: relative;
    bottom: 0%;
    width: 1050px;
    margin: auto;
    display: flex;
    justify-content: space-between;
    align-items: center;
    @media screen and (max-width: 1024px) {
      width: 85vw;
    }
    @media screen and (max-width: 768px) {
      width: 90vw;
    }
    @media screen and (max-width: 425px) {
      display: none;
    }
    img {
      transform: translateY(-290px);
    }
    img:hover {
      transform:translateY(-290px) scale(1.3) ;
      z-index: 999;
    }
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
  position: absolute ;
  top:330px ;
  left:150px ;
  display: flex ;
  justify-content:space-around ;
  align-items:center ;
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
  }
  div:nth-child(3) {
    display:flex ;
    justify-content:center ;
    align-items:center ;
    background-color:${({ theme }) => theme.link_bg} ;
    border-radius:50% ;
    width:40px ;
    height:40px ;
  }
  @media screen and (max-width: 1270px) {
    margin: auto;
    position: relative;
    left: 0;
  }
`;

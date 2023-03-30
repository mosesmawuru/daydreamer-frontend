import styled from "styled-components";


import bookImg from "assets/images/book.png";
import scrollImg from "assets/images/scroll.gif";

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
    
    img.nav-child1 {
      object-fit: cover;
      width: 350px;
      height: 350px;
      position: absolute;
      left: 0;
      bottom: 0;
      transform: translateX(-220px) translateY(50px);
      z-index: 999;
    }
    img.nav-child2 {
      object-fit: cover;
      width: 350px;
      height: 350px;
      position: absolute;
      right: 0;
      bottom: 0;
      transform: translateX( 220px) translateY(50px);
      z-index: 999;
    }
    @media screen and (max-width: 1020px) {
      display: none;
    }
  }
    div.scroll {
    position: relative;
    background: url(${scrollImg});
    background-size: 100% 100%;
    width: 80vw;
    height: 70vh;
    margin: auto;
    top: 5vh;
    left: -120px;
    padding: 10vh 0vw;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-end;
    display: none;
    /* border: 1px solid red; */
    @media screen and (max-width: 1020px) {
      display: flex;
      width: 88vw;
    }
    @media screen and (max-width: 768px) {
      top: 15vh;
      left: -180px;
      width: 110vw;
    }
    @media screen and (max-width: 425px) {
      width: 125vw;
      left: -140px;
      height: 430px;
      top: 15vh;
      /* padding: 100px 0 80px 0; */
    }
    @media screen and (max-width: 390px) {
      width: 130vw;
      left: -135px;
      height: 400px;
      top: 15vh;
      /* padding: 90px 0 80px 0; */
    }
    @media screen and (max-width: 375px) {
      width: 130vw;
      left: -135px;
      height: 400px;
      top: 15vh;
      /* padding: 90px 0 80px 0; */
    }
    @media screen and (max-width: 320px) {
      height: 360px;
      left: -115px;
      top: 15vh;
      padding-top: 60px;
      /* padding: 90px 0 80px 0; */
    }
    div.aboutus-title {     
      /* border :1px solid red ; */
      font-family: 'Titan One';
      font-style: normal;
      font-weight: 400;
      font-size: 48px;
      padding-bottom: 20px;
      transform: translateX(-90px);
      text-align: center;
      @media screen and (max-width: 425px) {
        font-size: 35px;
        letter-spacing: -2px;
        transform: translateX(-20px);
        text-align: center;
        margin-right: 35px;
      }
      @media screen and (max-width: 375px) {
        font-size: 35px;
        letter-spacing: -2px;
        transform: translateX(-20px);
        text-align: center;
        margin-right: 20px;
      }
      @media screen and (max-width: 320px) {
        transform: translateX(25px);
        line-height: 30px;
        text-align: center;
        margin-right: 40px;
      }
    }
    div.aboutus-body {
      /* border: 1px solid yellow; */
      width: 65%;
      overflow-y: scroll;
      display: flex;
      justify-content: space-around;
      align-items: center;
      flex-wrap: wrap;      
      /* box-shadow: 0 3px 3px 0 rgb(0 0 0 / 37%), 0 1px 11px 0 rgb(0 0 0 / 74%); */
      border-radius: 10px;
      
      transform: translateX(60px); 
      img, p {
        margin-top: 10px;
        width: 60%;
        font-family: "Pacifico";
        font-size: 20px;

        @media screen and (max-width: 425px) {
          font-size: 18px;
        }
      }
      @media screen and (max-width: 425px) {
        width: 66%;
        transform: translateX(40px); 
      }
      @media screen and (max-width: 320px) {
        width: 68%;
        transform: translateX(40px); 
      }
    }
    div.aboutus-body::-webkit-scrollbar {
      display: none;
    }
    img.nav-child3 {
      object-fit: cover;
      width: 350px;
      height: 350px;
      position: absolute;
      bottom: 0;
      right: 0;
      transform: translateX(60px);
      z-index: 999;
      @media screen and (max-width: 880px) {
        display: none;
      }
    }
    
    svg {
      position: absolute;
      bottom: 30px;
      right: 200px;
      @media screen and (max-width: 425px) {
        right: 120px;
        bottom: 30px;
      }
      @media screen and (max-width: 375px) {
        right: 110px;
      }
      @media screen and (max-width: 320px) {
        right: 90px;
      }
    }

    svg:hover {
      opacity: 1;
    }
    svg:active {
      opacity: 0.6;
    }
  }

  /* .children {
    position: absolute;
    bottom: 0%;
    border: 1px solid red;
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
      z-index: 999;
    }
    img:hover {
      transform:scale(1.3) ;
      z-index: 999;
    }
  } */
    
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
  width:300px ;
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
  div:nth-child(4) {
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
  div:nth-child(5) {
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

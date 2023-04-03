import styled from "styled-components";

export const VisionContainer = styled.div`
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
  div.scroll {
    position: relative;
    background: url("https://drive.google.com/uc?id=1sMPJk-iiVxlBtyEIhxRvWJama27awWng");
    background-size: 100% 100%;
    width: 70vw;
    height: 90vh; 
    top: 5vh;
    padding: 15vh 0 15vh 35vw;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    @media screen and (max-width: 1440px) {
      padding: 15vh 0 15vh 520px;
    }
    @media screen and (max-width: 1024px) {
      padding: 15vh 0 15vh 330px;
    }
    @media screen and (max-width: 768px) {
      width: 115vw; 
      height: 70vh;
      top: 15vh;
      margin-left: -26vw;
      padding: 10vh 0 10vh 58.6vw;
    }
    @media screen and (max-width: 425px) {
      background: #fff;
      margin-left: 5vw;
      width: 90vw;
      padding: 10vh 0 15vh 0px;
    }
    @media screen and (max-width: 320px) {
      padding: 10vh 0 10vh 0px;
    }
    div.ourvision-title {      
      font-family: 'Titan One';
      font-style: normal;
      font-weight: 400;
      font-size: 48px;
      line-height: 55px;
      padding-bottom: 20px;
      padding-right: 15px;
      @media screen and (max-width: 425px) {
        font-size: 43px;
      }
      @media screen and (max-width: 375px) {
        font-size: 40px;
      }
      @media screen and (max-width: 320px) {
        font-size: 35px;
        letter-spacing: -1px;
      }
    }
    div.ourvision-body {
      font-family: "Pacifico";
      font-weight: 500;
      font-size: 26px;
      line-height: 30px;
      width: 70%;
      overflow-y: auto;
      @media screen and (max-width: 768px) {
      }
      @media screen and (max-width: 425px) {
        font-size: 20px;
      }
      @media screen and (max-width: 375px) {
        font-size: 18px;
      }
    }
    img {
      position: absolute;
      object-fit: cover;
      width: 350px;
      height: 350px;
      bottom: 0;
      right: -100px;
      transform: translateX(140px);
      z-index: 999;
      @media screen and (max-width: 880px) {
        width: 300px;
        height: 300px;
      }

      @media screen and (max-width: 768px) {
        display: none;
      }
    }
    
    svg {
      position: absolute;
      bottom: 70px;
      @media screen and (max-width: 768px) {
        bottom: 30px;
      }
      @media screen and (max-width: 320px) {
        bottom: 40px;
      }
    }

    svg:hover {
      opacity: 1;
    }
    svg:active {
      opacity: 0.6;
    }

  }

  div.ourvision-body::-webkit-scrollbar {
    display: none;
  }

  .children {
    position: relative;
    bottom: 0%;
    width: 60vw;
    margin: auto;
    padding-left: 8vw;
    display: flex;
    justify-content: space-between;
    align-items: center;
    @media screen and (max-width: 1440px) {
      width: 75vw;
    }
    @media screen and (max-width: 1024px) {
      width: 70vw;
    }
    @media screen and (max-width: 768px) {
      width: 90vw;
    }
    @media screen and (max-width: 425px) {
      display: none;
    }
    img:nth-child(1) {
      opacity: 0;
    }
    img {
      transform: translateY(-27vh);
    }
    img:hover {
      transform:translateY(-27vh) scale(1.3) ;
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
  width:300px ;
  position: fixed;
  top:28px ;
  right:15px ;
  display: flex ;
  justify-content:space-around ;
  align-items:center ;
  div:nth-child(1) {
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
    @media screen and (max-width: 515px) {
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
    @media screen and (max-width: 515px) {
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
    @media screen and (max-width: 515px) {
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
    @media screen and (max-width: 515px) {
      display: none;
    }
  }
  @media screen and (max-width: 515px) {
    width: 80px;
    left: unset;
    right: 25px;
  }
`;

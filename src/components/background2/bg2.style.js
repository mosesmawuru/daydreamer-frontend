import styled from "styled-components";

export const Container = styled.div`
  position: absolute;
`;

export const StarsImgs = styled.div`
  position: relative;
  width: 100vw ;
  height: 100vh;
  float: right ;
  div:nth-child(1) {
    position:absolute ;
    top:44px ;
    left: 385px ;
    animation-name:StarAnimation2 ;    
    animation-duration: 3s;
    animation-delay: 0s ;
    animation-timing-function:ease-out ;
    animation-iteration-count:infinite ;
  }
  div:nth-child(2) {
    position:absolute ;
    top:-5px ;
    left: 1005px ;
    animation-name:StarAnimation2 ;    
    animation-duration: 2.7s;
    animation-delay: 0.2s ;
    animation-timing-function:ease-out ;
    animation-iteration-count:infinite ;
  }
  div:nth-child(3) {
    position:absolute ;
    top:250px ;
    right: 180px ;
    animation-name:StarAnimation2 ;    
    animation-duration: 2.9s;
    animation-delay: 0s ;
    animation-timing-function:ease-out ;
    animation-iteration-count:infinite ;
  }
  div:nth-child(4) {
    position:absolute ;
    top:490px ;
    left: 685px ;
    animation-name:StarAnimation2 ;    
    animation-duration: 2.9s;
    animation-delay: 0.1s ;
    animation-timing-function:ease-out ;
    animation-iteration-count:infinite ;
  }
  div:nth-child(5) {
    position:absolute ;
    top:440px ;
    left: 1060px ;
    animation-name:StarAnimation2 ;    
    animation-duration: 3s;
    animation-delay: 0.3s ;
    animation-timing-function:ease-out ;
    animation-iteration-count:infinite ;
  }
  div:nth-child(6) {
    position:absolute ;
    top:60px;
    right: 80px ;
    animation-name:StarAnimation2 ;    
    animation-duration: 2.7s;
    animation-delay: 0.2s ;
    animation-timing-function: ease-out;
    animation-iteration-count: infinite;
  }
  div:nth-child(7) {
    position: absolute;
    top:480px ;
    right: 30px ;
    animation-name:StarAnimation2 ;    
    animation-duration: 2.8s;
    animation-delay: 0.5s;
    animation-timing-function: ease-out;
    animation-iteration-count: infinite;
  }
`;

export const Clouds = styled.div`
transform: rotateY(180deg);
  position: absolute ;
  width: 100vw ;
  height: 100vh ;
  top: 0 ;
  left: 0 ;
  div:nth-child(1) {
    position: absolute ;
    top: 17vh ;
    left: 450px ;
    transform: scale(0.7);
    animation-name:cloudAnimation ;    
    animation-duration: 3s;
    animation-delay: 0.1s;
    animation-timing-function:ease-out ;
    animation-iteration-count:infinite ;
    transform: rotateY(180deg);
  }
  div:nth-child(2) {
    position: absolute ;
    top: 35vh ;
    left: 70px ;
    animation-name:cloudAnimation ;
    animation-duration: 2s;
    animation-delay: 0.3s;
    animation-timing-function:ease-out ;
    animation-iteration-count:infinite ;
    transform: rotateY(180deg);

    @media screen and (max-width: 425px) {
      top: 25vh;
      left: 20px;
    }
  }
  div:nth-child(3) {
    position: absolute ;
    top: 43vh ;
    left: 500px ;
    animation-name:cloudAnimation ;
    animation-duration: 3.5s;
    animation-timing-function:ease-out ;
    animation-iteration-count:infinite ;
    transform: rotateY(180deg);
  }
  div:nth-child(4) {
    opacity: ${({ theme }) => theme.rainbowVisible};
    position: absolute ;
    bottom:0 ;
    left:0 ;
    img {
      width: 100%;
      height: 100%;
    }
    animation-name: RainbowAnimation;
    animation-timing-function: ease;
    animation-fill-mode: forwards;
    animation-duration: 1s;

    @keyframes RainbowAnimation {
      0% {
        transform: rotate(-180deg);
        left: -100%;
      }
      100% {
        transform: rotate(0deg);
        left: -10%;
        bottom: -70px;
      }
    }
  }

  div:nth-child(5) {
    transition: 3s;
    opacity: ${({ theme }) => theme.hugeMoonVisible};
    position: absolute ;
    top: 60px ;
    width: 200px;
    left: 100px;
    img {
      width: 80%;
      height: 80%;
    }

    animation-name: ${({ theme }) => theme.moonAnimationName};
    animation-timing-function: ease;
    animation-duration: 2s;
    animation-fill-mode: forwards;
    @keyframes moonDownAnimation {
      0% { transform: scale(0.7) rotate(10deg) translateX(700px) translateY(-600px); }
      100% { transform: scale(0.7) rotate(10deg) translateX(0) translateY(0); }
    }
    @keyframes moonRaiseAnimation {
      0% { transform: scale(0.7) rotate(10deg); }
      100% { transform: scale(0.7) rotate(10deg) translateX(700px) translateY(-600px); }
    }
  }
  div:nth-child(7) {
    position: absolute ;
    right:0 ;
    bottom: -100px;
    transform: scaleY(0.85);
    img {
      bottom: 0;
      height: 110vh;
      width: 100vw;
      @media screen and (max-width: 1024px){
        height: 100vh;
        width: 1300px;
      }
      @media screen and (max-width: 768px){
        height: 90vh;
        transform: scale(1.3);
      }
      @media screen and (max-width: 425px){
        height: 80vh;
      }
    }
  }
  div:nth-child(6) {
    position: absolute ;
    top: 60px ;
    width: 200px;
    left: 100px;
    img {
      width: 100%;
      height: 100%;
    }

    animation-name: ${({ theme }) => theme.sunAnimationName};
    animation-timing-function: ease;
    animation-duration: 3s;
    animation-fill-mode: forwards;
    @keyframes sunDownAnimation {
      0% { transform: scale(0.7); opacity: 1; }
      100% { transform: scale(0.7) translateX(-450px) translateY(100px);opacity: 0; }
    }
    @keyframes sunRaiseAnimation {
      0% { transform: scale(0.7) translateX(-450px) translateY(100px);  }
      100% { transform: scale(0.7) translateX(0) translateY(0); }
    }
  }
`;
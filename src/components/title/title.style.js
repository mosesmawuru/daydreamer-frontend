import styled from 'styled-components'

export const TitleContainer = styled.div`
  position: absolute;
  width: 100vw;
  /* border: 1px solid red; */
  top: 100px;
  padding-left: 150px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-wrap: wrap;
  font-family: "Titan One";
  font-style: normal;
  font-weight: 400;
  font-size: 138px;
  color: #FFDB52;
  
  animation-name: titleAnimation1;
  animation-duration: 1.5s;
  animation-fill-mode: forwards;
  animation-timing-function: ease-out;
  @keyframes titleAnimation1 {
    0%   {opacity: 0; transform: translateY(200px)}
    100% { opacity: 1; transform: translateY(0px)}
  }

  @keyframes MovingAction {    
    0%   {transform: translateY(0px)}
    50%   {transform: translateY(-10px)}
    100% { transform: translateY(0px)}
  }

  div.day, div.dreamerz {
    display: flex;
    justify-content: space-around;
    align-items: center;
  }
  div.dreamerz {
    margin-left: 20px;
    @media screen and (max-width: 900px) {
      margin-left: 0;
    }
  }
  div.title {
  text-shadow: 2px 2px 4px #000000;

  animation-duration: 1.5s;
  animation-fill-mode: forwards;
  animation-timing-function: ease-out;
  animation-iteration-count: infinite;
    @keyframes titleHoverAnimation {
      40%{transform: perspective(400px) translate3d(0, 0, 150px) rotate3d(0, 1, 0, -190deg)}
      50%{transform: perspective(400px) translate3d(0, 0, 150px) rotate3d(0, 1, 0, -170deg)}
      80%{transform: perspective(400px) scale3d(0.95, 0.95, 0.95)}
      from{transform: perspective(400px) rotate3d(0, 1, 0, -360deg)}
      to{transform: perspective(400px)}
    }
  }
  @media screen and (max-width: 1300px) {
    padding-left: 50px ;
    font-size: 120px;
  }
  @media screen and (max-width: 1024px) { 
    padding-left: 0;
    justify-content: center;
  }
  @media screen and (max-width: 768px) {
    font-size: 120px;
  }
  @media screen and (max-width: 696px) {
    font-size: 100px;
  }
  @media screen and (max-width: 550px) {
    font-size: 70px;
    top: 200px;
  }
  @media screen and (max-width: 375px) {
    font-size: 63px;
    top: 200px;
  }
  @media screen and (max-width: 320px) {
    font-size: 55px;
  }
`;
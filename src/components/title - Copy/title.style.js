import styled from 'styled-components'

import letterD from 'assets/images/title/d.png';
import letterA from 'assets/images/title/a.png';
import letterY from 'assets/images/title/y.png';
import letterR from 'assets/images/title/r.png';
import letterE from 'assets/images/title/e.png';
import letterM from 'assets/images/title/m.png';
import letterZ from 'assets/images/title/z.png';

export const TitleContainer = styled.div`
  position: absolute;
  top: 150px;
  left: 150px;
  height: 111px;
  width: 100%;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  div:nth-child(1) {
    background: url(${letterD});
    background-repeat: no-repeat;
    width: 88px;
    height: 100%;
    background-size: 100% 100%;

    // animation
    
    animation: titleLetterDAction1 10s linear ;
    
    /* animation: titleLetterDAction2 1s ease-out 2s infinite ; */
  }

  @keyframes titleLetterDAction1 {
    0%  {transform: translateY(-300px);}
    3%  {transform: translateY(0px);}
    4%  {transform: translateY(0px) translateX(10px);}
    5%  {transform: translateY(1px) translateX(-10px);}
    6%  {transform: translateY(-2px) translateX(11px);}
    7%  {transform: translateY(1px) translateX(-7px);}
    8%  {transform: translateY(0px) translateX(9px);}
    9%  {transform: translateY(-1px) translateX(-4px);}
    10% {transform: translateY(1px) translateX(0px);}
    15% {transform: translateY(0px) scaleX(0.7) scaleY(1.3);}
    18% {transform: translateY(0px) scaleX(1.5) scaleY(0.8);}
    23% {transform: translateY(0px) scaleX(0.7) scaleY(1.3);}
    26% {transform: translateY(0px) scaleX(1.5) scaleY(0.8);}
    31% {transform: translateY(0px) scaleX(0.7) scaleY(1.3);}
    34% {transform: translateY(0px) scaleX(1.5) scaleY(0.8);}
    39% {transform: translateY(0px) scaleX(0.7) scaleY(1.3);}
    42% {transform: translateY(0px) scaleX(1.5) scaleY(0.8);}
    47% {transform: translateY(0px) scaleX(0.7) scaleY(1.3);}
    50% {transform: translateY(0px) scaleX(1.5) scaleY(0.8);}
    55% {transform: translateY(0px) scaleX(0.7) scaleY(1.3);}
    58% {transform: translateY(0px) scaleX(1.5) scaleY(0.8);}
    63% {transform: translateY(0px) scaleX(0.7) scaleY(1.3);}
    66% {transform: translateY(0px) scaleX(1.5) scaleY(0.8);}
    71% {transform: translateY(0px) scaleX(0.7) scaleY(1.3);}
    74% {transform: translateY(0px) scaleX(1.5) scaleY(0.8);}
    79% {transform: translateY(0px) scaleX(0.7) scaleY(1.3);}
    82% {transform: translateY(0px) scaleX(1.5) scaleY(0.8);}
    87% {transform: translateY(0px) scaleX(0.7) scaleY(1.3);}
    90% {transform: translateY(0px) scaleX(1.5) scaleY(0.8);}
    100% {transform: translateY(0px) scaleX(1) scaleY(1);}
  }
  @keyframes titleLetterDAction2 {
    0%  {transform: translateY(-80px) scaleX(1) scaleY(1);}
    30% {transform: translateY(0px) scaleX(1.2) scaleY(0.9);}
    70% {transform: translateY(0px) scaleX(1.4) scaleY(0.7); }
    100% {transform: translateY(-80px) scaleX(1) scaleY(1); }
  }

  div:nth-child(2) {
    background: url(${letterA});
    background-repeat: no-repeat;
    width: 88px;
    height: 100%;
    background-size: 100% 100%;
    opacity: 0;
    animation: titleLetterOtherAction1 0.5s ease 1.6s forwards ;
  }
  div:nth-child(3) {
    background: url(${letterY});
    background-repeat: no-repeat;
    width: 88px;
    height: 100%;
    background-size: 100% 100%;
    opacity: 0;
    animation: titleLetterOtherAction1 0.5s ease 2.5s forwards ;
  }
  div:nth-child(4) {
    background: url(${letterD});
    background-repeat: no-repeat;
    margin-left: 50px;
    width: 88px;
    height: 100%;
    background-size: 100% 100%;
    opacity: 0;
    animation: titleLetterOtherAction1 0.5s ease 3.3s forwards ;
  }
  div:nth-child(5) {
    background: url(${letterR});
    background-repeat: no-repeat;
    width: 88px;
    height: 100%;
    background-size: 100% 100%;
    opacity: 0;
    animation: titleLetterOtherAction1 0.5s ease 4.1s forwards ;
  }
  div:nth-child(6) {
    background: url(${letterE});
    background-repeat: no-repeat;
    width: 88px;
    height: 100%;
    background-size: 100% 100%;
    opacity: 0;
    animation: titleLetterOtherAction1 0.5s ease 4.9s forwards ;
  }
  div:nth-child(7) {
    background: url(${letterA});
    background-repeat: no-repeat;
    width: 88px;
    height: 100%;
    background-size: 100% 100%;
    opacity: 0;
    animation: titleLetterOtherAction1 0.5s ease 5.8s forwards ;
  }
  div:nth-child(8) {
    background: url(${letterM});
    background-repeat: no-repeat;
    width: 126px;
    height: 100%;
    background-size: 100% 100%;
    opacity: 0;
    animation: titleLetterOtherAction1 0.5s ease 6.6s forwards ;
  }
  div:nth-child(9) {
    background: url(${letterE});
    background-repeat: no-repeat;
    width: 88px;
    height: 100%;
    background-size: 100% 100%;
    opacity: 0;
    animation: titleLetterOtherAction1 0.5s ease 7.3s forwards ;
  }
  div:nth-child(10) {
    background: url(${letterR});
    background-repeat: no-repeat;
    width: 88px;
    height: 100%;
    background-size: 100% 100%;
    opacity: 0;
    animation: titleLetterOtherAction1 0.5s ease 8s forwards ;
  }
  div:nth-child(11) {
    background: url(${letterZ});
    background-repeat: no-repeat;
    width: 88px;
    height: 100%;
    background-size: 100% 100%;
    opacity: 0;
    animation: titleLetterOtherAction1 0.5s ease 8.7s forwards ;
  }

  @keyframes titleLetterOtherAction1 {
    0%  { opacity: 0; transform: translateX(-80px) scaleX(0.5) scaleY(0.5);}
    100% {opacity: 1; transform: translateX(0px) scaleX(1) scaleY(1); }
  }
`;
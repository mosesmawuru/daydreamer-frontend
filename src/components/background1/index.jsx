import React from 'react';
import Cloud from '../cloud';
import Star from '../star';
import {
  Container,
  StarsImgs,
  Clouds,
} from './bg1.style';
import rocketImg from "assets/images/rocket1.png";
import rainbowImg from "assets/images/rainbow.png";
import hugeMoon from "assets/images/hugeMoon.png";
import hugeSun from "assets/images/hugeSun.png";

const Background = () => {
  return (
    <Container>
      <StarsImgs>
        <Star />
        <Star />
        <Star />
        <Star />
        <Star />
        <Star />
        <Star />
      </StarsImgs>
      <Clouds>
        <Cloud />
        <Cloud />
        <Cloud />
        <div>
          <img src={rainbowImg} alt="rainbow" />
        </div>
        <div>
          <img src={hugeMoon} alt="Moon" />
        </div>
        <div>
          <img src={rocketImg} alt="rocket" />
        </div>
        <div>
          <img src={hugeSun} alt="Sun" />
        </div>
      </Clouds>
    </Container>
  )
}

export default Background;
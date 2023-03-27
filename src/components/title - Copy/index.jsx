import React, { useEffect } from 'react'


import {
  TitleContainer
} from './title.style'

const Title = () => {

  useEffect(() => {
    setTimeout(() => {
      // alert(323423);
      const element = document.getElementsByClassName("letterD");
      // alert(element.length);
      for (var i = 0; i < element.length; i++) {
        const delay = i * 0.3;
        element[i].style.opacity = 1;
        element[i].style.animationName = "titleLetterDAction2";
        element[i].style.animationIterationCount = "infinite";
        element[i].style.animationDuration = "1s";
        element[i].style.animationDelay = `${delay}s`;
        element[i].style.animationFillMode = "ease-out";
      }
    }, 10500);
  }, []);

  return (
    <TitleContainer>
      <div className='letterD'></div>
      <div></div>
      <div></div>
      <div className='letterD'></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
    </TitleContainer>
  )
}

export default Title;
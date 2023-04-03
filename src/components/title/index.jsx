import React, { useContext, useEffect } from 'react'
import { MouseContext } from "../../contexts/mouse-context";

import {
  TitleContainer
} from './title.style'


const Title = () => {

  const { cursorChangeHandler } = useContext(MouseContext);

  useEffect(() => {

    setTimeout(() => {
      const element = document.getElementsByClassName("container")[0];
      element.style.animationName = "MovingAction";
      element.style.animationIterationCount = "infinite";
      element.style.animationDuration = "3s";
      element.style.animationTimingFunction = "ease-out";
    }, 1700);
  }, [])

  const addAnimationToLetter = (e) => {
    cursorChangeHandler("thumbed");
    const element = e.target;
    element.style.animationName = "titleHoverAnimation";
  }
  const removeAnimationFromLetter = (e) => {
    cursorChangeHandler("");
    const element = e.target;
    setTimeout(() => {
      element.style.animationName = "";
    }, 1000);
  }

  return (
    <TitleContainer className='container'>
      <div className='day'>
        <div className='title' onMouseEnter={addAnimationToLetter} onMouseLeave={removeAnimationFromLetter}>D</div>
        <div className='title' onMouseEnter={addAnimationToLetter} onMouseLeave={removeAnimationFromLetter}>a</div>
        <div className='title' onMouseEnter={addAnimationToLetter} onMouseLeave={removeAnimationFromLetter}>y</div>
      </div>
      <div className="dreamerz">
        <div className='title' onMouseEnter={addAnimationToLetter} onMouseLeave={removeAnimationFromLetter}>D</div>
        <div className='title' onMouseEnter={addAnimationToLetter} onMouseLeave={removeAnimationFromLetter}>r</div>
        <div className='title' onMouseEnter={addAnimationToLetter} onMouseLeave={removeAnimationFromLetter}>e</div>
        <div className='title' onMouseEnter={addAnimationToLetter} onMouseLeave={removeAnimationFromLetter}>a</div>
        <div className='title' onMouseEnter={addAnimationToLetter} onMouseLeave={removeAnimationFromLetter}>m</div>
        <div className='title' onMouseEnter={addAnimationToLetter} onMouseLeave={removeAnimationFromLetter}>e</div>
        <div className='title' onMouseEnter={addAnimationToLetter} onMouseLeave={removeAnimationFromLetter}>r</div>
        <div className='title' onMouseEnter={addAnimationToLetter} onMouseLeave={removeAnimationFromLetter}>z</div>
      </div>
    </TitleContainer>
  )
}

export default Title;
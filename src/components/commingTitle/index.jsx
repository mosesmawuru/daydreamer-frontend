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
    <TitleContainer>
      <div className='day'>
        <div className='title' onMouseEnter={addAnimationToLetter} onMouseLeave={removeAnimationFromLetter}>C</div>
        <div className='title' onMouseEnter={addAnimationToLetter} onMouseLeave={removeAnimationFromLetter}>o</div>
        <div className='title' onMouseEnter={addAnimationToLetter} onMouseLeave={removeAnimationFromLetter}>m</div>
        <div className='title' onMouseEnter={addAnimationToLetter} onMouseLeave={removeAnimationFromLetter}></div>
        <div className='title' onMouseEnter={addAnimationToLetter} onMouseLeave={removeAnimationFromLetter}>i</div>
        <div className='title' onMouseEnter={addAnimationToLetter} onMouseLeave={removeAnimationFromLetter}>n</div>
        <div className='title' onMouseEnter={addAnimationToLetter} onMouseLeave={removeAnimationFromLetter}>g</div>
      </div>
      <div className="dreamerz">
        <div className='title' onMouseEnter={addAnimationToLetter} onMouseLeave={removeAnimationFromLetter}>S</div>
        <div className='title' onMouseEnter={addAnimationToLetter} onMouseLeave={removeAnimationFromLetter}>o</div>
        <div className='title' onMouseEnter={addAnimationToLetter} onMouseLeave={removeAnimationFromLetter}>o</div>
        <div className='title' onMouseEnter={addAnimationToLetter} onMouseLeave={removeAnimationFromLetter}>n</div>
      </div>
    </TitleContainer>
  )
}

export default Title;
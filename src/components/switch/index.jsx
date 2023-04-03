import React, { useContext } from 'react'
import { BsFillSunFill, BsMoonFill } from 'react-icons/bs';
import { MouseContext } from 'contexts/mouse-context';

import {
  SwitchContainer,
  SwitchRound
} from './switch.style'

const Switch = (props) => {

  const { cursorType, cursorChangeHandler } = useContext(MouseContext);

  const onToggleTheme = () => {
    props.onThemeClick();
    console.log(cursorType);
  }

  return (
    <SwitchContainer onClick={onToggleTheme} onMouseEnter={() => cursorChangeHandler("hovered")} onMouseLeave={() => cursorChangeHandler("")} onMouseDown={() => cursorChangeHandler("clicked")} onMouseUp={() => cursorChangeHandler("hovered")} className={props.className} >
      <SwitchRound onClick={onToggleTheme}>
        <BsMoonFill style={{ width: "70%", height: '70%', color: '#FFF' }} />
        <BsFillSunFill style={{ width: "80%", height: '80%', color: '#FFF' }} />
      </SwitchRound>
    </SwitchContainer>
  )
}

export default Switch;
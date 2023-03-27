import React, { useContext } from "react";
import styled from "styled-components";
import useMousePosition from "../../hooks/useMousePosition.js";
import { MouseContext } from "../../contexts/mouse-context.js";

import cursor1 from 'assets/images/cursor1.png';
import cursor2 from 'assets/images/hoverC.png';
import clickC from 'assets/images/clickC.png';
import Thumb from 'assets/images/Thumb.png';

const CursorContainer = styled.div`
  transition: all 0.05s !important;
  div.ring {
    position: fixed;
    top: 0;
    left: 0;
    width: 40px;
    height: 40px;
    will-change: width, height, transform, border;
    z-index: 999999999999999999999;
    pointer-events: none;

    background: url(${cursor1});
    background-size: 100% 100%;

    transition: all 0s !important;

  }

  div.ring.hovered {
    position: fixed;
    width: 40px;
    height: 40px;
    transform: translate(-45%, -8%);
    will-change: width, height, transform, border;
    z-index: 999999999999999999999;
    pointer-events: none;

    background: url(${cursor2});
    background-size: 100% 100%;
  }
  div.ring.clicked {
    position: fixed;
    width: 40px;
    height: 40px;
    transform: translate(-45%, -8%);
    will-change: width, height, transform, border;
    z-index: 999999999999999999999;
    pointer-events: none;

    background: url(${clickC});
    background-size: 100% 100%;
  }
  div.ring.thumbed {
    position: fixed;
    width: 40px;
    height: 40px;
    will-change: width, height, transform, border;
    z-index: 999999999999999999999;
    pointer-events: none;

    background: url(${Thumb});
    background-size: 100% 100%;
  }
`;

const DotRing = () => {
  const { cursorType } = useContext(MouseContext);
  const { x, y } = useMousePosition();
  return (
    <CursorContainer>
      <div
        style={{ left: `${x}px`, top: `${y}px` }}
        className={"ring " + cursorType}
      >
      </div>
    </CursorContainer>
  );
};

export default DotRing;
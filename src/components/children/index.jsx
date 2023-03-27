import React, { useContext } from 'react'
import { useNavigate } from "react-router-dom"

import styled from 'styled-components';

import { MouseContext } from "../../contexts/mouse-context";

import aboutus from "assets/images/graphic/55.gif";
import ourvision from "assets/images/graphic/Broom peasant.gif";
import artflexing from "assets/images/graphic/bitcoing cowboy.gif";
import faq from "assets/images/graphic/Without hover Super hero.gif";
import mint from "assets/images/graphic/88.gif";
import comming from "assets/images/graphic/Knight Without hover.gif";

import aboutus1 from "assets/images/graphic/77.gif";
import ourvision1 from "assets/images/graphic/66.gif";
import artflexing1 from "assets/images/graphic/44.gif";
import faq1 from "assets/images/graphic/on hover.gif";
import mint1 from "assets/images/graphic/11.gif";
import comming1 from "assets/images/graphic/Knight on hover.gif";

const ChildrenContainer = styled.div`
  
  div.children {
    position:absolute ;
    display:flex ;
    justify-content:center ;
    align-items: flex-end;
    bottom: 10px ;
    /* gap: 5px; */
    ${props => props.isPosLeftChildren ? "left" : "right"} : 80px;
    div {
      position: relative;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
        transition: all 0s !important;
        img:nth-child(1) {
          position: absolute; 
          object-fit: cover;
          overflow: visible;
          transition: all 0s !important;
          width: 270px;
          height: 400px;
          bottom: -25px;
          right: -28px;
          transform: scale(0.8);
          z-index: 998;
          visibility: hidden;
        }
        img:nth-child(2) {
        object-fit: cover;
        overflow: visible;
        transition: all 0s !important;
        width: 200px;
        height: 250px;
        z-index: 999;
      }
    }
    img:hover {
      z-index: 999;
    }
    img:active {
      opacity:0.9 ;
    }
    @media screen and (max-width: 1270px){
    right: 0px ;
    width: 100%;
    left: 0;
    img {
      margin-right: -3vw ;
      transform: scale(0.8) translateY(50px);
    }
    }
  }
    
    // bulb img
    #lightbulb {
      position: fixed;
    }
`;

const Children = (props) => {

  // const [hoverType, setType] = useState("");
  const navigate = useNavigate();

  const { cursorChangeHandler } = useContext(MouseContext);


  const onChildClick = (e, FuncType) => {
    switch (FuncType) {
      case "aboutus":
        navigate("/aboutus");
        break;
      case "ourvision":
        navigate("/dreamerz");
        break;
      case "mint":
        navigate("/mint");
        break;
      case "faq":
        navigate("/faq");
        break;
      case "comming":
        navigate("/comming");
        break;
      case "artflexing":
        navigate("/ordinal");
        break;
      default:
        navigate("/");
    }
  }

  const midFunction = (FuncType, testNum) => {
    if (testNum == 2) {
      switch (FuncType) {
        case "aboutus":
          return aboutus;
        case "ourvision":
          return ourvision;
        case "mint":
          return mint
        case "faq":
          return faq;
        case "comming":
          return comming
        case "artflexing":
          return artflexing;
        default:
          return "";
      }
    }
    if (testNum == 1) {
      switch (FuncType) {
        case "aboutus":
          return aboutus1;
        case "ourvision":
          return ourvision1;
        case "mint":
          return mint1;
        case "faq":
          return faq1;
        case "comming":
          return comming1;
        case "artflexing":
          return artflexing1;
        default:
          return "";
      }
    }
  }
  const onChildOver = (e, FuncType) => {
    cursorChangeHandler("hovered")
    document.getElementsByClassName(FuncType)[0].getElementsByTagName("img")[1].style.visibility = "hidden";
    // document.getElementsByClassName(FuncType)[0].getElementsByTagName("img")[1].style.transform = "scale(0.6) translateX(-50px) translateY(-55px)";

    document.getElementsByClassName(FuncType)[0].getElementsByTagName("img")[0].style.visibility = "visible";
    props.setMask(true);
  }
  const onChildLeave = (e, FuncType) => {
    cursorChangeHandler("")
    document.getElementsByClassName(FuncType)[0].getElementsByTagName("img")[1].style.visibility = "visible";
    // document.getElementsByClassName(FuncType)[0].getElementsByTagName("img")[1].style.transform = "scale(1) translateX(0px) translateY(0px)";
    document.getElementsByClassName(FuncType)[0].getElementsByTagName("img")[0].style.visibility = "hidden";
    props.setMask(false);
  }

  return (
    <ChildrenContainer isPosLeftChildren={props.isPosLeftChildren}>

      {/* <div className='link-children'>
        <div className="mint"></div>
        <div className="aboutus"></div>
        <div className="ourvision"></div>
        <div className="faq"></div>
        <div className="comming"></div>
        <div className="artflexing"></div>
      </div> */}
      <div className='children'>
        <div className="aboutus" onClick={(e) => onChildClick(e, "aboutus")} onMouseOver={(e) => onChildOver(e, "aboutus")} onMouseOut={(e) => onChildLeave(e, "aboutus")} onMouseDown={() => cursorChangeHandler("clicked")} onMouseUp={() => cursorChangeHandler("")}>
          <img src={aboutus1} alt="child2" />
          <img src={aboutus} alt="child2" />
        </div>
        <div className="ourvision" onClick={(e) => onChildClick(e, "ourvision")} onMouseOver={(e) => onChildOver(e, "ourvision")} onMouseOut={(e) => onChildLeave(e, "ourvision")} onMouseDown={() => cursorChangeHandler("clicked")} onMouseUp={() => cursorChangeHandler("")}>
          <img src={ourvision1} alt="child3" />
          <img src={ourvision} alt="child3" />
        </div>
        <div className="artflexing" onClick={(e) => onChildClick(e, "artflexing")} onMouseOver={(e) => onChildOver(e, "artflexing")} onMouseOut={(e) => onChildLeave(e, "artflexing")} onMouseDown={() => cursorChangeHandler("clicked")} onMouseUp={() => cursorChangeHandler("")}>
          <img src={artflexing1} alt="child6" />
          <img src={artflexing} alt="child6" />
        </div>
        <div className="comming" onClick={(e) => onChildClick(e, "comming")} onMouseOver={(e) => onChildOver(e, "comming")} onMouseOut={(e) => onChildLeave(e, "comming")} onMouseDown={() => cursorChangeHandler("clicked")} onMouseUp={() => cursorChangeHandler("")}>
          <img src={comming1} alt="child5" />
          <img src={comming} alt="child5" />
        </div>
        <div className="mint" onClick={(e) => onChildClick(e, "mint")} onMouseOver={(e) => onChildOver(e, "mint")} onMouseOut={(e) => onChildLeave(e, "mint")} onMouseDown={() => cursorChangeHandler("clicked")} onMouseUp={() => cursorChangeHandler("hovered")}>
          <img src={mint1} alt="child1" />
          <img src={mint} alt="child1" />
        </div>
        <div className="faq" onClick={(e) => onChildClick(e, "faq")} onMouseOver={(e) => onChildOver(e, "faq")} onMouseOut={(e) => onChildLeave(e, "faq")} onMouseDown={() => cursorChangeHandler("clicked")} onMouseUp={() => cursorChangeHandler("hovered")}>
          <img src={faq1} alt="child4" />
          <img src={faq} alt="child4" />
        </div>
      </div>
    </ChildrenContainer>
  )
}

export default Children;
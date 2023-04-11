import React, { useContext } from 'react'
import { useNavigate } from "react-router-dom"

import styled from 'styled-components';

import { MouseContext } from "../../contexts/mouse-context";
const ChildrenContainer = styled.div`
  
  div.children {
    position:absolute ;
    display:flex ;
    justify-content:center ;
    align-items: flex-end;
    bottom: 10px ;
    ${props => props.isPosLeftChildren ? "left" : "right"} : 80px;
    div {
      position: relative;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      width: 200px;
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
          display: none;
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
`;

const Children = (props) => {

  const navigate = useNavigate();

  const { cursorChangeHandler } = useContext(MouseContext);

  const aboutus = "https://drive.google.com/uc?id=18zUhpSCil1BpdDKivrWz7C9HmXelILH5";
  const ourvision = "https://drive.google.com/uc?id=1JumHc6rZ6bX9IguV7QRkzDWJuu--ZI_E";
  const artflexing = "https://drive.google.com/uc?id=1k-6TyjqmTSiXBw7swcqO0tTwdqogzXFP";
  const faq = "https://drive.google.com/uc?id=1TsreJFMcF3x4gTT9VQEmHHxjkqnN-XGf";
  const mint = "https://drive.google.com/uc?id=1HpkuVajgqfV0cXmQHyhUiad8qaIxBewX";
  const comming = "https://drive.google.com/uc?id=1-ftWTyIcXU4iEy4MbOtCUloH5_CZTYED";

  const aboutus1 = "https://drive.google.com/uc?id=1nKB8Jx2hCuNg-Nu5UqI5lrhX6OZV4pE6";
  const ourvision1 = "https://drive.google.com/uc?id=1KsFnwsJFYwWjtHF_69t3gPuK43dH4TBu";
  const artflexing1 = "https://drive.google.com/uc?id=19_sxTZTqfQM0LTD1ArVuGGIFr7gGaNma";
  const faq1 = "https://drive.google.com/uc?id=1ip8Xl6JOWpYUVZSJIOUV22TPFEl038Tm";
  const mint1 = "https://drive.google.com/uc?id=1RpH120XrGBz6vfiQDDRy8vG6WmWo8BQH";
  const comming1 = "https://drive.google.com/uc?id=1ycErhQMbinisI1UTAJqYKnUlYrR877Vw";

  const onChildClick = (e, FuncType) => {
    switch (FuncType) {
      case "aboutus":
        navigate("/about-us");
        break;
      case "ourvision":
        navigate("/day-dreamerz");
        break;
      case "mint":
        navigate("/mint");
        break;
      case "faq":
        navigate("/faq");
        break;
      case "comming":
        navigate("/D-connect");
        break;
      case "artflexing":
        navigate("/ordinal-dreamerz");
        break;
      default:
        navigate("/");
    }
  }

  const onChildOver = (e, FuncType) => {
    cursorChangeHandler("hovered")
    document.getElementsByClassName(FuncType)[0].getElementsByTagName("img")[1].style.display = "none";
    document.getElementsByClassName(FuncType)[0].getElementsByTagName("img")[0].style.display = "block";
    props.setMask(true);
  }
  const onChildLeave = (e, FuncType) => {
    cursorChangeHandler("")
    document.getElementsByClassName(FuncType)[0].getElementsByTagName("img")[1].style.display = "block";
    document.getElementsByClassName(FuncType)[0].getElementsByTagName("img")[0].style.display = "none";
    props.setMask(false);
  }

  return (
    <ChildrenContainer isPosLeftChildren={props.isPosLeftChildren}>
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
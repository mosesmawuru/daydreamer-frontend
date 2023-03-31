import React, { useContext } from 'react';
import { BsPlayFill, BsPauseFill } from 'react-icons/bs';

import Sound from 'react-sound';
import styled from 'styled-components';

import audio_path from 'assets/audio/bgmusic.mp3';

//import image
import radio from 'assets/images/music/radio.png';
import playing from 'assets/images/music/playing.gif';
import paused from 'assets/images/music/paused.png';


import { MouseContext } from 'contexts/mouse-context';

const SoundContainer = styled.div`
  /* border: 1px solid red; */
  position: fixed;
  bottom: 10px;
  left: 10px;
  z-index: 999999999;
  width: 200px;
  height: 100px;
  background-color: #fff;
  box-shadow: 0 3px 3px 0 rgb(0 0 0 / 37%), 0 1px 11px 0 rgb(0 0 0 / 74%);
  border-radius: 10px;
  div.music-container {
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    div:nth-child(1) {
      /* border: 1px solid green; */
      width: 50%;
      height: 70%;
      @media screen and (max-width: 768px) {
        display: none;
      }
    }
    div:nth-child(2) {
      /* border: 1px solid green; */
      width: 40%;
      height: 70%;
      padding-left: 5px;

      @media screen and (max-width: 768px) {        
        img {
          transform: translateX(-10px);
        }
      }
      @media screen and (max-width: 375px) {        
        img {
          transform: translateX(-2px);
        }
      }
      @media screen and (max-width: 425px) {
        transform: translateX(-2px);
      }
    }
    div.btn-play {
      position: absolute;
      right: -20px;
      top: -20px;
      background-color: #fff;
      border-radius: 50px;      
      box-shadow: 0 3px 3px 0 rgb(0 0 0 / 37%), 0 1px 11px 0 rgb(0 0 0 / 74%);
      display: flex;
      justify-content: center;
      align-items: center;
      width: 40px;
      height: 40px;
      padding-left: 2px;
      font-size: 40px;
      @media screen and (max-width: 768px) {
        top: 0px;
      }
    }
    img{
      width: 100%;
      height: 100%;
    }
  }
  @media screen and (max-width: 768px) {
    top: 28px;
    left: unset;
    right: 348px;
    width: 70px;
    height: 40px;
    z-index: 9999;
  }
  @media screen and (max-width: 515px) {
    right: 145px;
  }
  @media screen and (max-width: 375px) {
    /* width: 60px; */
  }
`;

const SoundComponent = ({ isPlaying, soundToggler }) => {



  // useEffect(() => {
  //   document.body.addEventListener("click", playAudio);
  // }, [])

  // const playAudio = async () => {
  //   await soundToggler();
  //   document.body.removeEventListener("click", playAudio);
  // }

  const { cursorChangeHandler } = useContext(MouseContext);

  const onMusicHandler = () => {
    soundToggler();
  }
  const onSoundLoading = (e) => {
    // console.log("onSoundLoading4444444", e)
  }
  const onSoundLoad = (e) => {
    // console.log("onSoundLoad33333333", e)
  }
  const onSoundPlaying = () => {
    // console.log("onSoundPlaying5555555")
    // window.localStorage.setItem("soundPos", e.position);
    // setPos(Number(e.position));
  }
  const onSoundBufferChange = (e) => {
    // console.log("onSoundBufferChange6666666666", e)
    // setPos(e.position);
  }

  return (
    <SoundContainer>
      <div className='music-container'>
        <div><img src={radio} alt="radio" /></div>
        <div><img src={isPlaying ? playing : paused} alt="123" /></div>
        <div className='btn-play' onClick={() => onMusicHandler()} onMouseEnter={() => cursorChangeHandler("hovered")} onMouseLeave={() => cursorChangeHandler("")} onMouseDown={() => cursorChangeHandler("clicked")} onMouseUp={() => cursorChangeHandler("hovered")}>{isPlaying ? <BsPauseFill /> : <BsPlayFill />}</div>
      </div>
      <Sound
        url={audio_path}
        // playStatus={Sound.status.PLAYING}
        playStatus={isPlaying ? Sound.status.PLAYING : Sound.status.PAUSED}
        // playFromPosition={0}
        // position={pos}
        loop={true}
        autoLoad={true}
        onPlaying={onSoundPlaying}
        onLoading={onSoundLoading}
        onLoad={onSoundLoad}
        onBufferChange={onSoundBufferChange}
      />
    </SoundContainer>
  )
}
export default SoundComponent;
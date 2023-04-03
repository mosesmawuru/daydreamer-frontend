import React from "react";
import HTMLFlipBook from "react-pageflip";
import styled from "styled-components";
import FlipBoard1 from "assets/images/paper1.png";
import FlipBoard2 from "assets/images/paper2.png";
import nft1 from "assets/images/nfts/1.png";
import nft2 from "assets/images/nfts/2.png";
import nft3 from "assets/images/nfts/3.png";
import nft4 from "assets/images/nfts/4.png";
import nft5 from "assets/images/nfts/5.png";
import nft6 from "assets/images/nfts/6.png";
import nft7 from "assets/images/nfts/7.png";
import nft8 from "assets/images/nfts/8.png";
import nft9 from "assets/images/nfts/9.png";
import nft10 from "assets/images/nfts/10.png";
import nft11 from "assets/images/nfts/11.png";
import nft12 from "assets/images/nfts/12.png";
import nft13 from "assets/images/nfts/13.png";
import nft14 from "assets/images/nfts/14.png";
import nft15 from "assets/images/nfts/15.png";
import nft16 from "assets/images/nfts/16.png";
import nft17 from "assets/images/nfts/17.png";
import nft18 from "assets/images/nfts/18.png";
import nft19 from "assets/images/nfts/19.png";
import nft20 from "assets/images/nfts/20.png";
import nft21 from "assets/images/nfts/21.png";
import nft22 from "assets/images/nfts/22.png";
import nft23 from "assets/images/nfts/23.png";
import nft24 from "assets/images/nfts/24.png";

const FlipBookContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  .demoPage {
    transition: all 0s ease !important; 
    div.text-container {
      width: 100%;
      height: 100%;
      padding-left: 40px;
      padding-right: 40px;
      display: flex;
      align-items: center;
      justify-content: center;
      flex-direction: column;
    }
    div.text-container > div:nth-child(1) {
      font-family: 'Titan One';
      font-style: normal;
      font-weight: 400;
      font-size: 45px;
      letter-spacing: -2px;
      padding-bottom: 20px;
    }
    div.text-container > div:nth-child(2) {
      font-family: 'Pacifico';
      font-size: 22px;
      display: flex;
      flex-wrap: wrap;
      justify-content: space-between;
      align-items: center;
      & > div {
        width: 48%;
        margin-bottom: 13px;
        text-align: center;
      }
      img {
        width: 100%;
        border-radius: 10px;
        opacity: 0.8;
      }
      img:hover {
        transform: scale(0.95);
        opacity: 1;
      }
    }
  }

  .left {
    background: url(${FlipBoard2});
    background-repeat: no-repeat;
    border-radius: 5px 0 0 5px;
    box-shadow: 1px 10px 10px rgba(0, 0, 0, 0.253);
  }
  
  .right {
    background: url(${FlipBoard1});
    background-repeat: no-repeat;
    border-radius: 0 5px 5px 0;
    box-shadow: -1px 10px 10px rgba(0, 0, 0, 0.253);
  }
`;

const PageFlip = () => {

  const ImgClickHandler = (e) => {
    console.log(1231231231231231, e);
  }

  return (
    <FlipBookContainer>
      <HTMLFlipBook
        width={410}
        height={690}
        style={{ transition: "all 0s ease" }}
        maxShadowOpacity={0.2}
        drawShadow={false}
        showCover={false}
      >
        <div className="demoPage left">
          <div className="text-container">
            <div>Day Dreamerz</div>
            <div>
              <p>Day Dreamerz is a collection that celebrates the aspirations and dreams of every child. <br />
                Our project is founded on the fundamental belief that each child has a unique dream that they strive to achieve when they grow up. <br />
                We are dedicated to preserving the magic of dreaming and creating a platform that fosters connections and shared passions among dreamers.
              </p>
            </div>
          </div>
        </div>
        <div className="demoPage right">
          <div className="text-container">
            <div></div>
            <div>
              Our D-Connect platform is the embodiment of that belief, where we bring together individuals from all walks of life to share their unique talents, skills, and knowledge, and provide support and guidance to those seeking to turn their dreams into reality. <br />
              We are dedicated to creating a platform that not only celebrates the beauty of dreaming but also provides practical tools and resources to help dreamers achieve their goals, no matter how big or small.
            </div>
          </div>
        </div>
        {/* ---------------------- */}
        <div className="demoPage left">
          <div className="text-container">
            <div></div>
            <div>
              <div><img src={nft1} alt="nft1" onClick={ImgClickHandler} /><div>Adventurer</div></div>
              <div><img src={nft2} alt="nft1" /><div>Artist</div></div>
              <div><img src={nft3} alt="nft1" /><div>Astronaut</div></div>
              <div><img src={nft4} alt="nft1" /><div>Chef original</div></div>
            </div>
          </div>
        </div>
        <div className="demoPage right">
          <div className="text-container">
            <div></div>
            <div>
              <div><img src={nft5} alt="nft1" /><div>Dancer</div></div>
              <div><img src={nft6} alt="nft1" /><div>Basketball player</div></div>
              <div><img src={nft7} alt="nft1" /><div>Detective</div></div>
              <div><img src={nft8} alt="nft1" /><div>Diver original</div></div>
            </div>
          </div>
        </div>
        <div className="demoPage left">
          <div className="text-container">
            <div></div>
            <div>
              <div><img src={nft9} alt="nft1" /><div>Flight Attendant</div></div>
              <div><img src={nft10} alt="nft1" /><div>Diver with</div></div>
              <div><img src={nft11} alt="nft1" /><div>Doctor</div></div>
              <div><img src={nft12} alt="nft1" /><div>Magician otiginal</div></div>
            </div>
          </div>
        </div>
        <div className="demoPage right">
          <div className="text-container">
            <div></div>
            <div>
              <div><img src={nft13} alt="nft1" /><div>Magician</div></div>
              <div><img src={nft14} alt="nft1" /><div>engineer</div></div>
              <div><img src={nft15} alt="nft1" /><div>Fire Fighter</div></div>
              <div><img src={nft16} alt="nft1" /><div>Makeup Artist</div></div>
            </div>
          </div>
        </div>
        <div className="demoPage left">
          <div className="text-container">
            <div></div>
            <div>
              <div><img src={nft17} alt="nft1" /><div>News Reporter</div></div>
              <div><img src={nft18} alt="nft1" /><div>Guitarist</div></div>
              <div><img src={nft19} alt="nft1" /><div>Pilot</div></div>
              <div><img src={nft20} alt="nft1" /><div>Sailor</div></div>
            </div>
          </div>
        </div>
        <div className="demoPage right">
          <div className="text-container">
            <div></div>
            <div>
              <div><img src={nft21} alt="nft1" /><div>Singer</div></div>
              <div><img src={nft22} alt="nft1" /><div>Race Driver </div></div>
              <div><img src={nft23} alt="nft1" /><div>Scientists</div></div>
              <div><img src={nft24} alt="nft1" /><div>Singer</div></div>
            </div>
          </div>
          <span style={{ position: 'absolute', bottom: "50px", right: '50px', fontFamily: 'Titan One', fontSize: '30px' }}>To be continued...</span>
        </div>
      </HTMLFlipBook>
    </FlipBookContainer>
  )
}
export default PageFlip;
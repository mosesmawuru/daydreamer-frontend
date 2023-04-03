import React from "react";
import HTMLFlipBook from "react-pageflip";
import styled from "styled-components";
import FlipBoard1 from "assets/images/paper1.png";
import FlipBoard2 from "assets/images/paper2.png";
import nft1 from "assets/images/nfts/ordinal/1.png";
import nft2 from "assets/images/nfts/ordinal/2.png";
import nft3 from "assets/images/nfts/ordinal/3.png";
import nft4 from "assets/images/nfts/ordinal/4.png";
import nft5 from "assets/images/nfts/ordinal/5.png";
import nft6 from "assets/images/nfts/ordinal/6.png";
import nft7 from "assets/images/nfts/ordinal/7.png";
import nft8 from "assets/images/nfts/ordinal/8.png";

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
    div.text-container div:nth-child(1) {
      font-family: 'Titan One';
      font-style: normal;
      font-weight: 400;
      font-size: 45px;
      text-align: center;
      letter-spacing: 2px;
      line-height: 35px;
      padding-bottom: 20px;
    }
    div.text-container div:nth-child(2) {
      font-family: 'Pacifico';
      font-size: 20px;
      display: flex;
      flex-wrap: wrap;
      justify-content: space-between;
      align-items: center;
      img {
        width: 48%;
        margin-bottom: 13px;
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
            <div>Ordinal Dreamerz</div>
            <div>
              <p>Ordinal Dreamerz is a unique collection that features charming pixelated dreamerz, designed as a token of appreciation for our Day Dreamerz holders. Our main goal is to add value to the holders' experience and protect their aspirations. All Ordinal Dreamerz holders will enjoy the same benefits and privileges in the Day Dreamerz ecosystem.<br />

                The minting of Ordinal Dreamerz will commence after the launch of our genesis collection "Day Dreamerz". We will announce the date and time of the snapshot well in advance.<br />
                Every Day Dreamerz holder will receive a free mint of one Ordinal Dreamerz.<br />

                1x Day Dreamerz = 1x Ordinal Dreamerz Free Mint.<br />
              </p>
            </div>
          </div>
        </div>
        <div className="demoPage right">
          <div className="text-container">
            <div></div>
            <div>
              <p> While the Ordinal is still in its early stages, we have taken a community-oriented approach to the minting process. The minting process for Ordinal Dreamerz will take place on the ETH Chain and holders can claim their Ordinal NFT by burning their ETH NFT. Once the burning process is complete, the Ordinal Dreamerz NFT will be airdropped to holder. This streamlined process will make it easy for our community while holding their Day Dreamerz NFTs to obtaining their Ordinal Dreamerz NFTs.<br />
                We firmly believe that Ordinal Dreamerz will be an exciting addition to our ecosystem, and we are thrilled to bring this opportunity to our community.<br />

                For more detailed information on how Ordinal works, please visit our Discord server.</p>
            </div>
          </div>
        </div>
        {/* ---------------------- */}
        <div className="demoPage left">
          <div className="text-container">
            <div></div>
            <div>
              <img src={nft1} alt="nft1" />
              <img src={nft2} alt="nft1" />
              <img src={nft3} alt="nft1" />
              <img src={nft4} alt="nft1" />
            </div>
          </div>
        </div>
        <div className="demoPage right">
          <div className="text-container">
            <div></div>
            <div>
              <img src={nft5} alt="nft1" />
              <img src={nft6} alt="nft1" />
              <img src={nft7} alt="nft1" />
              <img src={nft8} alt="nft1" />
            </div>
          </div>
          <span style={{ position: 'absolute', bottom: "50px", right: '50px', fontFamily: 'Titan One', fontSize: '30px' }}>To be continued...</span>
        </div>
      </HTMLFlipBook>
    </FlipBookContainer>
  )
}
export default PageFlip;
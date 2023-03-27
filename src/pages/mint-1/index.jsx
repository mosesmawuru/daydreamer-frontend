import React, { useState, useContext, useEffect } from 'react'
import { FaTwitter, FaDiscord } from 'react-icons/fa';
import { toast } from "react-toastify";
import axios from 'axios';

import {
  LandingContainer,
  DarkMask,
  LinkButtons,
  WLChecker
} from './mint.style'

import img from "assets/images/graphic/55555.gif";
import whiteBoard from "assets/images/graphic/wb.png";
import guitar from "assets/images/graphic/Right Side of whitelist checker.gif";
import computer from "assets/images/graphic/Left Side of Whitelist checker.gif";
// import btn1 from "assets/images/btn1.png";
// import btn2 from "assets/images/btn2.png";

// import ChildrenComponent from '../../components/children';
// import MintBoard from '../../components/mintBoard';
import BgComponent from '../../components/background2';

import QuickMenu from '../../components/quickMenu';
import Switch from '../../components/switch';
import Logo from '../../components/logo';

import { contractABI } from "../../contracts/MintABI";
import { contractAddress } from "../../contracts/Address";
import { useEthContext } from "../../contexts/EthereumContext";

import { MouseContext } from 'contexts/mouse-context';


const Mint = (props) => {

  const [isMask, setMask] = useState(false);
  const [connectState, setConnectState] = useState("Connect Wallet");
  const [isWL, setIsWL] = useState();
  const [checked, setChecked] = useState(false);


  const { web3, currentAcc, provider } = useEthContext();

  const { cursorChangeHandler } = useContext(MouseContext);

  useEffect(() => {
    if (currentAcc) {
      setConnectState(`${currentAcc.substring(0, 5)}...${currentAcc.substring(
        currentAcc.length - 3,
        currentAcc.length
      )}`);
      setChecked(true);
    }
    else
      setConnectState("Connect Wallet")
  }, [currentAcc])

  const WLchecker = async () => {
    // const contract = new web3.eth.Contract(contractABI, contractAddress);

    const proof = await axios
      .get(`https://daydream-backend.vercel.app/get/${currentAcc}`)
      .then((res) => {
        return res.data.proof;
      });
    console.log(1231231, proof);
    // const isWhitelisted = await contract.methods
    //   .isWhitelist(proof)
    //   .call({ from: currentAcc });

    setChecked(true);
    setIsWL(proof.length !== 0);
  };

  const handleConnectWallet = async () => {
    if (provider) {
      if (Number(window.ethereum.chainId) !== 1) {
        toast.error("Please connect to Ethereum Mainnet", {
          theme: "dark",
        });
      } else {
        if (currentAcc) await provider.on("disconnect", (code, reason) => {
          console.log(code, reason);
        });
        else {
          await provider.request({ method: `eth_requestAccounts` });
          WLchecker();
        }
      }
    } else {
      toast.error("Please install Metamask wallet in this browser", {
        theme: "dark",
      });
    }
  };

  // console.log(123123123, props);
  return (
    <LandingContainer>
      <BgComponent />
      <LinkButtons>
        <Switch className="switch" onThemeClick={props.onThemeClick} />
        <div>
          <a href="https://twitter.com/DayDreamerzNFTs" rel="noreferrer" target={'_blank'} style={{ width: "60%", height: '60%', color: '#FFF' }}><FaTwitter style={{ width: "100%", height: "100%" }} /></a>
        </div>
        <div>
          <a href="https://discord.gg/daydreamerz" rel="noreferrer" target={'_blank'} style={{ width: "60%", height: '60%', color: '#FFF' }}><FaDiscord style={{ width: "100%", height: "100%" }} /></a>
        </div>
      </LinkButtons>
      {/* <ChildrenComponent isPosLeftChildren={true} setMask={setMask} /> */}
      <WLChecker>
        <div>
          <img src={img} alt="super" />
          <img src={whiteBoard} alt="wb" />
        </div>
        <div>
          <span className='wlc-title'>WhiteList Checker</span>
          <div>
            <span className='connect-text' onClick={handleConnectWallet} onMouseEnter={() => cursorChangeHandler("hovered")} onMouseLeave={() => cursorChangeHandler("")} onMouseDown={() => cursorChangeHandler("clicked")} onMouseUp={() => cursorChangeHandler("hovered")}>{connectState}</span>
            <span className='check-text'></span>
          </div>
          {checked ? <span style={{ color: isWL ? 'green' : 'red', fontFamily: "Titan One", textAlign: 'center' }}>{isWL ? "Congratulations, You are on whitelist." : "Sorry, You are not on whitelist."}</span> : null}
          {/* <img src={btn2} alt="btn2" /> */}
        </div>
        <img src={guitar} alt="" className='guitarman' />
        <img src={computer} alt="" className='computerman' />
      </WLChecker>
      <Logo />
      {/* <button onClick={() => { web3.currentProvider.close() }}>Disconnect</button> */}
      <DarkMask isMask={isMask}></DarkMask>
      <QuickMenu setMask={setMask} />
    </LandingContainer>
  )
}

export default Mint;
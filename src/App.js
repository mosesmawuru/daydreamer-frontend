import React, { Suspense, useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Web3 from "web3";
import AOS from "aos";
import "aos/dist/aos.css";
// import { ToastContainer } from "react-toastify";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { EthereumContext } from "./contexts/EthereumContext";

// import for cursor

import Cursor from "./components/cursor";
// import { MouseContext } from "./contexts/mouse-context";

// Import Theme Setting
import { ThemeProvider } from "styled-components";
// import { GlobalStyles } from "themes/globalStyles";
import { lightTheme, darkTheme } from "./themes/Themes";

import SoundComponent from './components/sound';

// Import Hooks
import { useDarkMode } from "./hooks/useDarkMode";
import { useApolloSound } from "./hooks/useApolloSound";

import Loading from "./components/loading";


const Landing = React.lazy(() => import("./pages/landing/index.jsx"));
const Comming = React.lazy(() => import("./pages/comming/index.jsx"));
const Mint = React.lazy(() => import("./pages/mint/index.jsx"));
const FAQ = React.lazy(() => import("./pages/faq/index.jsx"));
const ArtFlexible = React.lazy(() => import("./pages/ordinal/index.jsx"));
const AboutUs = React.lazy(() => import("./pages/aboutus/index.jsx"));
const DayDreamerz = React.lazy(() => import("./pages/dreamerz/index.jsx"));

function App() {

  // const { cursorType, cursorChangeHandler } = useContext(MouseContext);

  const [theme, themeToggler] = useDarkMode();
  const themeMode = theme === "light" ? lightTheme : darkTheme;

  const [isPlaying, soundToggler] = useApolloSound();

  // wallet info
  const [provider, setProvider] = useState(null);
  const [web3, setWeb3] = useState(null);
  const [accounts, setAccounts] = useState([]);
  const [currentAcc, setCurrentAcc] = useState("");

  useEffect(() => {
    const { ethereum } = window;

    if (ethereum && ethereum.isMetaMask) {
      setProvider(ethereum);
      setWeb3(new Web3(ethereum));
      ethereum.on("accountsChanged", (accs) => {
        console.log("access : ", accs);
        setAccounts(accs);
        setCurrentAcc(accs[0]);
      });
      ethereum.on("chainChanged", (chainId) => {
        if (chainId === "0x1e14") {
          toast.success("Ethereum mainnet connected successfully", {
            theme: "dark",
          });
        } else {
          // console.log("chainId:1: ", chainId);
          toast.error("Please connect to Ethereum Mainnet", {
            theme: "dark",
          });
        }
      });
    } else {
      toast.error("Please install Metamask wallet in this browser", {
        theme: "dark",
      });
    }

    AOS.init({ duration: 1500 });
  }, []);

  useEffect(() => {
    const setCurrentlyConnectedAccount = async () => {
      let accounts = await web3.eth.getAccounts();
      if (accounts && accounts.length > 0) {
        setCurrentAcc(accounts[0]);
      }
    };
    if (web3) {
      setCurrentlyConnectedAccount();
    }
  }, [web3]);
  // ----------------

  return (
    <>
      <Cursor />
      <SoundComponent isPlaying={isPlaying} soundToggler={soundToggler} />
      <EthereumContext.Provider
        value={{ provider, accounts, web3, currentAcc }}
      >
        <Suspense fallback={<Loading />}>
          <Router>
            <ThemeProvider theme={themeMode}>
              <Routes>
                <Route
                  path="/"
                  element={
                    <Landing onThemeClick={themeToggler} />
                  }
                ></Route>
                <Route
                  path="/comming"
                  element={
                    <Comming onThemeClick={themeToggler} />
                  }
                ></Route>
                <Route
                  path="/mint"
                  element={
                    <Mint onThemeClick={themeToggler} />
                  }
                ></Route>
                <Route
                  path="/faq"
                  element={
                    <FAQ onThemeClick={themeToggler} />
                  }
                ></Route>
                <Route
                  path="/ordinal"
                  element={
                    <ArtFlexible onThemeClick={themeToggler} />
                  }
                ></Route>
                <Route
                  path="/aboutus"
                  element={
                    <AboutUs onThemeClick={themeToggler} />
                  }
                ></Route>
                <Route
                  path="/dreamerz"
                  element={
                    <DayDreamerz onThemeClick={themeToggler} />
                  }
                ></Route>
              </Routes>
            </ThemeProvider>
          </Router>
        </Suspense>
      </EthereumContext.Provider>
      <ToastContainer />
    </>
  );
}

export default App;

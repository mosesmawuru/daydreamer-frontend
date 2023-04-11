import React, { Suspense } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "aos/dist/aos.css";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

// import for cursor
import Cursor from "./components/cursor";

// Import Theme Setting
import { ThemeProvider } from "styled-components";
import { lightTheme, darkTheme } from "./themes/Themes";

import SoundComponent from './components/sound';

// Import Hooks
import { useDarkMode } from "./hooks/useDarkMode";
import { useApolloSound } from "./hooks/useApolloSound";
import Loading from "./components/loading";
import '@rainbow-me/rainbowkit/dist/index.css';
import { getDefaultWallets, RainbowKitProvider } from '@rainbow-me/rainbowkit';
import { configureChains, createClient, WagmiConfig } from 'wagmi';
import { arbitrum, goerli, mainnet, optimism, polygon } from 'wagmi/chains';
import { publicProvider } from 'wagmi/providers/public';

const { chains, provider, webSocketProvider } = configureChains(
  [
    mainnet,
    polygon,
    optimism,
    arbitrum,
    ...(process.env.NEXT_PUBLIC_ENABLE_TESTNETS === 'true' ? [goerli] : []),
  ],
  [publicProvider()]
);
const { connectors } = getDefaultWallets({
  appName: 'RainbowKit App',
  chains,
});

const wagmiClient = createClient({
  autoConnect: true,
  connectors,
  provider,
  webSocketProvider,
});


const Landing = React.lazy(() => import("./pages/landing/index.jsx"));
const Comming = React.lazy(() => import("./pages/comming/index.jsx"));
const Mint = React.lazy(() => import("./pages/mint/index.jsx"));
const FAQ = React.lazy(() => import("./pages/faq/index.jsx"));
const ArtFlexible = React.lazy(() => import("./pages/ordinal/index.jsx"));
const AboutUs = React.lazy(() => import("./pages/aboutus/index.jsx"));
const DayDreamerz = React.lazy(() => import("./pages/dreamerz/index.jsx"));

function App() {
  const [theme, themeToggler] = useDarkMode();
  const themeMode = theme === "light" ? lightTheme : darkTheme;

  const [isPlaying, soundToggler] = useApolloSound();

  return (
    <WagmiConfig client={wagmiClient}>
      <RainbowKitProvider chains={chains}>
        <Cursor />
        <SoundComponent isPlaying={isPlaying} soundToggler={soundToggler} />
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
                  path="/D-connect"
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
                  path="/ordinal-dreamerz"
                  element={
                    <ArtFlexible onThemeClick={themeToggler} />
                  }
                ></Route>
                <Route
                  path="/about-us"
                  element={
                    <AboutUs onThemeClick={themeToggler} />
                  }
                ></Route>
                <Route
                  path="/day-dreamerz"
                  element={
                    <DayDreamerz onThemeClick={themeToggler} />
                  }
                ></Route>
              </Routes>
            </ThemeProvider>
          </Router>
        </Suspense>
        <ToastContainer />
      </RainbowKitProvider>
    </WagmiConfig>
  );
}

export default App;

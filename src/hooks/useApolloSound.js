import { useEffect, useState } from "react";
export const useApolloSound = () => {
  const [isPlaying, setPlayMode] = useState(false);

  const soundToggler = () => {
    window.localStorage.setItem("isPlaying", !isPlaying);
    setPlayMode(!isPlaying);
    // console.log("setSound function accured");
    return;
  };

  useEffect(() => {
    // const localSoundState = window.localStorage.getItem("isPlaying");
    // localSoundState && setPlayMode(localSoundState === 'true');
    setPlayMode(false);
    // console.log(342342343, localSoundState);
  }, []);
  return [isPlaying, soundToggler];
};

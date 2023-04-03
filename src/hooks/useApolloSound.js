import { useEffect, useState } from "react";
export const useApolloSound = () => {
  const [isPlaying, setPlayMode] = useState(false);

  const soundToggler = () => {
    window.localStorage.setItem("isPlaying", !isPlaying);
    setPlayMode(!isPlaying);
    return;
  };

  useEffect(() => {
    setPlayMode(false);
  }, []);
  return [isPlaying, soundToggler];
};

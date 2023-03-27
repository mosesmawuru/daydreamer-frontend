import { useState } from "react";

const useModal = () => {
  const [visible, setVisible] = useState(false);

  const toggle = () => {
    setVisible(!visible);
  };

  return { visible, toggle };
};

export default useModal;

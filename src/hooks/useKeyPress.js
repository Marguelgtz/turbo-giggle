import { useState, useEffect } from "react";

const useKeyPress = (targetKey, callback) => {
  const [keyPressed, setKeyPressed] = useState(false);

  function downHandler({ key }) {
    console.log(key);
    if (key === targetKey) {
      callback();
    }
  }

  useEffect(() => {
    window.addEventListener("keydown", downHandler);

    return () => {
      window.removeEventListener("keydown", downHandler);
    };
  }, []);
  // console.log(keyPressed);
  return keyPressed;
};

export default useKeyPress;

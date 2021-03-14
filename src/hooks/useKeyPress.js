import { useState, useEffect } from "react";

const useKeyPress = (targetKey, callback) => {
  const [keyPressed, setKeyPressed] = useState(false);

  let keysPressed = {};

  function downHandler({ key }) {
    //multiple key support
    keysPressed[key] = true;

    if (Array.isArray(targetKey)) {
      if (keysPressed[targetKey[0]] && key === targetKey[1]) {
        callback();
      }
    }
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

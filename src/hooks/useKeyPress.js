import { useState, useEffect } from "react";

const useKeyPress = (targetKey, callback) => {
  const [keyPressed, setKeyPressed] = useState(false);

  // let keysPressed = {};

  function downHandler({ key }) {
    //multiple key support

    // console.log(keysPressed);
    // if (Array.isArray(targetKey)) {
    //   if (keysPressed[targetKey[0]] && key === targetKey[1]) {
    //     callback();
    //   }
    // }
    console.log(key);
    if (key === targetKey) {
      callback();
    }
  }

  useEffect(() => {
    window.addEventListener("keydown", downHandler);
    window.addEventListener("keyup", downHandler);

    return () => {
      window.removeEventListener("keydown", downHandler);
      window.removeEventListener("keyup", downHandler);
    };
  }, []);
  // console.log(keyPressed);
  return keyPressed;
};

export default useKeyPress;

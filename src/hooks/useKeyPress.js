import { useState, useEffect } from "react";

const useKeyPress = (targetKey, callback) => {
  const [keyPressed, setKeyPressed] = useState(false);

  let keysPressed = {};

  function downHandler({ key }) {
    //multiple key support
    keysPressed[key] = true;

    if (Array.isArray(targetKey)) {
      console.log(keysPressed);
      if (keysPressed[targetKey[0]] && key === targetKey[1]) {
        callback();
      }
    }
    if (key === targetKey) {
      callback();
    }
  }
  // single and multi key support w ternary
  // const downHandler = ({ key }) =>
  //   Array.isArray(targetKey)
  //     ? keysPressed[targetKey[0]] && key === targetKey[1]
  //       ? callback()
  //       : null
  //     : key === targetKey
  //     ? callback()
  //     : null;

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

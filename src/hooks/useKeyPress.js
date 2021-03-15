import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

const useKeyPress = (targetKey, callback) => {
  const [keyPressed, setKeyPressed] = useState(false);

  let keysPressed = { w: false, a: false, s: false, d: false };

  function downHandler({ key }) {
    //multiple key support
    if (key === "w" || "a" || "s" || "d") {
      console.log("valid");
    }
    keysPressed[key] = true;
  }
  const upHandler = ({ key }) => {
    keysPressed[key] = false;
  };

  useEffect(() => {
    window.addEventListener("keydown", downHandler);
    window.addEventListener("keyup", upHandler);

    return () => {
      window.removeEventListener("keydown", downHandler);
    };
  }, []);
  // console.log(keysPressed);
  return keysPressed;
};

export default useKeyPress;

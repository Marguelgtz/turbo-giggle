import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

const useKeyPress = (targetKey, callback) => {
  const [keysPressed, setKeysPressed] = useState({
    w: false,
    a: false,
    s: false,
    d: false,
  });

  // let keysPressed = { w: false, a: false, s: false, d: false };

  function downHandler({ key }) {
    //multiple key support
    // console.log(typeof key);
    switch (key) {
      case "w":
        setKeysPressed({ ...keysPressed, w: true });
        // keysPressed[key] = true;
        break;
      case "a":
        keysPressed[key] = true;
        break;
      case "s":
        keysPressed[key] = true;
        break;
      case "d":
        keysPressed[key] = true;
        break;
      default:
        break;
    }
  }
  const upHandler = ({ key }) => {
    switch (key) {
      case "w":
        setKeysPressed({ ...keysPressed, w: false });
        break;
      case "a":
        keysPressed[key] = false;
        break;
      case "s":
        keysPressed[key] = false;
        break;
      case "d":
        keysPressed[key] = false;
        break;
      default:
        break;
    }
  };

  useEffect(() => {
    window.addEventListener("keydown", downHandler);
    window.addEventListener("keyup", upHandler);

    return () => {
      window.removeEventListener("keydown", downHandler);
      window.addEventListener("keyup", upHandler);
    };
  }, []);
  console.log(keysPressed);
  return keysPressed;
};

export default useKeyPress;

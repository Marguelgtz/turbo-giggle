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
        break;
      case "a":
        setKeysPressed({ ...keysPressed, a: true });
        break;
      case "s":
        setKeysPressed({ ...keysPressed, s: true });
        break;
      case "d":
        setKeysPressed({ ...keysPressed, w: true });
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
        setKeysPressed({ ...keysPressed, a: false });
        break;
      case "s":
        setKeysPressed({ ...keysPressed, s: false });
        break;
      case "d":
        setKeysPressed({ ...keysPressed, d: false });
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
  // console.log(keysPressed);
  return keysPressed;
};

export default useKeyPress;

import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

const useKeyPress = (targetKey, callback) => {
  const [keysPressed, setKeysPressed] = useState({
    w: false,
    a: false,
    s: false,
    d: false,
  });

  let keysPressedObj = { w: false, a: false, s: false, d: false };

  function downHandler({ key }) {
    //multiple key support
    // console.log(typeof key);
    switch (key) {
      case "w":
        keysPressedObj[key] = true;
        setKeysPressed({ ...keysPressedObj, w: true });
        break;
      case "a":
        keysPressedObj[key] = true;
        setKeysPressed({ ...keysPressedObj, a: true });
        break;
      case "s":
        keysPressedObj[key] = true;
        setKeysPressed({ ...keysPressedObj, s: true });
        break;
      case "d":
        keysPressedObj[key] = true;
        setKeysPressed({ ...keysPressedObj, d: true });
        break;
      default:
        break;
    }
  }
  const upHandler = ({ key }) => {
    switch (key) {
      case "w":
        keysPressedObj[key] = false;
        setKeysPressed({ ...keysPressedObj, w: false });
        break;
      case "a":
        keysPressedObj[key] = false;
        setKeysPressed({ ...keysPressedObj, a: false });
        break;
      case "s":
        keysPressedObj[key] = false;
        setKeysPressed({ ...keysPressedObj, s: false });
        break;
      case "d":
        keysPressedObj[key] = false;
        setKeysPressed({ ...keysPressedObj, d: false });
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

import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

const useKeyPress = (targetKey, callback) => {
  const dispatch = useDispatch();
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
        //only update if key state changes
        if (keysPressedObj.w) {
          break;
        } else {
          keysPressedObj[key] = true;
          setKeysPressed({ ...keysPressedObj });
        }
        break;
      case "a":
        keysPressedObj[key] = true;
        setKeysPressed({ ...keysPressedObj });
        break;
      case "s":
        keysPressedObj[key] = true;
        setKeysPressed({ ...keysPressedObj });
        break;
      case "d":
        keysPressedObj[key] = true;
        setKeysPressed({ ...keysPressedObj });
        break;
      default:
        break;
    }
  }
  const upHandler = ({ key }) => {
    switch (key) {
      case "w":
        keysPressedObj[key] = false;
        setKeysPressed({ ...keysPressedObj });
        break;
      case "a":
        keysPressedObj[key] = false;
        setKeysPressed({ ...keysPressedObj });
        break;
      case "s":
        keysPressedObj[key] = false;
        setKeysPressed({ ...keysPressedObj });
        break;
      case "d":
        keysPressedObj[key] = false;
        setKeysPressed({ ...keysPressedObj });
        break;
      default:
        break;
    }
  };

  useEffect(() => {
    //ignore downhandler if sesired key is pressed
    window.addEventListener("keydown", downHandler);
    window.addEventListener("keyup", upHandler);

    return () => {
      window.removeEventListener("keydown", downHandler);
      window.removeEventListener("keyup", upHandler);
    };
  }, []);
  // console.log(keysPressed);
  return keysPressed;
};

export default useKeyPress;

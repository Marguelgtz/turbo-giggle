import "./App.css";
import React, { useState, useCallback, useEffect } from "react";
import { Canvas } from "react-three-fiber";
import {
  PointerLockControls,
  Box,
  Cylinder,
  PerspectiveCamera,
  OrbitControls,
} from "@react-three/drei";

import { useDispatch, useSelector } from "react-redux";

//Movement
import {
  moveFront,
  moveBack,
  moveLeft,
  moveRight,
  moveFrontRight,
  moveFrontLeft,
  moveBackLeft,
  moveBackRight,
} from "./redux/character/actions";

//Components
import Plane from "./components/plane";

//Hooks
import useMousePos from "./hooks/useMousePos";
import useWindowSize from "./hooks/useWindowSize";
import useKeyPress from "./hooks/useKeyPress";

const App = () => {
  const dispatch = useDispatch();

  //Char position
  const charPos = useSelector((state) => state.character.charPos);

  // console.log("char pos", charPos);

  //Char position control
  useKeyPress("w", () => {
    // console.log("move front fire");
    dispatch(moveFront());
  });
  useKeyPress("s", () => {
    // console.log("move back fire");
    dispatch(moveBack());
  });
  useKeyPress("a", () => {
    // console.log("move left fire");
    dispatch(moveLeft());
  });
  useKeyPress("d", () => {
    // console.log("move right fire");
    dispatch(moveRight());
  });
  // useKeyPress(["w", "d"], () => {
  //   console.log("move up/right fire");
  //   dispatch(moveFrontRight());
  // });
  // useKeyPress(["w", "a"], () => {
  //   console.log("move up/left fire");
  //   dispatch(moveFrontLeft());
  // });
  // useKeyPress(["s", "a"], () => {
  //   console.log("move down/left fire");
  //   dispatch(moveBackLeft());
  // });
  // useKeyPress(["s", "d"], () => {
  //   console.log("move down/rigth fire");
  //   dispatch(moveBackRight());
  // });

  const { mouseX, mouseY } = useMousePos();
  const { windowX, windowY } = useWindowSize();

  //adjust values to be accurate
  const adjustedX = mouseX - windowX / 2;
  const adjustedY = mouseY - windowY / 2;

  //continue tomorrow no more wine
  console.log("rerender");
  return (
    <div className="App">
      <Canvas shadowMap style={{ background: "#87CEEB" }}>
        <PerspectiveCamera
          makeDefault // Main Camera
          // position={[-adjustedX / 100, adjustedY / 100, 10]} // boilerplate position will do follow obj hook for position or through redux maybe
          position={[charPos.x, charPos.y + 3, charPos.z + 5]}
        ></PerspectiveCamera>
        <Box
          castShadow
          color="gray"
          position={[charPos.x, charPos.y, charPos.z]}
        />
        <PointerLockControls />

        <ambientLight intensity={0.2} />
        <Plane />
        <spotLight
          intensity={0.6}
          position={[0, 3, 5]}
          penumbra={2}
          shadow-mapSize-width={2048}
          shadow-mapSize-height={2048}
          castShadow
        >
          <object3D position={[charPos.x, charPos.y, charPos.z]} />
        </spotLight>

        {/* character movement - dumb/easy way */}
        {/* {!moveFront
          ? () => {
              console.log("move front fire");
              dispatch({ type: "move-foward" });
            }
          : null} */}
        {/* {moveBack
          ? setCharacterPos({ ...characterPos, charX: characterPos.charX-- })
          : null}
        {moveLeft
          ? setCharacterPos({ ...characterPos, charY: characterPos.charX-- })
          : null}
        {moveRight
          ? setCharacterPos({ ...characterPos, charY: characterPos.charX++ })
          : null} */}
      </Canvas>
    </div>
  );
};

export default App;

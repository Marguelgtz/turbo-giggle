import "./App.css";
import React, {
  useState,
  useCallback,
  useEffect,
  useMemo,
  useRef,
} from "react";
import { Canvas } from "react-three-fiber";
import {
  PointerLockControls,
  Box,
  Cylinder,
  PerspectiveCamera,
  OrbitControls,
} from "@react-three/drei";

import { useDispatch, useSelector, shallowEqual } from "react-redux";

//Movement
import { moveFront } from "./redux/character/actions";

//Components
import Plane from "./components/plane";

//Hooks
import useMousePos from "./hooks/useMousePos";
import useWindowSize from "./hooks/useWindowSize";
import useWasd from "./hooks/useWasd";

const App = () => {
  const dispatch = useDispatch();
  const rerenders = useRef(true);
  const moveRender = useRef(true);
  //Char position
  const charPos = useSelector((state) => state.character.charPos);
  // const movementControl = useSelector((state) => state);

  //controls
  const wasd = useWasd();

  //skip move dispatch while redux rerender happens
  useEffect(() => {
    rerenders.current = !rerenders.current;
  });

  const moveFr = () => {
    rerenders.current = !rerenders.current;
    dispatch({ type: "move-front" });
  };
  const moveBa = () => {
    moveRender.current = !rerenders.current;
    dispatch({ type: "move-back" });
  };
  const moveL = () => {
    moveRender.current = !rerenders.current;
    dispatch({ type: "move-left" });
  };
  const moveR = () => {
    moveRender.current = !rerenders.current;
    dispatch({ type: "move-right" });
  };

  // if (wasd.w) dispatch({ type: "move-front" });
  if (rerenders.current === moveRender.current) {
    if (wasd.w) moveFr();
    if (wasd.s) moveBa();
    if (wasd.a) moveL();
    if (wasd.d) moveR();
  }

  const { mouseX, mouseY } = useMousePos();
  const { windowX, windowY } = useWindowSize();

  //adjust values to be accurate
  const adjustedX = mouseX - windowX / 2;
  const adjustedY = mouseY - windowY / 2;

  //continue tomorrow no more wine

  return (
    <div className="App">
      <Canvas shadowMap style={{ background: "#87CEEB" }}>
        <PerspectiveCamera
          makeDefault // Main Camera
          position={[-adjustedX / 100, adjustedY / 100, 10]} // boilerplate position will do follow obj hook for position or through redux maybe
          // position={[charPos.x, charPos.y + 3, charPos.z + 5]}
        ></PerspectiveCamera>

        <Box
          castShadow
          color="gray"
          position={[charPos.x, charPos.y, charPos.z]}
        />
        {/* <PointerLockControls /> */}

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

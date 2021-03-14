import "./App.css";
import React, { useState, useCallback, useEffect } from "react";
import { Canvas } from "react-three-fiber";
import {
  OrbitControls,
  Box,
  Cylinder,
  PerspectiveCamera,
} from "@react-three/drei";

import { useDispatch } from "react-redux";

//Components
import Plane from "./components/plane";

//Hooks
import useMousePos from "./hooks/useMousePos";
import useWindowSize from "./hooks/useWindowSize";
import useKeyPress from "./hooks/useKeyPress";

const App = () => {
  const dispatch = useDispatch();

  //states will prob go to redux....maybe idk
  const [characterPos, setCharacterPos] = useState({
    charX: 0,
    charZ: 0,
  });

  const moveFront = useKeyPress("w");
  const moveBack = useKeyPress("s");
  const moveLeft = useKeyPress("a");
  const moveRight = useKeyPress("d");

  const { mouseX, mouseY } = useMousePos();
  const { windowX, windowY } = useWindowSize();

  //adjust values to be accurate
  const adjustedX = mouseX - windowX / 2;
  const adjustedY = mouseY - windowY / 2;

  return (
    <div className="App">
      <Canvas shadowMap style={{ background: "#87CEEB" }}>
        <PerspectiveCamera
          makeDefault // Main Camera
          position={[-adjustedX / 100, adjustedY / 100, 10]} // boilerplate position will do follow obj hook for position or through redux maybe
        >
          {/* <mesh /> */}
        </PerspectiveCamera>
        <OrbitControls />
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
          <object3D position={[0, 0, 0]} />
        </spotLight>
        <Box castShadow color="gray" />

        {/* character movement - dumb/easy way */}
        {/* {moveFront
          ? setCharacterPos({ ...characterPos, charX: characterPos.charX + .5 })
          : null}
        {moveBack
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

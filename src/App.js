import "./App.css";
import React, { useState, useCallback, useEffect } from "react";
import { Canvas } from "react-three-fiber";
import {
  OrbitControls,
  Box,
  Cylinder,
  PerspectiveCamera,
} from "@react-three/drei";

//Components
import Plane from "./components/plane";

//Hooks
import useMousePos from "./hooks/useMousePos";
import useWindowSize from "./hooks/useWindowSize";

const App = () => {
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
          position={[
            -adjustedX / 100,
            adjustedY / 100 - 2,
            -Math.abs(adjustedX / 100) - 2,
          ]} // boilerplate position will do follow obj hook for position or through redux maybe
        >
          <mesh />
        </PerspectiveCamera>
        <OrbitControls />
        <ambientLight intensity={0.2} />
        <Plane />
      </Canvas>
    </div>
  );
};

export default App;

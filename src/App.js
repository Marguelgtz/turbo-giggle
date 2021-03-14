import React, { useState, useCallback, useEffect } from "react";
import { Canvas } from "react-three-fiber";
import {
  OrbitControls,
  Box,
  Cylinder,
  PerspectiveCamera,
} from "@react-three/drei";

const App = () => {
  return (
    <div>
      <Canvas>
        <PerspectiveCamera
          makeDefault // Main Camera
          position={[10, 0, 10]} // boilerplate position will do follow obj hook for position or through redux maybe
        >
          <mesh />
        </PerspectiveCamera>
      </Canvas>
    </div>
  );
};

export default App;

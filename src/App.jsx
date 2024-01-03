import { useState, Suspense } from "react";
import "./App.css";

import { Canvas } from "@react-three/fiber";
import { Environment, OrbitControls } from "@react-three/drei";
import Earth from "../public/Earth";
import Cuterobo from "../public/Cuterobo";

function App() {
  return (
    <>
      <Canvas>
        <ambientLight />
        <OrbitControls enableZoom={true} />
        <Suspense fallback={null}>
          {/* <Earth /> */}
          <Cuterobo />
        </Suspense>
        <Environment preset="sunset" />
      </Canvas>
    </>
  );
}

export default App;

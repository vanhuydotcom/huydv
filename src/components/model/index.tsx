"use client";

import { memo } from "react";
import { Canvas } from "@react-three/fiber";
import Cube from "./cube";
import Plane from "./plane";

import "./backdrop.css";
function Model() {
  return (
    <div className="fixed -z-10 w-screen h-screen inset-0">
      <Canvas>
        <Cube />
        <Plane />
        <ambientLight intensity={2.5} />
        <directionalLight position={[-1, 1, 1]} />
      </Canvas>
    </div>
  );
}

export default memo(Model);

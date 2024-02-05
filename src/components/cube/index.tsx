"use client";

import { memo } from "react";
import { Canvas } from "@react-three/fiber";
import Model from "./model";
import { ContactShadows } from "@react-three/drei";
import "./backdrop.css";

function Cube() {
  return (
    <div className="fixed -z-10 w-screen h-screen inset-0">
      <Canvas>
        <Model />
        <ambientLight intensity={1.5} />
        <directionalLight position={[-1, 1, 1]} />
      </Canvas>
    </div>
  );
}

export default memo(Cube);

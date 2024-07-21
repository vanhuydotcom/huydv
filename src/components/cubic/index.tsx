"use client";

import { memo } from "react";
import { Canvas } from "@react-three/fiber";
import Model from "./model";
import { ContactShadows } from "@react-three/drei";

function Cubic() {
  return (
    <div className="fixed -z-10 w-screen h-screen inset-0">
      <Canvas dpr={[1, 1.5]} camera={{ position: [5, 0, 10], fov: 35 }}>
        <Model />
        <ambientLight intensity={1.5} />
        <directionalLight position={[-1, 1, 1]} />
        <ContactShadows
          position={[0, -2.5, 0.05]}
          scale={30}
          blur={2.5}
          far={2.5}
          color="#CFB25C"
        />
      </Canvas>
    </div>
  );
}

export default memo(Cubic);

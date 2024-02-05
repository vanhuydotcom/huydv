"use client";

import { memo, useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import Model from "./model";
import {
  AccumulativeShadows,
  ContactShadows,
  Environment,
  RandomizedLight,
  Lightformer,
  Float,
} from "@react-three/drei";
import "./backdrop.css";

function Lightformers({ positions = [2, 0, 2, 0, 2, 0, 2, 0] }) {
  const group = useRef<any>();
  useFrame(
    (state, delta) =>
      (group!.current!.position!.z += delta * 10) > 20 &&
      (group!.current!.position!.z = -60)
  );
  return (
    <>
      {/* Ceiling */}
      <Lightformer
        intensity={0.75}
        rotation-x={Math.PI / 2}
        position={[0, 5, -9]}
        scale={[10, 10, 1]}
      />
      <group rotation={[0, 0.5, 0]}>
        <group ref={group}>
          {positions.map((x, i) => (
            <Lightformer
              key={i}
              form="circle"
              intensity={2}
              rotation={[Math.PI / 2, 0, 0]}
              position={[x, 4, i * 4]}
              scale={[3, 1, 1]}
            />
          ))}
        </group>
      </group>
      {/* Sides */}
      <Lightformer
        intensity={4}
        rotation-y={Math.PI / 2}
        position={[-5, 1, -1]}
        scale={[20, 0.1, 1]}
      />
      <Lightformer
        rotation-y={Math.PI / 2}
        position={[-5, -1, -1]}
        scale={[20, 0.5, 1]}
      />
      <Lightformer
        rotation-y={-Math.PI / 2}
        position={[10, 1, 0]}
        scale={[20, 1, 1]}
      />
      {/* Accent (red) */}
      <Float speed={5} floatIntensity={2} rotationIntensity={2}>
        <Lightformer
          form="ring"
          color="red"
          intensity={1}
          scale={10}
          position={[-15, 4, -18]}
          target={[0, 0, 0]}
        />
      </Float>
    </>
  );
}

function Cube() {
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

export default memo(Cube);

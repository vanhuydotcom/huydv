"use client";

import { memo, useRef } from "react";
import { useFrame, useLoader } from "@react-three/fiber";
import {
  BufferGeometry,
  Group,
  MathUtils,
  Mesh,
  NormalBufferAttributes,
  Object3DEventMap,
  TextureLoader,
} from "three";
import {
  GradientTexture,
  MeshDistortMaterial,
  Tetrahedron,
} from "@react-three/drei";

function Plane() {
  useFrame((state, delta) => {});

  const texture = useLoader(TextureLoader, "/blue-texture.webp");

  return (
    <mesh position={[0, 0, -5]}>
      <planeGeometry args={[50, 50]} />
      <meshStandardMaterial color={"#fff"} />
    </mesh>
  );
}

export default memo(Plane);

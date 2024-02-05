"use client";

import { memo, useRef } from "react";
import { useFrame, useLoader } from "@react-three/fiber";
import {
  BufferGeometry,
  Group,
  MathUtils,
  Mesh,
  Mesh as MeshInstance,
  NormalBufferAttributes,
  Object3DEventMap,
  TextureLoader,
} from "three";
import { Cone } from "@react-three/drei";

function Model() {
  const groupRef = useRef<Group<Object3DEventMap>>(null);
  useFrame((state, delta) => {
    if (!groupRef.current?.rotation) return;
    // groupRef.current.rotation!.x += delta * 0.01;
    groupRef.current.rotation!.y += delta * 0.2;
    // groupRef.current.rotation!.z += delta * 0.01;
  });

  const texture = useLoader(TextureLoader, "/sapphire-blue-texture.jpg");

  return (
    <group ref={groupRef} dispose={null}>
      <Cone args={[1.5, 2, 4]}>
        <meshStandardMaterial map={texture} />
      </Cone>
    </group>
  );
}

export default memo(Model);

"use client";

import { memo, useRef } from "react";
import { useFrame, useLoader } from "@react-three/fiber";
import {
  BufferGeometry,
  Group,
  Mesh,
  Mesh as MeshInstance,
  NormalBufferAttributes,
  Object3DEventMap,
  TextureLoader,
} from "three";

function Model() {
  const groupRef = useRef<Group<Object3DEventMap>>(null);
  useFrame((state, delta) => {
    if (!groupRef.current?.rotation) return;
    groupRef.current.rotation!.x += delta * 0.01;
    groupRef.current.rotation!.y += delta * 0.25;
    groupRef.current.rotation!.z += delta * 0.01;
  });

  const texture = useLoader(TextureLoader, "/gold-texture.jpg");

  return (
    <group ref={groupRef} dispose={null}>
      <mesh>
        <boxGeometry args={[2, 2, 2]} />
        <meshStandardMaterial color={"white"} map={texture} />
      </mesh>
    </group>
  );
}

export default memo(Model);

"use client";

import { memo, useRef } from "react";
import { useFrame, useLoader } from "@react-three/fiber";
import { Group, MathUtils, Object3DEventMap, TextureLoader } from "three";
import { Tetrahedron } from "@react-three/drei";

function Model() {
  const groupRef = useRef<Group<Object3DEventMap>>(null);
  useFrame((state, delta) => {
    if (!groupRef.current?.rotation) return;
    // groupRef.current.rotation!.x += delta * 0.2;
    groupRef.current.rotation!.y += delta * 0.2;
    // groupRef.current.rotation!.z += delta * 0.2;
  });

  const texture = useLoader(TextureLoader, "/blue-texture.webp");

  return (
    <group ref={groupRef} dispose={null}>
      <mesh>
        <boxGeometry args={[2, 2, 2]} />
        <meshStandardMaterial color={"#1C85C0"} />
      </mesh>
    </group>
  );
}

export default memo(Model);

"use client";

import { memo, useRef } from "react";
import { useFrame, useLoader } from "@react-three/fiber";
import {
  BufferGeometry,
  Mesh,
  NormalBufferAttributes,
  TextureLoader,
} from "three";

function Cube() {
  const cubeRef = useRef<Mesh<BufferGeometry<NormalBufferAttributes>> | null>(
    null
  );
  useFrame((state, delta) => {
    if (!cubeRef.current?.rotation) return;
    // cubeRef.current.rotation!.x += delta * 0.2;
    cubeRef.current.rotation!.y += delta * 0.2;
    // cubeRef.current.rotation!.z += delta * 0.2;
  });

  const texture = useLoader(TextureLoader, "/blue-texture.webp");

  return (
    <mesh ref={cubeRef}>
      <boxGeometry args={[2, 2, 2]} />
      <meshStandardMaterial color={"#1C85C0"} />
    </mesh>
  );
}

export default memo(Cube);

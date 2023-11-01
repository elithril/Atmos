import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";
import { fadeOnBeforeCompile } from "../utils/fadeMaterial";
import { useFrame } from "@react-three/fiber";

export function Cloud({ sceneOpacity, ...props }) {
  const { nodes, materials } = useGLTF("/cloud2.gltf");

  const materialRef = useRef();

  useFrame(() => {
    materialRef.current.opacity = sceneOpacity.current;
  });

  return (
    <group {...props} dispose={null}>
      <mesh geometry={nodes.Mball001.geometry}>
        <meshStandardMaterial
          ref={materialRef}
          onBeforeCompile={fadeOnBeforeCompile} // shader to fade elements when they are too far
          envMapIntensity={2}
          transparent
        />
      </mesh>
    </group>
  );
}

useGLTF.preload("/cloud.glb");
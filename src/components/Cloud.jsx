import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";
import { fadeOnBeforeCompile } from "../utils/fadeMaterial";

export function Cloud({ opacity, ...props }) {
  const { nodes, materials } = useGLTF("/cloud2.gltf");
  return (
    <group {...props} dispose={null}>
      <mesh geometry={nodes.Mball001.geometry}>
        <meshStandardMaterial
          onBeforeCompile={fadeOnBeforeCompile} // shader to fade elements when they are too far
          envMapIntensity={2}
          transparent
          opacity={opacity}
        />
      </mesh>
    </group>
  );
}

useGLTF.preload("/cloud.glb");
import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";

export function Cloud({ opacity, ...props }) {
  const { nodes, materials } = useGLTF("/cloud.glb");
  return (
    <group {...props} dispose={null}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Node.geometry}
        material={materials.lambert2SG}
      >
        <meshStandardMaterial
          {...materials.lambert2SG}
          transparent
          opacity={opacity}
        />
      </mesh>
    </group>
  );
}

useGLTF.preload("/cloud.glb");
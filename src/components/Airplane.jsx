import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";

const HELIX_SPEED = 6;

export function Airplane(props) {
  const { nodes, materials } = useGLTF("/plane.glb");

  const helix = useRef();

  useFrame((state, delta) => {
    helix.current.rotation.x += delta * HELIX_SPEED;
  })

  return (
    <>
    {/* to have more depth, add a light to the model */}
    <directionalLight position={[0, 3, 1]} intensity={0.1} />
    <group {...props} dispose={null}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.wholePlane.geometry}
        // material={materials.plane}
        position={[-0.012, 0.138, 0]}
      >
        <meshStandardMaterial color="white" />
      </mesh>
      <mesh
        ref={helix}
        castShadow
        receiveShadow
        geometry={nodes.helix.geometry}
        // material={materials.plane}
        position={[1.101, 0.092, 0]}
      >
        <meshStandardMaterial color="white" />
      </mesh>
    </group>
    </>
  );
}

useGLTF.preload("/plane.glb");
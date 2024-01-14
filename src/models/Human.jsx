import React, { useRef, useEffect, useState } from "react";
import { useGLTF } from "@react-three/drei";
import { useFrame, useThree } from "@react-three/fiber";
import { a } from "@react-spring/three";
import humanScene from "../../assets/3d/human.glb";

const Human = (props) => {
  const humanRef = useRef();
  const { nodes, materials } = useGLTF(humanScene);

  const rotationSpeedX = Math.random() * 0.5;
  const rotationSpeedY = Math.random() * 0.5;
  const rotationSpeedZ = Math.random() * 0.5;

  useFrame((state, delta) => {
      humanRef.current.rotation.x += delta * rotationSpeedX;
      humanRef.current.rotation.y += delta * rotationSpeedY;
      humanRef.current.rotation.z += delta * rotationSpeedZ;
  });
  
  return (
    <a.group ref={humanRef} {...props}>
      <mesh
        geometry={nodes.Sphère002.geometry}
        material={materials.Pupille}
        position={[-0.368, 4.365, 0.808]}
        scale={0.038}
      />
      <mesh
        geometry={nodes.Sphère001.geometry}
        material={materials.Pupille}
        position={[0.434, 4.365, 0.798]}
        scale={0.04}
      />
      <mesh
        geometry={nodes.Sphère.geometry}
        material={materials["Matériau.001"]}
        position={[0, 4.324, 0]}
      />
    </a.group>
  );
}

export default Human;
import React from 'react';
import { useLoader } from '@react-three/fiber';
import * as THREE from 'three';

const GlowingRectangle = ({ position, color, intensity, width, length }) => {
  const emissiveColor = new THREE.Color(color).multiplyScalar(intensity);
  const material = new THREE.MeshLambertMaterial({
    color: new THREE.Color(0x000000),
    emissive: emissiveColor,
  });

  return (
    <mesh position={position}>
      <planeGeometry args={[length, width]} /> 
      <primitive object={material} attach="material" />
    </mesh>
  );
};

export default GlowingRectangle;
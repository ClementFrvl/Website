import React, { useState, useEffect, Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import Human from '../models/Human';
import Loader from '../components/Loader';
import { OrbitControls, Text } from '@react-three/drei';
import * as THREE from 'three';

const NotFound = () => {
    const [positions, setPositions] = useState([]);
  
    useEffect(() => {
      const newPositions = [];
      for (let i = 0; i < 200; i++) { // Change 10 to the number of humans you want
        const pos = Array(3).fill().map(() => THREE.MathUtils.randFloatSpread(100));
        newPositions.push(pos);
      }
      setPositions(newPositions);
    }, []);
  
    return (
      <section className="w-full h-screen relative">
        <Canvas className="w-full h-screen bg-black">
          <ambientLight intensity={1} />
          <directionalLight position={[1, 1, 1]} intensity={3}/>
          
          <Suspense fallback={<Loader />}>
            {positions.map((position, index) => (
              <Human key={index} position={position} />
            ))}
          </Suspense>
        </Canvas>
      </section>
    )
  }

export default NotFound
import React, { useState, useEffect, Suspense, useRef } from 'react';
import { Canvas, useThree } from '@react-three/fiber';
import Human from '../models/Human';
import Loader from '../components/Loader';
import { OrbitControls, Text } from '@react-three/drei';
import * as THREE from 'three';
import Desk from '../models/Desk';
import GlowingRectangle from '../components/GlowingRectangle';
import Construction from '../models/Construction';


const CameraController = () => {
  const { camera } = useThree();
  const scrollY = useRef(window.scrollY);

  useEffect(() => {
    const handleScroll = (event) => {
      event.preventDefault();
      const deltaY = event.deltaY * -0.01; // Modify this value to change scroll sensitivity
      camera.position.z -= deltaY;
      scrollY.current -= deltaY;
      window.scrollTo(0, scrollY.current);
    };

    window.addEventListener('wheel', handleScroll, { passive: false });

    return () => {
      window.removeEventListener('wheel', handleScroll);
    };
  }, [camera]);

  return null;
};

const Projects = () => {
    const [positions, setPositions] = useState([]);
  
    useEffect(() => {
      const headPositions = [];
      for (let i = 0; i < 50; i++) { // Change 10 to the number of humans you want
        const pos = Array(3).fill().map(() => THREE.MathUtils.randFloatSpread(50));
        pos[2] -= 25;
        console.log(pos);
        headPositions.push(pos);
      }
      setPositions(headPositions);
    }, []);
  
    return (
      <section className="w-full h-screen relative">
        <Canvas className="w-full h-screen bg-black" camera={{ position: [0, 0, 2.5] }}>
          <CameraController />
          <ambientLight intensity={1} />
          <directionalLight position={[1, 1, 1]} intensity={3}/>
          <pointLight position={[1, 2, 0]} intensity={10} />
          <Suspense fallback={<Loader />}>

            {/* Desk and projects */}

            <Text text="Projects" color="white" fontSize={0.6} position={[0, 1, 0]} />
            <Desk position={[0.17, -2.75, 0]} rotation={[0, -1.5707, 0]} scale={[0.01, 0.01, 0.01]} />
            <Text text="3D Model Credit: Pedro Belthori" color="white" fontSize={.1} position={[2.5, -0.9, 1]} fillOpacity={0.5}/>
            {positions.map((position, index) => (
              <Human key={index} position={position} />
            ))}
            <GlowingRectangle position={[0.01, 0.02, -0.56]} color="white" intensity={1} width={0.8} length={1.5} />

            {/* Project 1 - Azda */}

            <Construction position={[-1.2, -1, -5]} rotation={[0, 0.5, 0]} scale={[0.1, 0.1, 0.1]} />

          </Suspense>
        </Canvas>
      </section>
    )
  }

export default Projects

{/* <div className="absolute left-0 right-0 flex justify-center" style={{ top: '15%' }}>
          <h1 className="text-6xl md:text-7xl lg:text-9xl text-white opacity-90" style={{ textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)' }}>
            Projects
          </h1> */}
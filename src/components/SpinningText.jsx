import { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { Text } from '@react-three/drei';

const SpinningText = ({ text }) => {
  const textRef = useRef();

  // Define the glow material with emissive properties
  const textMaterial = {
    color: 0xffffff,
    emissive: 0xffffff, // Adjust the color and intensity to achieve the desired glow effect
    emissiveIntensity: 0.6,
  };

  useFrame((state, delta) => {
    textRef.current.rotation.x += 0.01;
    textRef.current.rotation.y += 0.01;
  });

  return (
    <Text
      ref={textRef}
      color={textMaterial.color}
      emissive={textMaterial.emissive}
      emissiveIntensity={textMaterial.emissiveIntensity}
      fontSize={1}
      position={[0, 0, 0]}
      anchorX="center"
      anchorY="middle"
    >
      {text}
    </Text>
  );
};

export default SpinningText;
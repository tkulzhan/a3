/* eslint-disable react/no-unknown-property */
/* eslint-disable no-unused-vars */
import React, { useRef, useState } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';

// A reusable animated, interactive box component
function RotatingBox(props) {
  const meshRef = useRef();
  const [hovered, setHovered] = useState(false);
  const [active, setActive] = useState(false);

  // Rotate the box on every frame
  useFrame((state, delta) => {
    if (meshRef.current) {
      meshRef.current.rotation.x += delta;
      meshRef.current.rotation.y += delta;
    }
  });

  return (
    <mesh
      {...props}
      ref={meshRef}
      scale={active ? 1.5 : 1}
      onClick={(e) => setActive(!active)}
      onPointerOver={(e) => setHovered(true)}
      onPointerOut={(e) => setHovered(false)}
    >
      <boxGeometry args={[1, 1, 1]} />
      <meshStandardMaterial color={hovered ? 'hotpink' : 'orange'} />
    </mesh>
  );
}

function Scene() {
  return (
    <>
      {/* Ambient light gives overall illumination */}
      <ambientLight intensity={0.3} />
      {/* A directional light to mimic sunlight */}
      <directionalLight position={[5, 5, 5]} intensity={1} />
      {/* Add multiple objects */}
      <RotatingBox position={[-2, 0, 0]} />
      <RotatingBox position={[2, 0, 0]} />
      {/* Additional static object */}
      <mesh position={[0, -1.5, 0]} rotation={[-Math.PI / 2, 0, 0]}>
        <planeGeometry args={[10, 10]} />
        <meshStandardMaterial color="lightblue" />
      </mesh>
      {/* Enable orbit controls for camera rotation */}
      <OrbitControls />
    </>
  );
}

export default function App() {
  return (
    <Canvas camera={{ position: [0, 2, 5] }}>
      <Scene />
    </Canvas>
  );
}

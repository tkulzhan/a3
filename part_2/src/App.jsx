/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
/* eslint-disable react/no-unknown-property */
import React, { useRef, useState } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';

function InteractiveBox({ position }) {
  const meshRef = useRef();
  const [active, setActive] = useState(false);
  const [hovered, setHovered] = useState(false);

  useFrame(() => {
    if (meshRef.current) {
      meshRef.current.rotation.x += 0.01;
      meshRef.current.rotation.y += 0.01;
    }
  });

  return (
    <mesh
      ref={meshRef}
      position={position}
      scale={active ? 1.5 : 1}
      onClick={() => setActive(!active)}
      onPointerOver={() => setHovered(true)}
      onPointerOut={() => setHovered(false)}
      castShadow
      receiveShadow
    >
      <boxGeometry args={[1, 1, 1]} />
      <meshStandardMaterial color={hovered ? 'hotpink' : 'orange'} />
    </mesh>
  );
}

function Scene() {
  return (
    <>
      <ambientLight intensity={0.33} />
      <directionalLight
        position={[5, 5, 5]}
        intensity={1}
        castShadow
        shadow-mapSize-width={1024}
        shadow-mapSize-height={1024}
      />
      
      <InteractiveBox position={[-2, 0, 1]} />
      <InteractiveBox position={[2, 0, 1]} />

      <mesh position={[0, -1.5, 0]} receiveShadow>
        <planeGeometry args={[10, 10]} />
        <meshStandardMaterial color="lightblue" />
      </mesh>

      <OrbitControls />
    </>
  );
}

export default function App() {
  return (
    <Canvas
      shadows
      camera={{ position: [0, 2, 10], fov: 60 }}
      gl={{ alpha: true }} // Enable transparency in WebGL context
      style={{ height: '100vh', width: '100vw', background: 'transparent' }} // Transparent background
    >
      <Scene />
    </Canvas>
  );
}

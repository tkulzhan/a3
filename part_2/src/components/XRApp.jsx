// src/XRApp.jsx
// eslint-disable-next-line no-unused-vars
import React from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import { VRButton, XR } from '@react-three/xr';
import Scene from './Scene';

export default function XRApp() {
  return (
    <>
      {/* VRButton to enter immersive mode */}
      <VRButton />
      <Canvas camera={{ position: [0, 2, 5] }}>
        <XR>
          <Scene />
          {/* Use DefaultXRControllers for VR controller support */}
          {/* <DefaultXRControllers /> */}
        </XR>
        <OrbitControls />
      </Canvas>
    </>
  );
}

import React, { useRef } from 'react';
import { Canvas, useFrame, extend } from '@react-three/fiber';
import { OrbitControls, Stage } from '@react-three/drei';
import './App.css';
import { SmartDoc } from './Models/SmartDoc';
import { HoloProjector } from './Models/HoloProjector';

// Crea un componente que encapsule el uso de `useFrame`
function SmartDocWrapper({ modelRef }: { modelRef: any }) {
  useFrame((state, delta) => {
    if (modelRef.current) {
      modelRef.current.mixer.update(delta);
    }
  });

  return <SmartDoc position={[0, .3, 0]} ref={modelRef} />;
}

export default function App() {
  const modelRef = useRef<any>(null);

  const handleIddle = () => {
    if (modelRef.current && modelRef.current.actions.iddle) {
      modelRef.current.actions.iddle.play();
    }
  };

  const handleWalk = () => {
    if (modelRef.current && modelRef.current.actions.walk) {
      modelRef.current.actions.walk.play();
    }
  };

  const handleRun = () => {
    if (modelRef.current && modelRef.current.actions.run) {
      modelRef.current.actions.run.play();
    }
  };

  return (
    <div className="w-full h-full relative">
      <Canvas className="w-full h-full absolute top-0 left-0">
        <OrbitControls />
        <Stage>
          <SmartDocWrapper modelRef={modelRef} />
          <HoloProjector />
        </Stage>
      </Canvas>
      <div className="absolute top-0 left-0 z-10 p-4">
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" onClick={handleIddle}>
          Idle
        </button>
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" onClick={handleWalk}>
          Walk
        </button>
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" onClick={handleRun}>
          Run
        </button>
      </div>
    </div>
  );
}

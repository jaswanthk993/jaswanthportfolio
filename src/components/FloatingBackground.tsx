import { Canvas } from '@react-three/fiber';
import { Float, Sphere, Box, Torus, MeshDistortMaterial } from '@react-three/drei';
import { useRef } from 'react';
import * as THREE from 'three';

function FloatingShape({ position, type }: { position: [number, number, number]; type: 'sphere' | 'box' | 'torus' }) {
  const meshRef = useRef<THREE.Mesh>(null);
  
  return (
    <Float
      speed={2}
      rotationIntensity={1}
      floatIntensity={2}
      floatingRange={[-1, 1]}
    >
      <mesh ref={meshRef} position={position}>
        {type === 'sphere' && <Sphere args={[0.5, 32, 32]} />}
        {type === 'box' && <Box args={[0.8, 0.8, 0.8]} />}
        {type === 'torus' && <Torus args={[0.5, 0.2, 16, 32]} />}
        <MeshDistortMaterial
          color="#2271ff"
          attach="material"
          distort={0.3}
          speed={2}
          roughness={0.4}
          metalness={0.8}
          emissive="#2271ff"
          emissiveIntensity={0.3}
          transparent
          opacity={0.6}
        />
      </mesh>
    </Float>
  );
}

function Scene() {
  return (
    <>
      <ambientLight intensity={0.5} />
      <pointLight position={[10, 10, 10]} intensity={1} />
      <pointLight position={[-10, -10, -10]} intensity={0.5} />
      
      <FloatingShape position={[-4, 2, -5]} type="sphere" />
      <FloatingShape position={[4, -2, -8]} type="box" />
      <FloatingShape position={[0, 3, -6]} type="torus" />
      <FloatingShape position={[-3, -3, -7]} type="sphere" />
      <FloatingShape position={[3, 1, -9]} type="box" />
      <FloatingShape position={[-1, -1, -5]} type="torus" />
    </>
  );
}

const FloatingBackground = () => {
  return (
    <div className="fixed inset-0 -z-10 opacity-40">
      <Canvas
        camera={{ position: [0, 0, 5], fov: 75 }}
        gl={{ alpha: true, antialias: true }}
        style={{ background: 'transparent' }}
      >
        <Scene />
      </Canvas>
    </div>
  );
};

export default FloatingBackground;

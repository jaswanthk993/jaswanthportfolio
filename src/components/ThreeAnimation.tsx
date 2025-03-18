
import { useRef, useState, useEffect } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, Float, Text3D, Center } from '@react-three/drei';
import * as THREE from 'three';

// Individual floating shape component
const Shape = ({ position, size, color, speed = 1, rotationAxis = 'y' }) => {
  const meshRef = useRef();
  const [randomOffset] = useState(Math.random() * 10);
  
  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation[rotationAxis] += 0.01 * speed;
      meshRef.current.position.y = position[1] + Math.sin(state.clock.elapsedTime + randomOffset) * 0.1;
    }
  });

  return (
    <mesh ref={meshRef} position={position}>
      {rotationAxis === 'y' ? (
        <octahedronGeometry args={[size, 0]} />
      ) : (
        <dodecahedronGeometry args={[size, 0]} />
      )}
      <meshStandardMaterial color={color} metalness={0.5} roughness={0.1} />
    </mesh>
  );
};

// 3D Text component
const AnimatedText = () => {
  const textRef = useRef();
  
  useFrame((state) => {
    if (textRef.current) {
      textRef.current.rotation.y = Math.sin(state.clock.elapsedTime * 0.3) * 0.1;
    }
  });

  return (
    <Float speed={2} rotationIntensity={0.5} floatIntensity={0.5}>
      <Center>
        <Text3D
          ref={textRef}
          font="/lovable-uploads/helvetiker_regular.typeface.json"
          size={0.5}
          height={0.1}
          bevelEnabled
          bevelThickness={0.01}
          bevelSize={0.01}
          bevelSegments={3}
          curveSegments={5}
        >
          {'Jaswanth'}
          <meshStandardMaterial 
            color="#2271FF" 
            metalness={0.8} 
            roughness={0.1} 
            envMapIntensity={1}
          />
        </Text3D>
      </Center>
    </Float>
  );
};

// Main scene component
const Scene = () => {
  const shapes = [
    { position: [-2, 0, -2], size: 0.3, color: '#2271FF', speed: 0.7, rotationAxis: 'y' },
    { position: [2, 0, -1], size: 0.4, color: '#4D91FF', speed: 0.5, rotationAxis: 'x' },
    { position: [-1, 0, 1], size: 0.2, color: '#3281FF', speed: 1.3, rotationAxis: 'z' },
    { position: [1.5, 0, 1.5], size: 0.3, color: '#2271FF', speed: 0.9, rotationAxis: 'y' },
    { position: [-2, 0, 1], size: 0.25, color: '#4D91FF', speed: 1.1, rotationAxis: 'x' },
  ];

  return (
    <>
      <ambientLight intensity={0.5} />
      <directionalLight position={[10, 10, 5]} intensity={1} />
      <directionalLight position={[-10, -10, -5]} intensity={0.5} color="#4D91FF" />
      
      <AnimatedText />
      
      {shapes.map((shape, i) => (
        <Shape key={i} {...shape} />
      ))}
      
      <OrbitControls 
        enableZoom={false} 
        enablePan={false} 
        autoRotate={true}
        autoRotateSpeed={0.5}
        maxPolarAngle={Math.PI / 2} 
        minPolarAngle={Math.PI / 2} 
      />
    </>
  );
};

// Main exported component
const ThreeAnimation = () => {
  const [fontLoaded, setFontLoaded] = useState(false);

  useEffect(() => {
    // Create a dummy loader to check if the font is available
    const loader = new THREE.FontLoader();
    const checkFont = () => {
      loader.load('/lovable-uploads/helvetiker_regular.typeface.json', 
        () => setFontLoaded(true),
        undefined,
        () => {
          console.log("Font not found, using fallback");
          setFontLoaded(true); // Continue anyway for graceful degradation
        }
      );
    };
    
    checkFont();
  }, []);

  if (!fontLoaded) {
    return <div className="h-60 flex items-center justify-center">Loading 3D animations...</div>;
  }

  return (
    <div className="w-full h-60 bg-gradient-to-r from-primary/5 to-primary/10 rounded-xl overflow-hidden">
      <Canvas camera={{ position: [0, 0, 5], fov: 50 }}>
        <Scene />
      </Canvas>
    </div>
  );
};

export default ThreeAnimation;

"use client";
import { Canvas, useFrame } from "@react-three/fiber";
import { MeshDistortMaterial, Sphere, Float } from "@react-three/drei";
import { useRef } from "react";
import * as THREE from "three";

function AnimatedCore() {
    const meshRef = useRef<THREE.Mesh>(null);

    useFrame((state) => {
        if (meshRef.current) {
            // Subtle rotation
            meshRef.current.rotation.x = state.clock.getElapsedTime() * 0.1;
            meshRef.current.rotation.y = state.clock.getElapsedTime() * 0.15;
        }
    });

    return (
        <Float speed={2} rotationIntensity={0.5} floatIntensity={1}>
            <Sphere args={[1, 64, 64]} scale={2.2} ref={meshRef}>
                <MeshDistortMaterial
                    color="#050505"
                    emissive="#00fff2"
                    emissiveIntensity={0.8}
                    wireframe
                    distort={0.3}
                    speed={1.5}
                    roughness={0.1}
                    metalness={0.9}
                />
            </Sphere>
            {/* Inner core glow */}
            <pointLight distance={3} intensity={5} color="#00fff2" />
        </Float>
    );
}

export function ModelView() {
    return (
        <div className="h-[60vh] w-full relative z-10 fade-in-up">
            <Canvas camera={{ position: [0, 0, 6] }} gl={{ antialias: true, alpha: true }}>
                <ambientLight intensity={0.2} />
                <directionalLight position={[5, 10, 7]} intensity={2} color="#00fff2" />
                <directionalLight position={[-5, -5, -5]} intensity={2} color="#ff00c8" />
                <AnimatedCore />
                {/* Particle field or environment could be added here */}
            </Canvas>
        </div>
    )
}

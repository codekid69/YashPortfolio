"use client";

import React, { Suspense, useEffect } from "react";
import { Canvas } from "@react-three/fiber";
import { useGLTF, Float, OrbitControls, useAnimations } from "@react-three/drei";
import * as THREE from "three";

function Model() {
    // Load the GLTF model
    const group = React.useRef<THREE.Group>(null);
    const { scene, animations } = useGLTF("/model.glb");
    const { actions } = useAnimations(animations, group);

    useEffect(() => {
        // Play the first animation found (usually Idle or the exported animation)
        const actionNames = Object.keys(actions);
        if (actionNames.length > 0 && actions[actionNames[0]]) {
            actions[actionNames[0]]?.play();
        }
        scene.traverse((child) => {
            if (child instanceof THREE.Mesh) {
                // We can add subtle glow or material tweaks here if needed later
            }
        });
    }, [scene, actions]);

    return (
        <Float
            speed={2} // subtle animation speed
            rotationIntensity={0.1} // very subtle XYZ rotation
            floatIntensity={0.2} // Up/down float level
            floatingRange={[-0.02, 0.02]} // Range of floating
        >
            <group ref={group}>
                <primitive
                    object={scene}
                    scale={2.0} // Scaled to comfortably fit the container height
                    position={[0, -2.0, 0]} // Positioned to explicitly show the shoes and rest on the bottom area
                    rotation={[0, 0, 0]}
                />
            </group>
        </Float>
    );
}

export default function Avatar3D() {
    return (
        <div className="w-full h-full relative z-10 cursor-grab active:cursor-grabbing">
            <Canvas
                camera={{ position: [0, 0, 5], fov: 45 }}
                gl={{ antialias: true, alpha: true }}
                dpr={[1, 2]}
            >
                <Suspense fallback={null}>
                    {/* Soft ambient light */}
                    <ambientLight intensity={0.9} />

                    {/* Key directional light */}
                    <directionalLight
                        position={[2, 5, 2]}
                        intensity={2.5}
                        color="#ffffff"
                    />

                    {/* Cyber-blue rim/accent light */}
                    <pointLight
                        position={[-3, -1, -2]}
                        intensity={2}
                        color="#00D4FF"
                        distance={10}
                    />

                    {/* Neon-violet rim light */}
                    <pointLight
                        position={[3, 2, 2]}
                        intensity={1.2}
                        color="#7C3AED"
                        distance={10}
                    />

                    <Model />

                    {/* User interaction limits */}
                    <OrbitControls
                        enableZoom={false}
                        enablePan={false}
                        minPolarAngle={Math.PI / 2.3} // Restrict looking up too much
                        maxPolarAngle={Math.PI / 2} // Restrict looking down too much
                        minAzimuthAngle={-Math.PI / 8}
                        maxAzimuthAngle={Math.PI / 8}
                    />
                </Suspense>
            </Canvas>
        </div>
    );
}

// Preload the model
useGLTF.preload("/model.glb");

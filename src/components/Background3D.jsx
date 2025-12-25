import React, { useRef, useMemo, useState } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Float, Environment } from '@react-three/drei';
import * as THREE from 'three';

const HeartShape = (props) => {
    const mesh = useRef();

    // Create heart shape programmatically
    const shape = useMemo(() => {
        const x = 0, y = 0;
        const heartShape = new THREE.Shape();
        heartShape.moveTo(x + 0.5, y + 0.5);
        heartShape.bezierCurveTo(x + 0.5, y + 0.5, x + 0.4, y, x, y);
        heartShape.bezierCurveTo(x - 0.6, y, x - 0.6, y + 0.7, x - 0.6, y + 0.7);
        heartShape.bezierCurveTo(x - 0.6, y + 1.1, x - 0.3, y + 1.54, x + 0.5, y + 1.9);
        heartShape.bezierCurveTo(x + 1.2, y + 1.54, x + 1.6, y + 1.1, x + 1.6, y + 0.7);
        heartShape.bezierCurveTo(x + 1.6, y + 0.7, x + 1.6, y, x + 1.0, y);
        heartShape.bezierCurveTo(x + 0.7, y, x + 0.5, y + 0.5, x + 0.5, y + 0.5);
        return heartShape;
    }, []);

    const extrudeSettings = {
        steps: 2,
        depth: 0.2, // Thickness
        bevelEnabled: true,
        bevelThickness: 0.1,
        bevelSize: 0.1,
        bevelSegments: 2,
    };

    return (
        <Float speed={props.speed || 2} rotationIntensity={2} floatIntensity={2}>
            <mesh ref={mesh} {...props} scale={[0.5, 0.5, 0.5]} rotation={[0, 0, Math.PI]}>
                <extrudeGeometry args={[shape, extrudeSettings]} />
                <meshPhysicalMaterial
                    color={props.color || "#ff69b4"}
                    transmission={0.6} // Glass-like
                    opacity={0.5}
                    metalness={0.1}
                    roughness={0.2}
                    thickness={1}
                    clearcoat={1}
                />
            </mesh>
        </Float>
    );
};

const Background3D = () => {
    // Generate random hearts
    const heartData = useMemo(() => {
        return Array.from({ length: 15 }).map((_, i) => ({
            position: [Math.random() * 20 - 10, Math.random() * 20 - 10, Math.random() * 10 - 15],
            color: i % 2 === 0 ? "#ff9a9e" : "#fad0c4",
            speed: Math.random() + 0.5
        }));
    }, []);

    return (
        <div className="absolute top-0 left-0 w-full h-full -z-10 bg-transparent overflow-hidden pointer-events-none">
            <Canvas camera={{ position: [0, 0, 10], fov: 75 }}>
                <ambientLight intensity={0.5} />
                <pointLight position={[10, 10, 10]} intensity={1} />
                <spotLight position={[-10, -10, -10]} angle={0.3} />
                {heartData.map((data, i) => (
                    <HeartShape key={i} {...data} />
                ))}
                {/* Environment for better reflections on glass material */}
                <Environment preset="sunset" />
            </Canvas>
        </div>
    );
};

export default Background3D;

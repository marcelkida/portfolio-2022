import React, { useRef, useState } from 'react'
import { Canvas, useFrame, useLoader } from '@react-three/fiber'
import * as THREE from 'three'
import { Controls } from '@react-three/drei'
import { TextureLoader } from 'three/src/loaders/TextureLoader'
import { OrbitControls, useTexture } from '@react-three/drei'

/*
function Box(props) {
    const ref = useRef()
    // Hold state for hovered and clicked events
    const [hovered, hover] = useState(false)
    const [clicked, click] = useState(false)
    // Subscribe this component to the render-loop, rotate the mesh every frame
    useFrame((state, delta) => (ref.current.rotation.x += 0.01))
    // Return the view, these are regular Threejs elements expressed in JSX
    const letter = useLoader(THREE.TextureLoader, base)

    return (
        <mesh
            {...props}
            ref={ref}
            scale={clicked ? 1.5 : 1}
            onClick={(event) => click(!clicked)}
            onPointerOver={(event) => hover(true)}
            onPointerOut={(event) => hover(false)}>
            <boxGeometry args={[1, 1, 1]} />
            <meshStandardMaterial map={letter} attach="material" />
        </mesh>
    )
}

function Ticket() {

}

function ThreeTest() {
    //const texture = useTexture('/Asset12.png');

    const letter = useLoader(THREE.TextureLoader, boot)
    return (
        <>
            <Canvas>
                <OrbitControls />
                <ambientLight />
                <rectAreaLight
                    width={2}
                    height={2}
                    intensity={2}
                    color={"#bdefff"}
                    position={[1, 4, -2]}
                    rotation={[0, 180, 0]}
                    castShadow
                />
                <pointLight position={[10, 10, 10]} />
                <Box position={[-1.2, 0, 0]} />
                <Box position={[1.2, 0, 0]} />
                <mesh>
                    <sphereGeometry />
                    <meshStandardMaterial attach="material" map={letter} />
                </mesh>
            </Canvas>
            <img src={base}></img>
        </>
    )
}

export default ThreeTest
*/
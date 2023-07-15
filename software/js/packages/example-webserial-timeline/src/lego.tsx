import * as THREE from 'three'
import React, {useRef, useState} from 'react'
// import {OrbitControls} from '@react-three/drei'
import {Canvas, useFrame, ThreeElements} from '@react-three/fiber'

function Box(props: ThreeElements['mesh']) {
    const meshRef = useRef<THREE.Mesh>(null!)
    const [hovered, setHover] = useState(false)
    const [active, setActive] = useState(false)
    useFrame((state, delta) => (meshRef.current.rotation.x += delta))
    return (
        <mesh
            {...props}
            ref={meshRef}
            scale={active ? 1.5 : 1}
            onClick={() => setActive(!active)}
            onPointerOver={() => setHover(true)}
            onPointerOut={() => setHover(false)}
        >
            <boxGeometry args={[1, 1, 1]} />
            <meshStandardMaterial color={hovered ? 'hotpink' : 'orange'} />
        </mesh>
    )
}

type LegoProps = {
    benTest: number
}

export const Lego = ({benTest}: LegoProps): JSX.Element => {
    return (
        <div>
            <Canvas>
                <ambientLight />
                <pointLight position={[10, 10, 10]} />
                <Box position={[-1.2, 0, 0]} />
                <Box position={[1.2, 0, 0]} />
                {/* <OrbitControls makeDefault /> */}
            </Canvas>
            <div>{benTest}</div>
        </div>
    )
}


import React, { useRef, useState } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { Circle, OrbitControls } from '@react-three/drei'
import { DoubleSide } from 'three'
import * as THREE from 'three'
import { RectAreaLightUniformsLib } from 'three/examples/jsm/lights/RectAreaLightUniformsLib'

RectAreaLightUniformsLib.init()
function Box(props) {
  // This reference will give us direct access to the mesh
  const mesh = useRef()
  // Set up state for the hovered and active state
  const [hovered, setHover] = useState(false)
  const [active, setActive] = useState(false)
  // Subscribe this component to the render-loop, rotate the mesh every frame
  useFrame((state, delta) => (mesh.current.rotation.x += delta))
  // Return view, these are regular three.js elements expressed in JSX
  return (
    <mesh
      {...props}
      ref={mesh}
      scale={active ? 1.5 : 1}
      onClick={(event) => setActive(!active)}
      onPointerOver={(event) => setHover(true)}
      onPointerOut={(event) => setHover(false)}>
      <boxGeometry args={[1, 1, 1]} />
      <meshStandardMaterial color={hovered ? 'hotpink' : 'orange'} />
    </mesh>
  )
}
function LogoVI(props) {
    const mesh = useRef()
    const [hovered, setHover] = useState(false)
    const [active, setActive] = useState(false)
 
    useFrame((state, delta) => (mesh.current.rotation.y += delta))
    const positions = new Float32Array([
     0,0,0,
     -1,1,0,
     -0.5,1,0,
     0,-0.25,0,
     0.5,1,0,
     1,1,0,
     0,0,0
  ])
  
  const normals = new Float32Array([
      0, 0, 1,
      0, 0, 1,
      0, 0, 1,
      0, 0, 1,
  ])
  
  const colors = new Float32Array([
      0, 1, 1, 1,
      1, 0, 1, 1,
      1, 1, 0, 1,
      1, 1, 1, 1,
  ])
  
  const indices = new Uint16Array([
      0, 1, 3,
      2, 3, 1,
  ])
    return (
      <group {...props} ref={mesh} rotation={[0,0,0]}>
      <mesh > 
        <Circle
       
     args={[.2,32]}
        center={[1.2, 1, 0]}
        position={[0.85, 1.25, 0]}
      >
      <meshStandardMaterial color={"red"} side={DoubleSide}/>
      </Circle>
      </mesh>
      <mesh >
        <bufferGeometry>
            <bufferAttribute
                attach='attributes-position'
                args={[positions,3]}
            />
            {/* <bufferAttribute
                attach='attributes-color'
                args={[colors,3]}
            /> */}
            
            <bufferAttribute
                attach='attributes-normal'
                args={[normals,3]}
            /> 
             {/* <bufferAttribute
                attach="index"
                array={indices}
                count={indices.length}
                itemSize={1}
            /> */}
            
        </bufferGeometry>
        <meshStandardMaterial
            vertexColors
            side={DoubleSide}
        />
    </mesh>
    </group>
      
    )
  }
  function Background(){
    const mesh = useRef()
    return(

      <>
        <mesh position={[0,0,-5]} >
          <planeGeometry args={[100,100]} center={[0,0,-5]} >
          <meshStandardMaterial color={"white"} side={DoubleSide}/>
          </planeGeometry>
      
        </mesh>
        <mesh position={[0,0,5]} >
          <planeGeometry args={[100,100]} center={[0,0,5]} >
          <meshStandardMaterial color={"white"} side={DoubleSide}/>
          </planeGeometry>
      
        </mesh>
        <mesh position={[-5,0,0]} rotation={[0,Math.PI/2,0]}>
          <planeGeometry args={[100,100]} center={[-5,0,0]}  />
          <meshStandardMaterial color={"white"} side={DoubleSide}/>
          {/* </planeGeometry> */}
      
        </mesh>
        <mesh position={[5,0,0]} rotation={[0,Math.PI/2,0]}>
          <planeGeometry args={[100,100]} center={[5,0,0]}  />
          <meshStandardMaterial color={"white"} side={DoubleSide}/>
          {/* </planeGeometry> */}
      
        </mesh>
        <mesh position={[0,-5,0]} rotation={[Math.PI/2,0,Math.PI/2]}>
          <planeGeometry args={[100,100]} center={[0,-5,0]}  />
          <meshStandardMaterial color={"white"} side={DoubleSide}/>
          {/* </planeGeometry> */}
      
        </mesh>
   
        <mesh position={[0,5,0]} rotation={[Math.PI/2,0,Math.PI/2]}>
          <planeGeometry args={[100,100]} center={[0,5,0]}  />
          <meshStandardMaterial color={"white"} side={DoubleSide}/>
          {/* </planeGeometry> */}
      
        </mesh>
      </>
    )
  }
function VI(){
return(
  <Canvas   camera={{ position: [7,2,0], fov: 40, far: 10000 ,zoom:1.5}} style={{height:"3.5rem" ,width:"3.5rem"}} shadows>
    {/* <Background/> */}
    <ambientLight />
    <pointLight position={[10, 10, 10]} />
    <rectAreaLight intensity={17} position={[0.5,0,5]} color={"red"}  width={30} height={30} lookAt={[0,0,0]} castShadow/>
    <LogoVI position={[0.5, 0, 0]}/>
    {/* <OrbitControls /> */}
  </Canvas>
)}
export default VI;
import {  FirstPersonControls, useLoader } from '@react-three/drei';
import { Perf } from 'r3f-perf';
import { Suspense } from 'react';
import { TextureLoader } from 'three'; // Importar TextureLoader desde three
import Model2 from './Model2';
/*KAREN PAOLA MORENO PALACIOS 1940254 */

export default function Experience() {
  const textureLoader = new TextureLoader();
  const texture = textureLoader.load('/static/4.jpeg');

  return (
    <>
      <Perf position="top-left" />

      < FirstPersonControls 
        position={[0, 0, 0]}
        movementSpeed = {0.5}
        lookSpeed ={ 0.1}
        lookVertical = {true}
        autoForward = {false}
        enabled ={ true}
        heightCoef = {1.5}
        constrainVertical = {true}
        verticalMin = {0}
        verticalMax = {Math.PI / 2}
      />

      <directionalLight castShadow position={[1, 2, 3]} intensity={1.5} />
      <ambientLight intensity={0.5} />

      <Suspense>
        <Model2 />
      </Suspense>
      
      <mesh receiveShadow position-y={-1} rotation-x={-Math.PI * 0.5} scale={10}>
        <planeGeometry  transparent={ true} alphaTest={ 0.5}/>
        <meshStandardMaterial map={texture} />
      </mesh>
      
      
    </>
  );
}
/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.2.4 -t ../../public/models/sd_model_v1.glb
*/

import * as THREE from 'three'
import { useGLTF } from '@react-three/drei'
import { GLTF } from 'three-stdlib'

type GLTFResult = GLTF & {
  nodes: {
    SK_Clip002: THREE.Mesh
    SK_Clip002_1: THREE.Mesh
  }
  materials: {
    M_SmartDoc_Body: THREE.MeshStandardMaterial
    M_SmartDoc_Head: THREE.MeshStandardMaterial
  }
}

export function SmartDoc(props: JSX.IntrinsicElements['group']) {
  const { nodes, materials } = useGLTF('./models/sd_model_v1.glb') as GLTFResult
  return (
    <group {...props} dispose={null}>
      <group scale={0.01}>
        <mesh geometry={nodes.SK_Clip002.geometry} material={materials.M_SmartDoc_Body} />
        <mesh geometry={nodes.SK_Clip002_1.geometry} material={materials.M_SmartDoc_Head} />
      </group>
    </group>
  )
}

useGLTF.preload('./models/sd_model_v1.glb')

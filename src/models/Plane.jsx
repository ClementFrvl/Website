import { useRef, useEffect } from 'react'
import planeScene from '../../assets/3d/plane.glb'
import { useAnimations, useGLTF } from '@react-three/drei'

const Plane = ({ isRotating, ...props}) => {
  const ref = useRef()
  const { scene, animations } = useGLTF(planeScene)
  const { actions } = useAnimations(animations, ref)

  useEffect(() => {
    console.log("isRotating", isRotating)
  }, [actions, isRotating])

  return (
    <mesh {...props}>
        <primitive object={scene} />
    </mesh>
  )
}

export default Plane
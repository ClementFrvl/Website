import React, { useRef, useEffect } from "react";
import { useGLTF } from "@react-three/drei";
import { useFrame, useThree } from "@react-three/fiber";
import { a } from "@react-spring/three";
import constructionScene from "../../assets/3d/construction.glb";

const Construction = (props) => {
    const constructionRef = useRef();
    const { gl, viewport } = useThree();
    const { nodes, materials } = useGLTF(constructionScene);
    return (
        <group {...props} dispose={null}>
        <group scale={0.01}>
            <group
            position={[500, 0, 0]}
            rotation={[-Math.PI / 2, 0, 0]}
            scale={100}
            >
            <mesh
                geometry={nodes.Cubo002_ConstructionMaterial_0.geometry}
                material={materials.ConstructionMaterial}
            />
            <mesh
                geometry={nodes.Cubo006_ConstructionMaterial_0.geometry}
                material={materials.ConstructionMaterial}
            />
            <mesh
                geometry={nodes.Cubo007_ConstructionMaterial_0.geometry}
                material={materials.ConstructionMaterial}
            />
            </group>
            <group rotation={[-Math.PI / 2, 0, 0]} scale={100}>
            <mesh
                geometry={nodes.Cilindro_ConstructionMaterial_0.geometry}
                material={materials.ConstructionMaterial}
                position={[0, 0, 10]}
                rotation={[0, Math.PI / 8, 0]}
            />
            <mesh
                geometry={nodes.Cilindro003_ConstructionMaterial_0.geometry}
                material={materials.ConstructionMaterial}
            />
            </group>
            <group
            position={[-500, 0, 0]}
            rotation={[-Math.PI / 2, 0, 0]}
            scale={100}
            >
            <mesh
                geometry={nodes.Cubo_ConstructionMaterial_0.geometry}
                material={materials.ConstructionMaterial}
            />
            <mesh
                geometry={nodes.Cilindro001_ConstructionMaterial_0.geometry}
                material={materials.ConstructionMaterial}
            />
            </group>
            <group
            position={[-250, 0, 0]}
            rotation={[-Math.PI / 2, 0, 0]}
            scale={100}
            >
            <mesh
                geometry={nodes.Cilindro002_ConstructionMaterial_0.geometry}
                material={materials.ConstructionMaterial}
            />
            <mesh
                geometry={nodes.Cubo003_ConstructionMaterial_0.geometry}
                material={materials.ConstructionMaterial}
            />
            </group>
        </group>
        </group>
    );
}

export default Construction;
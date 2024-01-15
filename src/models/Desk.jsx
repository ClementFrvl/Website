import React, { useRef, useEffect } from "react";
import { useGLTF } from "@react-three/drei";
import { useFrame, useThree } from "@react-three/fiber";
import { a } from "@react-spring/three";
import deskScene from "../../assets/3d/desk.glb";

const Desk = (props) => {
    const deskRef = useRef();
    const { gl, viewport } = useThree();
    const { nodes, materials } = useGLTF(deskScene);

    return (
        <group {...props} dispose={null}>
        <group rotation={[-Math.PI / 2, 0, 0]} scale={100}>
            <mesh
            geometry={nodes.Boxes_Boxes_0.geometry}
            material={materials.Boxes}
            />
            <mesh
            geometry={nodes.Boxes_B_Tranaparency_0.geometry}
            material={materials.B_Tranaparency}
            />
        </group>
        <group rotation={[-Math.PI / 2, 0, 0]} scale={100}>
            <mesh
            geometry={nodes.PC_Monitor_PC_Monitor_0.geometry}
            material={materials.PC_Monitor}
            />
            <mesh
            geometry={nodes.PC_Monitor_PC_Screen_0.geometry}
            material={materials.PC_Screen}
            />
        </group>
        <group rotation={[-Math.PI / 2, 0, 0]} scale={100}>
            <mesh
            geometry={nodes.PC_Keyboard_PC_Keyboard_0.geometry}
            material={materials.material_0}
            />
            <mesh
            geometry={nodes.PC_Keyboard_Keyboard_light_0.geometry}
            material={materials.Keyboard_light}
            />
        </group>
        <group rotation={[-Math.PI / 2, 0, 0]} scale={100}>
            <mesh
            geometry={nodes.Cell_phone_Cell_phone_0.geometry}
            material={materials.Cell_phone}
            />
            <mesh
            geometry={nodes.Cell_phone_Cell_screen_0.geometry}
            material={materials.Cell_screen}
            />
        </group>
        <mesh
            geometry={nodes.Desk_Desk_0.geometry}
            material={materials.Desk}
            rotation={[-Math.PI / 2, 0, 0]}
            scale={100}
        />
        <mesh
            geometry={nodes.Paper_Paper_0.geometry}
            material={materials.Paper}
            rotation={[-Math.PI / 2, 0, 0]}
            scale={100}
        />
        <mesh
            geometry={nodes.PC_Speaker_PC_Speakers_0.geometry}
            material={materials.PC_Speakers}
            rotation={[-Math.PI / 2, 0, 0]}
            scale={100}
        />
        <mesh
            geometry={nodes.Keyboard_wire_WIre_0.geometry}
            material={materials.WIre}
            rotation={[-Math.PI / 2, 0, 0]}
            scale={100}
        />
        <mesh
            geometry={nodes.PC_Mouse_PC_Mouse_0.geometry}
            material={materials.PC_Mouse}
            scale={100}
        />
        <mesh
            geometry={nodes.Mouse_wire_WIre_0.geometry}
            material={materials.WIre}
            position={[0, 0, -47.153]}
            rotation={[-Math.PI / 2, 0, 0]}
            scale={100}
        />
        <mesh
            geometry={nodes.Books_Books_0.geometry}
            material={materials.Books}
            rotation={[-Math.PI / 2, 0, 0]}
            scale={100}
        />
        <mesh
            geometry={nodes.Notebook_Notebook_0.geometry}
            material={materials.Notebook}
            rotation={[-Math.PI / 2, 0, 0]}
            scale={100}
        />
        <mesh
            geometry={nodes.Notebook_wire_WIre_0.geometry}
            material={materials.WIre}
            position={[0, 0, 290.967]}
            rotation={[-Math.PI / 2, 0, 0]}
            scale={100}
        />
        <mesh
            geometry={nodes.Pen_Pen_0.geometry}
            material={materials.material_1}
            rotation={[-Math.PI / 2, 0, 0]}
            scale={100}
        />
        <mesh
            geometry={nodes.Eraser_Eraser_0.geometry}
            material={materials.Eraser}
            rotation={[-Math.PI / 2, 0, 0]}
            scale={100}
        />
        <mesh
            geometry={nodes.Dish_Cup_0.geometry}
            material={materials.material}
            rotation={[-Math.PI / 2, 0, 0]}
            scale={100}
        />
        <mesh
            geometry={nodes.Mousepad_Mousepad_0.geometry}
            material={materials.Mousepad}
            rotation={[-Math.PI / 2, 0, 0]}
            scale={100}
        />
        </group>
    );
}

export default Desk;
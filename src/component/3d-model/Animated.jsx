import React, { useEffect, useRef,useState} from "react";
import { useGLTF,useAnimations } from "@react-three/drei";

export default function Model(props) {
  const group = useRef();
  const { nodes, materials, animations } = useGLTF("/animated.glb");
  const {  actions, names} = useAnimations(animations, group);
  
 
  const [index, setIndex] = useState(8);
  const [index2] = useState(1);
// Change animation when the index changes
useEffect(() => {
  // Reset and fade in animation after an index has been changed
  actions[names[index]].reset().fadeIn(0.5).play()
  // In the clean-up phase=> fade it out
  return () => actions[names[index]].fadeOut(0.5)
}, [index, actions, names])

useEffect(() => {
  const timeoutId = setTimeout(() => {

    setIndex(index2);
  }, 2000);

  return () => clearTimeout(timeoutId);
}, []);

  
  return (
    <group    ref={group}    {...props}    dispose={null}  >
      <group rotation={[Math.PI / 2, 0, 0]} scale={0.01}>
        <primitive object={nodes.mixamorigHips} />

        <skinnedMesh
          geometry={nodes.Wolf3D_Outfit_Top001_1.geometry}
          material={materials["Wolf3D_Outfit_Top.001"]}
          skeleton={nodes.Wolf3D_Outfit_Top001_1.skeleton}
          morphTargetDictionary={
            nodes.Wolf3D_Outfit_Top001_1.morphTargetDictionary
          }
          morphTargetInfluences={
            nodes.Wolf3D_Outfit_Top001_1.morphTargetInfluences
          }
        />
        <skinnedMesh
          geometry={nodes.Wolf3D_Outfit_Top001_2.geometry}
          material={materials["Wolf3D_Eye.001"]}
          skeleton={nodes.Wolf3D_Outfit_Top001_2.skeleton}
          morphTargetDictionary={
            nodes.Wolf3D_Outfit_Top001_2.morphTargetDictionary
          }
          morphTargetInfluences={
            nodes.Wolf3D_Outfit_Top001_2.morphTargetInfluences
          }
        />
        <skinnedMesh
          geometry={nodes.Wolf3D_Outfit_Top001_3.geometry}
          material={materials["Wolf3D_Skin.001"]}
          skeleton={nodes.Wolf3D_Outfit_Top001_3.skeleton}
          morphTargetDictionary={
            nodes.Wolf3D_Outfit_Top001_3.morphTargetDictionary
          }
          morphTargetInfluences={
            nodes.Wolf3D_Outfit_Top001_3.morphTargetInfluences
          }
        />
        <skinnedMesh
          geometry={nodes.Wolf3D_Outfit_Top001_4.geometry}
          material={materials["Wolf3D_Teeth.001"]}
          skeleton={nodes.Wolf3D_Outfit_Top001_4.skeleton}
          morphTargetDictionary={
            nodes.Wolf3D_Outfit_Top001_4.morphTargetDictionary
          }
          morphTargetInfluences={
            nodes.Wolf3D_Outfit_Top001_4.morphTargetInfluences
          }
        />
        <skinnedMesh
          geometry={nodes.Wolf3D_Outfit_Top001_5.geometry}
          material={materials["Wolf3D_Body.001"]}
          skeleton={nodes.Wolf3D_Outfit_Top001_5.skeleton}
          morphTargetDictionary={
            nodes.Wolf3D_Outfit_Top001_5.morphTargetDictionary
          }
          morphTargetInfluences={
            nodes.Wolf3D_Outfit_Top001_5.morphTargetInfluences
          }
        />
        <skinnedMesh
          geometry={nodes.Wolf3D_Outfit_Top001_6.geometry}
          material={materials["Wolf3D_Outfit_Bottom.001"]}
          skeleton={nodes.Wolf3D_Outfit_Top001_6.skeleton}
          morphTargetDictionary={
            nodes.Wolf3D_Outfit_Top001_6.morphTargetDictionary
          }
          morphTargetInfluences={
            nodes.Wolf3D_Outfit_Top001_6.morphTargetInfluences
          }
        />
        <skinnedMesh
          geometry={nodes.Wolf3D_Outfit_Top001_7.geometry}
          material={materials["Wolf3D_Outfit_Footwear.001"]}
          skeleton={nodes.Wolf3D_Outfit_Top001_7.skeleton}
          morphTargetDictionary={
            nodes.Wolf3D_Outfit_Top001_7.morphTargetDictionary
          }
          morphTargetInfluences={
            nodes.Wolf3D_Outfit_Top001_7.morphTargetInfluences
          }
        />
        <skinnedMesh
          geometry={nodes.Wolf3D_Outfit_Top001_8.geometry}
          material={materials["Wolf3D_Hair.001"]}
          skeleton={nodes.Wolf3D_Outfit_Top001_8.skeleton}
          morphTargetDictionary={
            nodes.Wolf3D_Outfit_Top001_8.morphTargetDictionary
          }
          morphTargetInfluences={
            nodes.Wolf3D_Outfit_Top001_8.morphTargetInfluences
          }
        />
        <skinnedMesh
          geometry={nodes.Wolf3D_Outfit_Top001_9.geometry}
          material={materials["Wolf3D_Glasses.001"]}
          skeleton={nodes.Wolf3D_Outfit_Top001_9.skeleton}
          morphTargetDictionary={
            nodes.Wolf3D_Outfit_Top001_9.morphTargetDictionary
          }
          morphTargetInfluences={
            nodes.Wolf3D_Outfit_Top001_9.morphTargetInfluences
          }
        />
      </group>
    </group>
  );
}


useGLTF.preload("/animated.glb");

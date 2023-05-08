import { useRef } from 'react';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';
import { extend, useThree, useFrame } from "@react-three/fiber";

extend({ OrbitControls });

function CustomOrbitControls() {
    const { camera, gl } = useThree();
    const controls = useRef();
  
    useFrame(() => {
      if (controls.current) {
        controls.current.update();
      }
    });
  
    return (
      <orbitControls
        ref={controls}
        args={[camera, gl.domElement]}
        enableRotate={true}
        enableZoom={false}
        enablePan={false}
        minPolarAngle={0}
        maxPolarAngle={Math.PI}
        rotateSpeed={0.30}
      />
    );
  }
  

export default CustomOrbitControls;

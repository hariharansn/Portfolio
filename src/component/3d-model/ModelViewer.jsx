import { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import Animated from "./Animated";
import CustomOrbitControls from "./CustomOrbitalControls";

function ModelViewer() {
  
  return (
    <>
      <Canvas camera={{ position: [0.1, 1.5, 3] }}>
      <ambientLight intensity={1} color="white" />
        <pointLight intensity={2} position={[-1, 1, 3]} color="red" />
        <pointLight intensity={2} position={[1, 1, 3]} color="blue" />
       <Suspense fallback={null}>
          <Animated />
          
        </Suspense>
        
       <CustomOrbitControls/>
      </Canvas>
    
    </>
  );
}
export default ModelViewer;

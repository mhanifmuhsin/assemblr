import { Suspense, useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, useGLTF } from "@react-three/drei";

function Model({ ...props }) {
  const group = useRef();
  const { nodes, materials } = useGLTF("/furniture1.glb");
  return (
    <group ref={group} {...props} dispose={null}>
      <group position={[0, 40.99, 0]} scale={43.31}>
        <mesh
          geometry={nodes.HUG_ARMCHAIRHUG_Armchair_602_014.geometry}
          material={materials.Base}
        />
      </group>
    </group>
  );
}
function Content() {
  return (
    <div className="py-2">
      <Canvas camera={{ fov: 100, position: [-100, 0, 15] }}>
        <Suspense fallback={null}>
          <ambientLight />
          <directionalLight intensity={2} position={[0, 40.99, 0]} />
          <Model />
          <OrbitControls enableZoom={false} enableRotate={true} />
          {/* <OrbitControls enablePan={true} enableZoom={true} enableRotate={true} /> */}
        </Suspense>
      </Canvas>
    </div>
  );
}

export default Content;

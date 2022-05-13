import { Suspense, useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, useGLTF } from "@react-three/drei";

function Model({ ...props }) {
  const group = useRef();
  const { nodes, materials } = useGLTF("/furniture2.glb");
  return (
    <group ref={group} {...props} dispose={null}>
      <mesh
        geometry={nodes.Circle005.geometry}
        material={materials["02 - VRay Material"]}
        rotation={[-Math.PI, -Math.PI / 2, 0]}
      />
      <mesh
        geometry={nodes.Cylinder003.geometry}
        material={materials["derevo star.saltov"]}
        rotation={[0, 1.57, 0]}
      />
    </group>
  );
}
function Content1() {
  return (
    <div className="py-2 border">
      <Canvas camera={{ fov: 10, position: [-100, 0, 15] }}>
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

export default Content1;

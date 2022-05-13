import { Suspense, useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, useGLTF } from "@react-three/drei";

function Model({ ...props }) {
  const group = useRef();
  const { nodes, materials } = useGLTF("/furniture4.glb");
  return (
    <group ref={group} {...props} dispose={null}>
      <mesh
        geometry={nodes.ChairSoborgOak.geometry}
        material={materials.Material}
        rotation={[0, -0.42, 0]}
      >
        <mesh
          geometry={nodes.Circle001_1.geometry}
          material={materials.AllenScrew}
        />
        <mesh
          geometry={nodes.Circle001_2.geometry}
          material={materials.AllenScrewHole}
        />
        <mesh
          geometry={nodes.Circle005.geometry}
          material={materials.AllenScrew}
        />
        <mesh
          geometry={nodes.Circle005_1.geometry}
          material={materials.AllenScrewHole}
        />
        <group position={[0, 0, 0.01]}>
          <mesh
            geometry={nodes.Circle006.geometry}
            material={materials.AllenScrew}
          />
          <mesh
            geometry={nodes.Circle006_1.geometry}
            material={materials.AllenScrewHole}
          />
        </group>
        <group position={[0, 0, 0.01]}>
          <mesh
            geometry={nodes.Circle004.geometry}
            material={materials.AllenScrew}
          />
          <mesh
            geometry={nodes.Circle004_1.geometry}
            material={materials.AllenScrewHole}
          />
        </group>
        <mesh
          geometry={nodes.Cube001_1.geometry}
          material={materials.Material}
        />
        <mesh geometry={nodes.Cube002.geometry} material={materials.Material} />
        <mesh geometry={nodes.Plane.geometry} material={materials.Material} />
        <mesh
          geometry={nodes.Plane001.geometry}
          material={materials.Material}
          position={[0, 0, 0.01]}
        />
      </mesh>
    </group>
  );
}

function Content3() {
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

export default Content3;

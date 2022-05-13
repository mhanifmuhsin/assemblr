import { Suspense, useRef } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, useGLTF } from "@react-three/drei";

function Model({ ...props }) {
  const group = useRef();
  const { nodes, materials } = useGLTF("/furniture3.glb");
  return (
    <group ref={group} {...props} dispose={null}>
      <mesh
        geometry={nodes.Object002.geometry}
        material={materials.Wood_01}
        position={[0, 7.06, 6.85]}
        scale={0.03}
      />
      <mesh
        geometry={nodes.Plane001.geometry}
        material={materials.Metall_Hrom_01}
        position={[-0.02, 19.25, -4.63]}
        scale={0.03}
      />
      <mesh
        geometry={nodes.Object001.geometry}
        material={materials.Pupki_01}
        position={[-5.55, 12.23, 3.09]}
        scale={0.03}
      />
      <mesh
        geometry={nodes.Box029.geometry}
        material={materials.Skin_02}
        position={[-0.02, 17.86, 0.93]}
        scale={0.03}
      />
      <mesh
        geometry={nodes.Shape001.geometry}
        material={materials.Strochka_02}
        position={[-0.03, 17.86, 0.93]}
        scale={0.03}
      />
    </group>
  );
}
function Content2() {
  return (
    <div className="py-2">
      <Canvas camera={{ fov: 30, position: [-100, 0, 15] }}>
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

export default Content2;

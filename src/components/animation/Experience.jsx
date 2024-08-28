import {
  ContactShadows,
  Environment,
  OrbitControls,
  Sky,
} from "@react-three/drei";
import { Avatar } from "./Avatar";
import { useControls } from "leva";
import { Desk } from "./Desk";

const Experience = () => {
  const { animation } = useControls({
    animation: {
      value: "Typing",
      options: ["Typing", "Falling", "Standing"],
    },
  });

  return (
    <>
      <OrbitControls enableZoom={false} />

      <Sky />
      <Environment preset="sunset" />
      <group position-y={-1}>
        <ContactShadows
          opacity={0.42}
          scale={10}
          blur={1}
          far={10}
          resolution={256}
          color="#000000"
        />
        <group
          position={[0, 0.08, 1.3]}
          rotation={[0, Math.PI / 1, 0]} // Rotate Avatar to face the desk
          scale={[1, 1, 1]} // Adjust the scale if necessary
        >
          <Avatar animation={animation} />
        </group>
        {animation === "Typing" && (
          <mesh>
            <Desk
              position={[0, 0, 0]}
              scale={[1, 1, 1]}
              animation={animation}
            />
            {/* <boxGeometry /> */}
            {/* <meshStandardMaterial color="white" /> */}
          </mesh>
        )}
        {/* <mesh scale={5} rotation-x={-Math.PI * 0.5} position-y={-0.01}>
          <planeGeometry />
          <meshStandardMaterial color="white" />
        </mesh> */}
      </group>
    </>
  );
};

export default Experience;

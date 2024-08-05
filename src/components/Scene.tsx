'use client';
import { Canvas, useFrame } from '@react-three/fiber';
import HeadPhonesMockup from './HeadphonesMockup';
import CameraControl from './CameraControl';
import {
	Center,
	Plane,
	Text,
	CameraControls,
	useHelper,
	Environment,
	Box,
	ContactShadows,
} from '@react-three/drei';
import { DirectionalLight, PointLight } from 'three';
import { useMemo, useRef } from 'react';
import Floor from './Floor';
import { useStore } from '@/lib/store';

export default function Scene() {
	return (
		<Canvas
			camera={{
				fov: 25,
				near: 0.1,
				far: 200,
			}}
			style={{ width: '100vw', height: '100vh' }}
		>
			<Lights />
			<ContactShadows
				rotation-x={Math.PI / 2}
				position={[0, -2.45, 0]}
				resolution={512}
				width={10}
				height={10}
				blur={1}
				far={10}
			/>

			{/* <BoxModel position={[0, -2.5, 0]} /> */}
			{/* <Floor rotation={[-Math.PI / 2, 0, 0]} position={[0, -2.5, 0]} /> */}
			<CameraControl>
				<Center position={[0, 1.5, 0]}>
					<HeadPhonesMockup />
				</Center>
			</CameraControl>
			<Text
				fontSize={2.5}
				letterSpacing={-0.05}
				rotation={[0, 0, 0]}
				position={[0, 0, -5]}
				castShadow
			>
				SP{'     '}_01
				<meshStandardMaterial color="#fff" />
			</Text>
			{/* <CameraControls /> */}
			<Environment preset="city" />
		</Canvas>
	);
}

const Lights = () => {
	const { introScreen } = useStore();
	const pointLightRef = useRef<PointLight>(null);
	const pointLightRef2 = useRef<PointLight>(null);
	const directionalLightRef = useRef<DirectionalLight>(null);

	// Attach PointLightHelper to the PointLight
	// useHelper(
	// 	pointLightRef as React.MutableRefObject<PointLight>,
	// 	PointLightHelper,
	// 	0.2,
	// 	'white'
	// );
	// useHelper(
	// 	pointLightRef2 as React.MutableRefObject<PointLight>,
	// 	PointLightHelper,
	// 	0.2,
	// 	'white'
	// );
	// useHelper(
	// 	directionalLightRef as React.MutableRefObject<DirectionalLight>,
	// 	DirectionalLightHelper,
	// 	0.2,
	// 	'white'
	// );

	return (
		<>
			<pointLight
				visible={!introScreen}
				position={[3.5, -1.2, -4]}
				intensity={8}
				color={'#ff0000'}
				castShadow
				ref={pointLightRef}
			/>
			<pointLight
				visible={!introScreen}
				position={[-3.5, -1.2, -4]}
				color={'#0000ff'}
				intensity={8}
				castShadow
				ref={pointLightRef2}
			/>
			<directionalLight
				position={[0, 5, 0]}
				intensity={5}
				lookAt={HeadPhonesMockup}
				castShadow
				ref={directionalLightRef}
				shadow-mapSize-width={1024}
				shadow-mapSize-height={1024}
				shadow-camera-near={0.5}
				shadow-camera-far={50}
			/>
		</>
	);
};

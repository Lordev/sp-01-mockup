'use client';
import { Canvas, useFrame } from '@react-three/fiber';
import HeadPhonesMockup from './HeadphonesMockup';
import CameraControl from './CameraControl';
import {
	Center,
	useHelper,
	Environment,
	ContactShadows,
} from '@react-three/drei';
import { DirectionalLight, PointLight, DirectionalLightHelper } from 'three';
import { useMemo, useRef } from 'react';
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
				position={[0, -4.45, 0]}
				resolution={512}
				width={10}
				height={10}
				blur={1}
				far={10}
			/>
			<CameraControl>
				<Center>
					<HeadPhonesMockup />
				</Center>
			</CameraControl>
			{/* <Text
				fontSize={2.5}
				letterSpacing={-0.05}
				rotation={[0, 0, 0]}
				position={[0, 0, -5]}
				castShadow
			>
				SP{'     '}_01
				<meshStandardMaterial color="#fff" />
			</Text> */}
			{/* <CameraControls /> */}
			<Environment preset="city" />
		</Canvas>
	);
}

const Lights = () => {
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
				position={[1.5, -3.5, -1]}
				intensity={1}
				color={'#ff0000'}
				castShadow
				ref={pointLightRef}
			/>
			<pointLight
				position={[-1.5, -3.5, -1]}
				color={'#ff0000'}
				intensity={1}
				castShadow
				ref={pointLightRef2}
			/>
			<directionalLight
				position={[0, 5, 4]}
				intensity={4}
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

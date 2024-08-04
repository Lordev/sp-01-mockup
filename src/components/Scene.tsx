'use client';
import { Canvas, useFrame } from '@react-three/fiber';
import HeadPhonesMockup from './HeadphonesMockup';
import CameraControl from './CameraControl';
import { Center, Plane, Text } from '@react-three/drei';
import Background from './Background';

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
			<ambientLight intensity={0.5} />
			<pointLight position={[2, 1, 1]} intensity={20} castShadow />
			<pointLight position={[-2, 1, 1]} intensity={10} castShadow />
			<CameraControl>
				<Background />
				<Center position={[0, 1.3, 0]}>
					<HeadPhonesMockup />
				</Center>
			</CameraControl>
			<Text
				fontSize={2.5}
				letterSpacing={-0.05}
				rotation={[0, 0, 0]}
				position={[0, 0, -2]}
				castShadow
			>
				SP{'     '}_01
				<meshStandardMaterial color="#fff" />
			</Text>
		</Canvas>
	);
}

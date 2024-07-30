'use client';
import { Canvas, useFrame } from '@react-three/fiber';
import HeadPhonesMockup from './HeadphonesMockup';
import CameraControl from './CameraControl';
import { Center, Text } from '@react-three/drei';

export default function Scene() {
	return (
		<Canvas
			camera={{
				fov: 25,
				position: [0, 0, 8],
				near: 0.1,
				far: 200,
			}}
			style={{ width: '100vw', height: '100vh' }}
		>
			<ambientLight intensity={1} />
			<pointLight position={[2, 1, 1]} intensity={5} />
			<pointLight position={[-2, 1, 1]} intensity={5} />
			<CameraControl>
				<Center>
					<HeadPhonesMockup />
				</Center>
			</CameraControl>
			<Text
				fontSize={2.5}
				letterSpacing={-0.05}
				rotation={[0, 0, 0]}
				position={[0, 0, -2]}
			>
				SP{'     '}_01
				<meshToonMaterial color="#fff" />
			</Text>
		</Canvas>
	);
}

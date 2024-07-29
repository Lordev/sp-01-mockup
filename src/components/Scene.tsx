'use client';
import { Canvas } from '@react-three/fiber';
import HeadPhonesMockup from './HeadphonesMockup';

export default function Scene() {
	return (
		<Canvas
			camera={{
				fov: 75,
				position: [0, 1, 3.8],
				near: 0.1,
				far: 1000,
			}}
			style={{ width: '100vw', height: '100vh', zIndex: 10 }}
		>
			<ambientLight intensity={1} />
			<pointLight position={[2, 1, 1]} intensity={5} />
			<pointLight position={[-2, 1, 1]} intensity={5} />
			<HeadPhonesMockup />
		</Canvas>
	);
}

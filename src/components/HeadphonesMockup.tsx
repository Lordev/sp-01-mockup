'use client';
import React, { useRef } from 'react';
import { Clone, useGLTF } from '@react-three/drei';
import { useFrame } from '@react-three/fiber';
import { useStore } from '@/lib/store';
import { easing } from 'maath';
import { Group, Object3D, Mesh } from 'three';

const coloredMeshes = ['Circle001', 'Cube002'];

export default function HeadPhonesMockup({}) {
	const { introScreen } = useStore();
	const headphoneRef = useRef<Group>(null);

	const { nodes } = useGLTF('/headphone/headphone.gltf');

	useFrame((state, delta) => {
		if (headphoneRef.current) {
			if (introScreen) {
				easing.damp3(
					headphoneRef.current.position,
					[0, -1, 0.3],
					0.4,
					delta
				);
				easing.dampE(
					headphoneRef.current.rotation,
					[-Math.PI / 8, -Math.PI / 3, 0],
					0.4,
					delta
				);
			} else {
				easing.damp3(
					headphoneRef.current.position,
					[0, -1, 0],
					0.4,
					delta
				);
				easing.dampE(
					headphoneRef.current.rotation,
					[0, Math.PI / 1, 0],
					0.4,
					delta
				);
			}
		}
	});
	[];
	const applyCustomMaterial = (object: Object3D): JSX.Element | null => {
		if ((object as Mesh).isMesh) {
			switch (object.name) {
				case 'Cube':
					return <meshStandardMaterial color="#4c4c4c" />;
				case 'Cube001':
					return <meshStandardMaterial color="darkred" />;
				case 'Cube002':
					return <meshStandardMaterial color="#4c4c4c" />;
				case 'Circle001':
					return <meshStandardMaterial color="#4c4c4c" />;
				case 'Circle002':
					return <meshStandardMaterial color="darkred" />;
				default:
					return <meshStandardMaterial color="#4c4c4c" />;
			}
		}
		return null;
	};

	return nodes && nodes.Headphone ? (
		<Clone
			ref={headphoneRef}
			object={nodes.Headphone}
			position={[0, -1, 0]}
			rotation={[0, 0, 0]}
			scale={0.008}
			inject={applyCustomMaterial}
		/>
	) : null;
}

// Ensure the GLTF file is preloaded
useGLTF.preload('/headphone/headphone.gltf');

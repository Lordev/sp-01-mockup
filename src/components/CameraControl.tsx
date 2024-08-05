'use client';
import { useFrame } from '@react-three/fiber';
import { easing } from 'maath';
import { useRef } from 'react';
import { Group } from 'three';

export default function CameraControl({
	children,
}: {
	children: React.ReactNode;
}) {
	const group = useRef<Group | null>(null);

	useFrame((state, delta) => {
		easing.damp3(state.camera.position, [0, 3, 12], 0.8, delta);
		easing.dampE(state.camera.rotation, [-Math.PI / 15, 0, 0], 0.8, delta);
		group.current
			? easing.dampE(
					group.current.rotation,
					[state.pointer.y / 10, -state.pointer.x / 5, 0],
					0.25,
					delta
			  )
			: null;
	});

	return <group ref={group}>{children}</group>;
}

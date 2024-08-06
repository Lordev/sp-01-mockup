'use client';
import { useFrame } from '@react-three/fiber';
import { easing } from 'maath';
import { useRef } from 'react';
import { Group } from 'three';
import { useStore } from '@/lib/store';

export default function CameraControl({
	children,
}: {
	children: React.ReactNode;
}) {
	const { introScreen } = useStore();
	const group = useRef<Group | null>(null);

	useFrame((state, delta) => {
		easing.damp3(
			state.camera.position,
			[0, introScreen ? 3.5 : 2.5, introScreen ? 15 : 10],
			0.25,
			delta
		);
		easing.dampE(state.camera.rotation, [-Math.PI / 15, 0, 0], 0.8, delta);
		group.current && !introScreen
			? easing.dampE(
					group.current.rotation,
					[-state.pointer.y / 15, state.pointer.x / 10, 0],
					0.25,
					delta
			  )
			: null;
	});

	return <group ref={group}>{children}</group>;
}

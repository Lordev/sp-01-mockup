'use client';
import React, { useRef, useEffect, useState } from 'react';
import { useGLTF, Html } from '@react-three/drei';
import { useFrame } from '@react-three/fiber';
import { useStore } from '@/lib/store';
import { easing } from 'maath';
import { Group, Mesh, MeshStandardMaterial, Color } from 'three';

export default function HeadPhonesMockup() {
	const { introScreen, prevColor, currentColor } = useStore();
	const [viewport, setViewport] = useState({
		width: window.innerWidth,
		height: window.innerHeight,
	});

	useEffect(() => {
		function handleResize() {
			setViewport({
				width: window.innerWidth,
				height: window.innerHeight,
			});
		}

		window.addEventListener('resize', handleResize);
		return () => window.removeEventListener('resize', handleResize);
	}, []);

	const headphoneRef = useRef<Group>(null);

	const { nodes } = useGLTF('/headphone-glb/headphone.glb');

	const circle = nodes.Scene.getObjectByName('Circle') as Mesh | undefined;
	const circle2 = nodes.Scene.getObjectByName('Circle001') as
		| Mesh
		| undefined;
	const earCup = nodes.Scene.getObjectByName('Circle002') as Mesh | undefined;
	const cube = nodes.Scene.getObjectByName('Cube001') as Mesh | undefined;
	const cube2 = nodes.Scene.getObjectByName('Cube002') as Mesh | undefined;
	const cube3 = nodes.Scene.getObjectByName('Cube001_1') as Mesh | undefined;

	const createMaterialWithColor = (
		originalMaterial: MeshStandardMaterial | undefined,
		initialColor: string
	) => {
		if (originalMaterial) {
			const newMaterial = originalMaterial.clone();
			newMaterial.color.set(initialColor);
			return newMaterial;
		}
		return null;
	};

	// Clone materials with initial colors
	const circleMaterial = useRef(
		createMaterialWithColor(
			circle?.material as MeshStandardMaterial,
			prevColor.main
		)
	);
	const circle2Material = useRef(
		createMaterialWithColor(
			circle2?.material as MeshStandardMaterial,
			prevColor.main
		)
	);
	const cubeMaterial = useRef(
		createMaterialWithColor(
			cube?.material as MeshStandardMaterial,
			prevColor.main
		)
	);
	const cube2Material = useRef(
		createMaterialWithColor(
			cube2?.material as MeshStandardMaterial,
			prevColor.main
		)
	);
	const cube3Material = useRef(
		createMaterialWithColor(
			cube3?.material as MeshStandardMaterial,
			prevColor.accent
		)
	);
	const earCupMaterial = useRef(
		createMaterialWithColor(
			earCup?.material as MeshStandardMaterial,
			prevColor.accent
		)
	);

	useEffect(() => {
		// Update materials when currentColor changes
		if (circleMaterial.current) {
			circleMaterial.current.color.set(prevColor.main);
		}
		if (circle2Material.current) {
			circle2Material.current.color.set(prevColor.main);
		}
		if (cubeMaterial.current) {
			cubeMaterial.current.color.set(prevColor.main);
		}
		if (cube2Material.current) {
			cube2Material.current.color.set(prevColor.main);
		}
		if (cube3Material.current) {
			cube3Material.current.color.set(prevColor.accent);
		}
		if (earCupMaterial.current) {
			earCupMaterial.current.color.set(prevColor.accent);
		}
	}, [prevColor]);

	const modelScale = Math.min(viewport.width / 800, 1);

	useFrame((state, delta) => {
		if (headphoneRef.current) {
			if (introScreen) {
				easing.damp3(
					headphoneRef.current.position,
					[0, -2.4, 3],
					0.7,
					delta
				);
				easing.dampE(
					headphoneRef.current.rotation,
					[-Math.PI / 1.5, 0, Math.PI / 4],
					0.7,
					delta
				);
			} else {
				easing.damp3(
					headphoneRef.current.position,
					[0, -2.4, 3],
					0.7,
					delta
				);
				easing.dampE(
					headphoneRef.current.rotation,
					[-Math.PI / 2, 0, -Math.PI * 5],
					0.7,
					delta
				);
			}
		}

		// Smooth transition of colors from prevColor to currentColor
		if (circleMaterial.current) {
			easing.dampC(
				circleMaterial.current.color,
				new Color(currentColor.main),
				0.25,
				delta
			);
		}
		if (circle2Material.current) {
			easing.dampC(
				circle2Material.current.color,
				new Color(currentColor.main),
				0.25,
				delta
			);
		}
		if (cubeMaterial.current) {
			easing.dampC(
				cubeMaterial.current.color,
				new Color(currentColor.main),
				0.25,
				delta
			);
		}
		if (cube2Material.current) {
			easing.dampC(
				cube2Material.current.color,
				new Color(currentColor.main),
				0.25,
				delta
			);
		}
		if (cube3Material.current) {
			easing.dampC(
				cube3Material.current.color,
				new Color(currentColor.accent),
				0.25,
				delta
			);
		}
		if (earCupMaterial.current) {
			easing.dampC(
				earCupMaterial.current.color,
				new Color(currentColor.accent),
				0.25,
				delta
			);
		}
	});

	return nodes ? (
		<group ref={headphoneRef} scale={modelScale}>
			{circleMaterial.current && (
				<mesh
					geometry={circle?.geometry}
					material={circleMaterial.current}
					rotation={[0, -0.2, 0]}
					position={[-1.82, -0.0, 0.3]}
					scale={0.99}
					castShadow
				/>
			)}

			{circle2Material.current && (
				<mesh
					geometry={circle2?.geometry}
					material={circle2Material.current}
					rotation={[0, -0.2, 0]}
					position={[-1.9, 0, 2]}
					castShadow
				/>
			)}

			{earCupMaterial.current && (
				<mesh
					geometry={earCup?.geometry}
					material={earCupMaterial.current}
					rotation={[0, -0.2, 0]}
					position={[-1.79, -0.02, 0.32]}
					scale={[1.03, 1.03, 1.03]}
					castShadow
				/>
			)}

			{cubeMaterial.current && (
				<mesh
					geometry={cube?.geometry}
					material={cubeMaterial.current}
					position={[0.06, 0, 0.3]}
					castShadow
				/>
			)}

			{cube3Material.current && (
				<mesh
					geometry={cube3?.geometry}
					material={cube3Material.current}
					position={[0.06, 0, 0.35]}
					castShadow
				/>
			)}
		</group>
	) : null;
}

// Ensure the GLTF file is preloaded
useGLTF.preload('/headphone-glb/headphone.glb');

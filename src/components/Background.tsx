import { useMemo } from 'react';
import { Plane } from '@react-three/drei';
import { MeshBasicMaterial } from 'three';

export default function Background() {
	// Create the material with useMemo to ensure it's not recreated on every render
	const material = useMemo(
		() => new MeshBasicMaterial({ color: '#ffffff' }),
		[]
	);

	return (
		<Plane
			args={[15, 15]}
			position={[0, 0, -4]}
			material={material}
			receiveShadow
		/>
	);
}

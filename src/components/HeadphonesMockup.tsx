import { Gltf } from '@react-three/drei';

export default function HeadPhonesMockup() {
	return (
		<Gltf
			src="/headphone/3d-headphone.gltf"
			position={[0, -1.5, 0]}
			rotation={[0, 0, 0]}
		/>
	);
}

import { Text } from '@react-three/drei';

export default function TextHeader({}) {
	return (
		<Text font={'var(--font-antonio)'} fontSize={4} letterSpacing={-0.05}>
			SP_01
			<meshToonMaterial color="#fff" />
		</Text>
	);
}

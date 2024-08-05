interface BoxModelProps extends React.HTMLAttributes<HTMLDivElement> {}

export default function BoxModel({ ...props }) {
	return (
		<mesh castShadow {...props}>
			<boxGeometry args={[1, 1, 1]} />
			<meshStandardMaterial color={'#533'} />
		</mesh>
	);
}

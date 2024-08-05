interface FloorProps extends React.HTMLAttributes<HTMLDivElement> {}

export default function Floor({ ...props }) {
	return (
		<mesh receiveShadow {...props}>
			<planeGeometry args={[15, 15]} />
			<meshStandardMaterial color="#555" />
		</mesh>
	);
}

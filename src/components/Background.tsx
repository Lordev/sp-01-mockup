'use client';
import React, { useEffect, useState } from 'react';
import { useStore } from '@/lib/store';
import { motion } from 'framer-motion';

export default function Background({
	children,
}: {
	children: React.ReactNode;
}) {
	const { currentColor } = useStore();
	const [background, setBackground] = useState(
		`linear-gradient(120deg, ${currentColor.main} 50%, ${currentColor.accent} 50%)`
	);

	useEffect(() => {
		setBackground(
			`linear-gradient(120deg, ${currentColor.main} 50%, ${currentColor.accent} 50%)`
		);
	}, [currentColor]);

	return (
		<motion.div
			className="w-full h-full min-h-screen"
			style={{
				background: `linear-gradient(120deg, ${currentColor.main} 50%, ${currentColor.accent} 50%)`,
				transition: 'background 2.5s ease-in-out',
			}}
			animate={{ background }}
		>
			{children}
		</motion.div>
	);
}

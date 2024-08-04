'use client';
import Button from './Button';
import BackIcon from './svg/BackIcon';
import DownloadIcon from './svg/DownloadIcon';
import Link from 'next/link';
import ShoppingCart from './svg/ShoppingCart';
import Logo from './svg/Logo';
import { useStore } from '@/lib/store';
import { motion, AnimatePresence } from 'framer-motion';

const transition = { type: 'spring', duration: 0.8 };

const config = {
	initial: {
		x: -100,
		opacity: 0,
		transition: { ...transition, delay: 0.5 },
	},
	animate: { x: 0, opacity: 1, transition: { ...transition, delay: 0 } },
	exit: { x: -100, opacity: 0, transition: { ...transition, delay: 0 } },
};

function Customizer() {
	const { setIntroScreen, changeColor, colors } = useStore();

	return (
		<>
			<Button
				className="flex items-center gap-4 absolute top-8 right-8 "
				onClick={() => setIntroScreen(true)}
			>
				<span>Go Back</span>
				<BackIcon className="w-4" />
			</Button>
			<div className="absolute w-full max-w-screen-2xl left-1/2 -translate-x-1/2 bottom-8 justify-between flex items-center max-2xl:px-4 ">
				<div>
					<h5 className="text-white text-lg font-antonio">
						Model 1888
					</h5>
					<p className="text-zinc-400">Slick model lineback</p>
				</div>
				<div className="flex gap-2">
					{colors.map((variant, index) => (
						<div
							key={index}
							onClick={() =>
								changeColor({
									main: variant.main,
									accent: variant.accent,
								})
							}
							className={`h-12 w-12 from-[color:_${variant}]  to-zinc-700 bg-gradient-to-tr rounded-full from-50% to-50% pointer-events-auto cursor-pointer`}
							style={{
								backgroundImage: `linear-gradient(135deg, ${variant.accent} 50%, ${variant.main} 50%)`,
							}}
						/>
					))}
				</div>
				<Button className="flex items-center gap-4">
					<span>Download</span>
					<DownloadIcon className="w-4" />
				</Button>
			</div>
		</>
	);
}

export default function Overlay() {
	const { setIntroScreen, introScreen } = useStore();

	return (
		<div className="absolute inset-0 h-screen w-screen pointer-events-none">
			<Logo className="text-white absolute left-5 top-5" />
			<AnimatePresence>
				{introScreen ? (
					<motion.section
						key="home"
						{...config}
						className="absolute min-h-screen w-full top-0"
					>
						<ShoppingCart className="text-white absolute right-5 top-5 cursor-pointer pointer-events-auto" />
						<div className="absolute right-5 top-1/2 -translate-y-1/2 flex flex-col items-center gap-4">
							<p className="text-zinc-300 [writing-mode:vertical-lr] ">
								sp_ 700 201 prototype
							</p>
							<span className="w-[1px] h-10 bg-white" />
						</div>

						<div className="max-w-[1755px] w-full absolute left-1/2 -translate-x-1/2 flex justify-between items-center bottom-8 px-4">
							<div>
								<h5 className="text-white text-lg font-antonio">
									Starting with some nice text
								</h5>
								<p className="text-zinc-400">
									Just some nice subtitle text
								</p>
							</div>
							<div className="flex">
								{Array(4)
									.fill(0)
									.map((_, index) => (
										<div
											className="relative mr-4"
											key={index}
										>
											<Link
												className="text-white mr-4 pointer-events-auto hover:text-zinc-200"
												href="/shop"
											>
												Github
											</Link>
											<span className="bg-white h-10 w-[1.5px] absolute right-0 rotate-12 top-1/2 -translate-y-1/2 "></span>
										</div>
									))}
							</div>
							<Button
								className="flex items-center gap-4"
								onClick={() => setIntroScreen(false)}
							>
								<span>Download</span>
								<DownloadIcon className="w-4" />
							</Button>
						</div>
					</motion.section>
				) : (
					<motion.section
						key="custom"
						{...config}
						className="absolute min-h-screen w-full top-0"
					>
						<Customizer />
					</motion.section>
				)}
			</AnimatePresence>
		</div>
	);
}

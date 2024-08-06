'use client';
import Button from './Button';
import BackIcon from './svg/BackIcon';
import DownloadIcon from './svg/DownloadIcon';
import ShoppingCart from './svg/ShoppingCart';
import Logo from './svg/Logo';
import { useStore } from '@/lib/store';
import { motion, AnimatePresence } from 'framer-motion';
import InfoWindow from './InfoWindow';
import IconInfo from './svg/IconInfo';
import { useMediaQuery } from 'react-responsive';

const transition = { type: 'spring', duration: 0.8 };

const config = {
	initial: {
		opacity: 0,
		transition: { ...transition, delay: 0.8 },
	},
	animate: { opacity: 1, transition: { ...transition, delay: 0 } },
	exit: { opacity: 0, transition: { ...transition, delay: 0 } },
};

function Customizer() {
	const { setIntroScreen, changeColor, openInfoWindow, colors } = useStore();
	const isDesktop = useMediaQuery({ minWidth: 768 });

	return (
		<>
			<InfoWindow />
			<motion.button
				initial={{
					opacity: 0,
					x: 100,
				}}
				animate={{
					opacity: 1,
					x: 0,
				}}
				transition={{ type: 'spring', duration: 0.2, stiffness: 30 }}
				className="bg-zinc-100 p-1 rounded-bl-2xl rounded-tl-2xl w-14 h-14 pointer-events-auto absolute right-0 top-8"
				onClick={() => openInfoWindow()}
			>
				<IconInfo className="w-8 h-8 absolute inset-0 left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 text-zinc-600 hover:text-zinc-900" />
			</motion.button>
			<motion.div
				initial={{
					opacity: 0,
					y: isDesktop ? '100%' : '-50%',
					x: isDesktop ? '-50%' : '-100%',
				}}
				animate={{
					opacity: 1,
					y: isDesktop ? '0%' : '-50%',
					x: isDesktop ? '-50%' : '0%',
				}}
				transition={{ type: 'spring', duration: 0.2, stiffness: 30 }}
				className="flex max-md:flex-col gap-2 absolute left-0 max-md:top-1/2 md:bottom-0 p-6 bg-zinc-100/90 rounded-tr-3xl max-md:rounded-br-3xl md:rounded-tl-3xl md:left-1/2 backdrop-blur-md shadow-lg"
			>
				{colors.map((variant, index) => (
					<div
						key={index}
						onClick={() =>
							changeColor({
								main: variant.main,
								accent: variant.accent,
							})
						}
						className={`md:h-12 h-8 aspect-square  from-[color:_${variant}]  to-zinc-700 bg-gradient-to-tr rounded-full from-50% to-50% pointer-events-auto cursor-pointer `}
						style={{
							backgroundImage: `linear-gradient(135deg, ${variant.accent} 50%, ${variant.main} 50%)`,
						}}
					/>
				))}
			</motion.div>
			<motion.div
				initial={{
					y: '100%',
					x: '-50%',
				}}
				animate={{
					y: '0',
					x: '-50%',
				}}
				transition={{ type: 'spring', duration: 0.2, stiffness: 30 }}
				className=" absolute w-full bottom-0 py-3 -translate-x-1/2 left-1/2"
			>
				<div className=" max-w-[1755px] justify-between flex items-center max-2xl:px-4 p-4 rounded-lg mx-auto">
					<div>
						<h5 className="text-white text-lg font-antonio">
							Model 1888
						</h5>
						<p className="text-zinc-200">Slick model lineback</p>
					</div>
					<Button
						className="flex items-center gap-4 "
						onClick={() => setIntroScreen(true)}
					>
						<span>Go Back</span>
						<BackIcon className="w-4" />
					</Button>
				</div>
			</motion.div>
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
						<div className="max-w-screen-sm md:max-w-screen-md lg:max-w-screen-lg relative h-screen mx-auto">
							<h1 className="text-white text-[20rem] md:text-[32rem] leading-[28rem] font-antonio absolute top-20 left-5 ">
								SP
							</h1>
							<h1 className="text-white text-[20rem] md:text-[32rem] leading-[40rem] font-antonio absolute bottom-32 right-5">
								_01
							</h1>
						</div>
						<div className="absolute right-5 top-1/2 -translate-y-1/2 flex flex-col items-center gap-4">
							<p className="text-zinc-100 [writing-mode:vertical-lr] ">
								sp_ 700 201 prototype
							</p>
							<span className="w-[1px] h-10 bg-white" />
						</div>
						<div className="absolute left-5 top-1/2 -translate-y-1/2 flex flex-col items-center gap-4">
							<p className="text-zinc-100 [writing-mode:vertical-lr] ">
								sp_ 700 201 prototype
							</p>
							<span className="w-[1px] h-10 bg-white" />
						</div>
						<motion.div
							initial={{
								y: '100%',
								x: '-50%',
							}}
							animate={{
								y: '0',
								x: '-50%',
							}}
							transition={{
								type: 'spring',
								duration: 0.2,
								stiffness: 30,
							}}
							className="= absolute w-full left-1/2 -translate-x-1/2 bottom-0 py-3"
						>
							<div className="max-w-[1755px] p-4 flex justify-between items-center bottom-8 mx-auto ">
								<div>
									<h5 className="text-white text-lg font-antonio">
										Starting with some nice text
									</h5>
									<p className="text-zinc-200">
										Just some nice subtitle text
									</p>
								</div>
								<Button
									className="flex items-center gap-4"
									onClick={() => setIntroScreen(false)}
								>
									<span>Download</span>
									<DownloadIcon className="w-4" />
								</Button>
							</div>
						</motion.div>
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

import { useStore } from '@/lib/store';
import CloseIcon from './svg/CloseIcon';

export default function InfoWindow() {
	const { closeInfoWindow, infoWindow } = useStore();

	return (
		<div
			className="absolute right-0 bottom-0 top-0 w-full md:w-80 bg-black/60 p-4 overflow-y-auto text-white pointer-events-auto z-20"
			style={{
				backdropFilter: 'blur(10px)',
				transform: infoWindow ? 'translateX(0%) ' : 'translateX(100%) ',
				opacity: infoWindow ? 1 : 0,
				transition:
					'transform 0.5s ease-in-out , opacity 0.5s ease-in-out',
			}}
		>
			<CloseIcon
				className="w-8 cursor-pointer"
				onClick={closeInfoWindow}
			/>
			<h1 className="text-xl font-bold mb-4 text-center">
				Discover the SP 01
			</h1>
			<p className="text-base mb-4 text-center">
				Where innovation meets elegance in headphone design.
			</p>
			<h2 className="text-lg font-semibold mb-2">
				Exceptional Sound Quality
			</h2>
			<p className="text-base mb-4">
				Experience rich, clear audio with deep bass and crisp highs. The
				SP 01 is engineered to deliver a superior listening experience,
				whether you’re at home or on the go.
			</p>
			<h2 className="text-lg font-semibold mb-2">Customizable Design</h2>
			<p className="text-base mb-4">
				Tailor the SP 01 to fit your unique style. Our interactive 3D
				model allows you to choose from a range of colors, materials,
				and finishes. Visualize your customization in real-time as you
				rotate and zoom the model to see every detail up close.
			</p>
			<h2 className="text-lg font-semibold mb-2">Premium Comfort</h2>
			<p className="text-base mb-4">
				Designed for extended wear, the SP 01 features plush ear
				cushions and an adjustable headband. The ergonomic design
				ensures a comfortable fit for long listening sessions.
			</p>
			<h2 className="text-lg font-semibold mb-2">Durable Build</h2>
			<p className="text-base mb-4">
				Crafted with high-quality materials, the SP 01 is built to last.
				Its sleek, modern design is not only visually appealing but also
				robust and resilient.
			</p>
		</div>
	);
}

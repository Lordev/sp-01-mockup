import { useStore } from '@/lib/store';
import CloseIcon from './svg/CloseIcon';

export default function InfoWindow() {
	const { closeInfoWindow, infoWindow } = useStore();

	return (
		<div
			className="absolute right-0 bottom-0 top-0 w-full md:w-80 bg-black/60 px-4 overflow-y-auto text-white z-20 pointer-events-auto text-center"
			style={{
				backdropFilter: 'blur(10px)',
				transform: infoWindow ? 'translateX(0%) ' : 'translateX(100%) ',
				opacity: infoWindow ? 1 : 0,
				transition:
					'transform 0.5s ease-in-out , opacity 0.5s ease-in-out',
			}}
		>
			<CloseIcon
				className="w-8 mt-8 cursor-pointer pointer-events-auto"
				onClick={closeInfoWindow}
			/>
			<div className="mt-16">
				<h1 className="text-xl font-bold mb-4 text-center">
					Discover the SP 01
				</h1>
				<p className="text-base mb-4 ">
					Discover the pinnacle of audio excellence with the SP 01.
				</p>
				<h2 className="text-lg font-semibold mb-2">
					Exceptional Sound Quality
				</h2>
				<p className="text-base mb-4">
					Immerse yourself in crystal-clear audio with deep bass and
					sharp highs. The SP 01 is engineered to deliver an unrivaled
					listening experience, perfect for any setting.
				</p>
				<h2 className="text-lg font-semibold mb-2">
					Unmatched Comfort
				</h2>
				<p className="text-base mb-4">
					Experience all-day comfort with plush ear cushions and an
					adjustable headband. The SP 01{"'"}s ergonomic design
					ensures a perfect fit, even during extended listening
					sessions.
				</p>
				<h2 className="text-lg font-semibold mb-2">
					Robust and Stylish
				</h2>
				<p className="text-base mb-4">
					Crafted from premium materials, the SP 01 combines
					durability with a sleek, modern look. Built to withstand the
					rigors of daily use while maintaining its elegant
					appearance.
				</p>
				<h2 className="text-lg font-semibold mb-2">
					Advanced Technology
				</h2>
				<p className="text-base mb-4">
					Equipped with cutting-edge technology, the SP 01 delivers
					precise sound reproduction and enhanced audio performance.
					Enjoy seamless connectivity and innovative features designed
					for the modern audiophile.
				</p>
				<h2 className="text-lg font-semibold mb-2">Elegant Design</h2>
				<p className="text-base mb-4">
					The SP 01 boasts a sophisticated design that blends style
					with functionality. Its sleek lines and premium finishes
					make it a statement piece that complements any look, while
					providing exceptional performance.
				</p>
			</div>
		</div>
	);
}

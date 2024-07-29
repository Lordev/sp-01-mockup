import Scene from '@/components/Scene';
import Logo from '@/components/svg/Logo';
import ShoppingCart from '@/components/svg/ShoppingCart';
import Link from 'next/link';

export default function Home() {
	return (
		<main className="min-h-screen bg-gradient-background w-full relative">
			<Logo className="text-white absolute left-5 top-5" />
			<Scene />
			<ShoppingCart className="text-white absolute right-5 top-5" />
			<div className="max-w-[1350px] w-full absolute top-1/2 -translate-y-1/2 flex justify-between left-1/2 -translate-x-1/2">
				<h2 className="text-white text-[32rem]  font-antonio">SP</h2>
				<h2 className="text-white text-[32rem] font-antonio">_01</h2>
			</div>
			<div className="max-w-[1755px] w-full absolute bottom-8 h-20 left-1/2 -translate-x-1/2 flex justify-between items-center">
				<div>
					<h5 className="text-white text-lg font-antonio">
						Starting with some nice text
					</h5>
					<p className="text-zinc-400">
						Just some nice subtitle text
					</p>
				</div>
				<div className="flex">
					<div className="relative mr-4">
						<Link className="text-white mr-4" href="/shop">
							Github{' '}
						</Link>
						<span className="content-[''] bg-white h-10 w-[1.5px] absolute right-0 rotate-12 top-1/2 -translate-y-1/2"></span>
					</div>
					<div className="relative mr-4">
						<Link className="text-white mr-4" href="/shop">
							Github{' '}
						</Link>
						<span className="content-[''] bg-white h-10 w-[1.5px] absolute right-0 rotate-12 top-1/2 -translate-y-1/2"></span>
					</div>
					<div className="relative mr-4">
						<Link className="text-white mr-4" href="/shop">
							Github{' '}
						</Link>
						<span className="content-[''] bg-white h-10 w-[1.5px] absolute right-0 rotate-12 top-1/2 -translate-y-1/2"></span>
					</div>
					<div className="relative mr-4">
						<Link className="text-white mr-4" href="/shop">
							Github{' '}
						</Link>
						<span className="content-[''] bg-white h-10 w-[1.5px] absolute right-0 rotate-12 top-1/2 -translate-y-1/2"></span>
					</div>
				</div>
			</div>
		</main>
	);
}

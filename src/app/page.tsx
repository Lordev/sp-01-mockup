import Scene from '@/components/Scene';
import Logo from '@/components/svg/Logo';
import ShoppingCart from '@/components/svg/ShoppingCart';
import Overlay from '@/components/Overlay';
import Background from '@/components/Background';

export default function Home() {
	return (
		<main className="min-h-screen w-full relative ">
			<Background>
				<Scene />
				<Logo className="text-white absolute left-3 top-3 md:left-5 md:top-5 max-md:w-14" />
				<Overlay />
			</Background>
		</main>
	);
}

import { create } from 'zustand';

type Color = {
	main: string;
	accent: string;
};

type Colors = Color[];

type State = {
	introScreen: boolean;
	infoWindow: boolean;
	prevColor: Color;
	currentColor: Color;
	colors: Colors;
	setIntroScreen: (introScreen: boolean) => void;
	openInfoWindow: () => void;
	closeInfoWindow: () => void;
	changeColor: (color: Color) => void;
};

export const useStore = create<State>(set => ({
	introScreen: true,
	infoWindow: false,
	prevColor: {
		main: '#A2319B',
		accent: '#DAB8B8',
	},
	currentColor: {
		main: '#A2319B',
		accent: '#DAB8B8',
	},
	colors: [
		{
			main: '#575467',
			accent: '#737373',
		},
		{
			main: '#D7D3EE',
			accent: '#737373',
		},
		{
			main: '#A2319B',
			accent: '#DAB8B8',
		},
		{
			main: '#747E98',
			accent: '#196E8D',
		},
	],
	setIntroScreen: introScreen => set({ introScreen }),
	openInfoWindow: () => set({ infoWindow: true }),
	closeInfoWindow: () => set({ infoWindow: false }),
	changeColor: color =>
		set(state => ({
			prevColor: { ...state.currentColor },
			currentColor: { main: color.main, accent: color.accent },
		})),
}));

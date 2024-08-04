import { create } from 'zustand';

type Color = {
	main: string;
	accent: string;
};

type Colors = Color[];

type State = {
	introScreen: boolean;
	setIntroScreen: (introScreen: boolean) => void;
	prevColor: Color;
	currentColor: Color;
	colors: Colors;
	changeColor: (color: Color) => void;
};

export const useStore = create<State>(set => ({
	introScreen: true,
	setIntroScreen: introScreen => set({ introScreen }),
	prevColor: {
		main: '#575467',
		accent: '#737373',
	},
	currentColor: {
		main: '#575467',
		accent: '#737373',
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
	changeColor: color =>
		set(state => ({
			prevColor: { ...state.currentColor },
			currentColor: { main: color.main, accent: color.accent },
		})),
}));

import { create } from 'zustand';

type State = {
	introScreen: boolean;
	setIntroScreen: (introScreen: boolean) => void;
	color: string;
	changeColor: (color: string) => void;
};

export const useStore = create<State>(set => ({
	introScreen: true,
	setIntroScreen: introScreen => set({ introScreen }),
	color: 'red',
	changeColor: color => set({ color }),
}));

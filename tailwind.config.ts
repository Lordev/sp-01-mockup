import type { Config } from 'tailwindcss';

const config: Config = {
	content: [
		'./src/pages/**/*.{js,ts,jsx,tsx,mdx}',
		'./src/components/**/*.{js,ts,jsx,tsx,mdx}',
		'./src/app/**/*.{js,ts,jsx,tsx,mdx}',
	],
	theme: {
		extend: {
			backgroundImage: {
				'gradient-background':
					'linear-gradient(135deg, var(--color-background) 50%, var(--color-secondary) 50%)',
			},

			fontFamily: {
				antonio: ['var(--font-antonio)', 'serif'],
			},

			colors: {
				background: 'var(--color-background)',
				foreground: 'var(--color-foreground)',
				primary: 'var(--color-primary)',
				secondary: 'var(--color-secondary)',
				accent: 'var(--color-accent)',
			},
		},
	},
	plugins: [],
};
export default config;

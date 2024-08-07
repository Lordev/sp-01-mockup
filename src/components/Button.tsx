import React from 'react';
import cn from 'classnames';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {}

export default function Button(props: ButtonProps) {
	const { className, children, ...rest } = props;

	return (
		<button
			className={cn(
				'font-bold py-4 px-4  cursor-pointer bg-white text-black hover:bg-blue-700 uppercase bg-400% bg-gradient-to-tr from-white to-zinc-300 from-50% to-50% hover:[backgroundPosition:100%_50%] [backgroundPosition:0%_50%] ease-in duration-300 z-20 pointer-events-auto rounded-lg',
				className
			)}
			{...rest}
		>
			{children}
		</button>
	);
}

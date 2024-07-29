import * as React from 'react';
import { SVGProps } from 'react';
const ShoppingCart = (props: SVGProps<SVGSVGElement>) => (
	<svg
		xmlns="http://www.w3.org/2000/svg"
		width={51}
		height={49}
		viewBox="0 0 71 69"
		fill="none"
		{...props}
	>
		<path fill="#fff" d="M57.845 46H19.842l-7.308-28.75h52.62L57.845 46Z" />
		<path
			stroke="#fff"
			strokeLinecap="round"
			strokeLinejoin="round"
			strokeWidth={4}
			d="M5.226 8.625h5.116l2.192 8.625m0 0L19.842 46h38.003l7.309-28.75h-52.62ZM19.843 60.375c2.421 0 4.384-1.93 4.384-4.313 0-2.381-1.963-4.312-4.384-4.312-2.422 0-4.386 1.93-4.386 4.313 0 2.381 1.964 4.312 4.386 4.312ZM57.845 60.375c2.422 0 4.385-1.93 4.385-4.313 0-2.381-1.963-4.312-4.385-4.312-2.421 0-4.385 1.93-4.385 4.313 0 2.381 1.964 4.312 4.385 4.312Z"
		/>
	</svg>
);
export default ShoppingCart;

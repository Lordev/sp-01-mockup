import * as React from 'react';
import { SVGProps } from 'react';
const BackIcon = (props: SVGProps<SVGSVGElement>) => (
	<svg
		xmlns="http://www.w3.org/2000/svg"
		viewBox="0 0 20 20"
		fill="none"
		{...props}
	>
		<path
			fill="currentColor"
			d="M8.817.483.483 8.817c-.151.158-.27.345-.35.55-.166.405-.166.86 0 1.266.08.205.199.392.35.55l8.334 8.334a1.673 1.673 0 0 0 2.366-2.367l-5.5-5.483h12.65a1.666 1.666 0 1 0 0-3.334H5.683l5.5-5.483a1.667 1.667 0 0 0 0-2.367 1.667 1.667 0 0 0-2.366 0Z"
		/>
	</svg>
);
export default BackIcon;

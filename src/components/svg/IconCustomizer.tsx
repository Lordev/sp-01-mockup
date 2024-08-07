import * as React from 'react';
import { SVGProps } from 'react';
const IconCustomizer = (props: SVGProps<SVGSVGElement>) => (
	<svg
		xmlns="http://www.w3.org/2000/svg"
		viewBox="0 0 45 43"
		fill="none"
		{...props}
	>
		<path
			fill="currentColor"
			d="M44.834 4.462s.715-2.131-.821-3.622C42.609-.545 40.783.2 40.783.2 39.166 1 25.527 9.442 20.47 15.034c-2.277 2.557-5.455 10.094-2.886 12.837 2.436 2.61 10.487-.453 12.685-2.663 5.455-5.486 13.797-19.095 14.565-20.746ZM0 41.959c6.276-4.154 3.866-9.081 8.554-12.357 2.463-1.731 5.879-1.651 8.156.772 1.668 1.785 2.119 6.845-.424 9.215C12.13 43.451 5.694 43.717 0 41.959Z"
		/>
	</svg>
);
export default IconCustomizer;

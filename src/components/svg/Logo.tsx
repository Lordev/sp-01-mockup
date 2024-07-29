import * as React from 'react';
import { SVGProps } from 'react';
const Logo = (props: SVGProps<SVGSVGElement>) => (
	<svg
		xmlns="http://www.w3.org/2000/svg"
		width={100}
		height={78}
		viewBox="0 0 100 78"
		fill="none"
		{...props}
	>
		<path
			fill="currentColor"
			d="M0 0h26.437v34H0zM36.605 0h26.437v34H36.605zM36.605 44h26.437v34H36.605zM73.21 44h26.437v34H73.21zM73.21 0h26.437v34H73.21z"
		/>
	</svg>
);
export default Logo;

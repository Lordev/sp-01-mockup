import * as React from 'react';
import { SVGProps } from 'react';
const CloseIcon = (props: SVGProps<SVGSVGElement>) => (
	<svg
		xmlns="http://www.w3.org/2000/svg"
		width={68}
		height={68}
		viewBox="0 0 68 68"
		fill="none"
		{...props}
	>
		<g clipPath="url(#a)">
			<path
				fill="currentColor"
				fillRule="evenodd"
				d="m34 38.006 16.028 16.029a2.834 2.834 0 0 0 4.007-4.007L38.006 34l16.029-16.028a2.833 2.833 0 0 0-4.007-4.007L34 29.995 17.972 13.965a2.834 2.834 0 0 0-4.004 4.007L29.994 34 13.966 50.028a2.834 2.834 0 1 0 4.006 4.007L34 38.005Z"
				clipRule="evenodd"
			/>
		</g>
		<defs>
			<clipPath id="a">
				<path fill="currentColor" d="M0 0h68v68H0z" />
			</clipPath>
		</defs>
	</svg>
);
export default CloseIcon;

import * as React from 'react';
import { SVGProps } from 'react';

const DownloadIcon = (props: SVGProps<SVGSVGElement>) => (
	<svg
		xmlns="http://www.w3.org/2000/svg"
		viewBox="0 0 20 24.286"
		fill="none"
		{...props}
	>
		<path
			fill="currentColor"
			d="M0 24.286h20v-2.857H0v2.857ZM20 8.57h-5.714V0H5.714v8.571H0l10 10 10-10Z"
		/>
	</svg>
);
export default DownloadIcon;

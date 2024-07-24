
declare module '*.scss' {
	const content: Record<string, string>;
	export default content;
}

declare module '*.png';
declare module '*.jpj';
declare module '*.jpeg';
declare module '*.svg?react' {
	import React from 'react';
	const SVG: React.VFC<React.SVGProps<SVGSVGElement>>;
	export default SVG;
}
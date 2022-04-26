import React from 'react';

function Text({
	text = '',
	size = 18,
	weight = '400',
	lineHeight = '18px',
	color = '#000000',
	children,
}) {
	return (
		<span
			className=''
			style={{
				fontSize: size,
				fontWeight: weight,
				lineHeight,
				color,
			}}
		>
			{text || children}
		</span>
	);
}

export default Text;

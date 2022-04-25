import React from 'react';

function index({ text = '', size = 16, weight = '400', lineHeight = '18px' }) {
	return (
		<span
			className=''
			style={{
				fontSize: size,
				fontWeight: weight,
				lineHeight,
			}}
		>
			{text}
		</span>
	);
}

export default index;

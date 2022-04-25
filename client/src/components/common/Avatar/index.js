import React from 'react';

function index({ size = 70 }) {
	return (
		<img
			src='https://picsum.photos/100'
			className='h-auto'
			alt=''
			style={{
				width: size,
				borderRadius: size / 2,
			}}
		/>
	);
}

export default index;

import React from 'react';

function Avatar({ size = 70, src = 'https://picsum.photos/100' }) {
	return (
		<img
			src={src}
			className="h-auto"
			alt=""
			style={{
				width: size,
				borderRadius: size / 2,
			}}
		/>
	);
}

export default Avatar;

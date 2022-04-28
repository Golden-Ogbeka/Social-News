import React from 'react';

function Button({ onClick = () => null, style, children }) {
	return (
		<button
			onClick={onClick}
			style={style}
			className="bg-purple-900 pt-4 pb-4 pl-7 pr-7  rounded text-white text-sm font-semibold"
		>
			{children}
		</button>
	);
}

export default Button;

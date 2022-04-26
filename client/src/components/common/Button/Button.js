import React from 'react';

function Button({ onClick = () => null, style, children }) {
	return (
		<button
			onClick={onClick}
			style={style}
			className="w-32 bg-purple-900 pt-4 pb-4 rounded text-white text-sm font-semibold"
		>
			{children}
		</button>
	);
}

export default Button;

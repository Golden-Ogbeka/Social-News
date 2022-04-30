import React from 'react';

function Button({
	onClick = () => null,
	variant = 'primary',
	style,
	children,
}) {
	return (
		<button
			onClick={onClick}
			style={{
				...style,
				backgroundColor:
					variant === 'primary'
						? '#251A6A'
						: variant === 'danger' && '#B33A3A',
			}}
			className="pt-4 pb-4 pl-7 pr-7  rounded text-white text-sm font-semibold"
		>
			{children}
		</button>
	);
}

export default Button;

import React from 'react';
import Text from '../Text/Text';

function SecondaryHeader({ style, children }) {
	return (
		<h3 className="mb-10" style={style}>
			<Text weight="600" size={24}>
				{children}
			</Text>
		</h3>
	);
}

export default SecondaryHeader;

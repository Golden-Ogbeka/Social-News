import React from 'react';
import Text from '../Text/Text';

function PageHeader({ children }) {
	return (
		<header>
			<h1 className="mb-10 mt-5">
				<Text size={36} weight="600">
					{children}
				</Text>
			</h1>
		</header>
	);
}

export default PageHeader;

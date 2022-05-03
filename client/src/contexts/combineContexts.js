import React from 'react';

function combineContexts(...components) {
	return components.reduce(
		(AccumulatedComponents, CurrentComponent) => {
			return ({ children }) => {
				return (
					<AccumulatedComponents>
						<CurrentComponent>{children}</CurrentComponent>
					</AccumulatedComponents>
				);
			};
		},
		({ children }) => <>{children}</>
	);
}

export default combineContexts;

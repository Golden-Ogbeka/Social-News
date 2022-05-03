import React from 'react';

export const LoadingIndicatorContext = React.createContext(null);

function LoadingIndicatorProvider({ children }) {
	const [indicatorState, setLoadingIndicator] = React.useState(false);

	const openLoadingIndicator = () => {
		setLoadingIndicator(true);
	};

	const closeLoadingIndicator = () => {
		setLoadingIndicator(false);
	};

	return (
		<LoadingIndicatorContext.Provider
			value={{
				openLoadingIndicator,
				closeLoadingIndicator,
				indicatorState,
			}}
		>
			{children}
		</LoadingIndicatorContext.Provider>
	);
}

export default LoadingIndicatorProvider;

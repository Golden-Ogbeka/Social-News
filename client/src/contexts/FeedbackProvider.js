import React from 'react';

export const FeedbackContext = React.createContext(null);

function FeedbackProvider({ children }) {
	const [feedback, setFeedback] = React.useState({
		type: '',
		message: '',
		open: false,
		timeout: 3000,
	});

	const hideFeedback = () => {
		// When you want to run setState multiple times, use a function that contains the old state
		setTimeout(() => {
			setFeedback(oldState => {
				return {
					...oldState,
					open: false,
				};
			});
		}, feedback.timeout);
	};

	const openFeedback = (type, message) => {
		setFeedback({
			...feedback,
			type,
			message,
			open: true,
		});
		return hideFeedback();
	};

	const closeFeedback = () => {
		setFeedback({
			...feedback,
			open: false,
		});
		return hideFeedback();
	};

	return (
		<FeedbackContext.Provider
			value={{ openFeedback, closeFeedback, feedback }}
		>
			{children}
		</FeedbackContext.Provider>
	);
}

export default FeedbackProvider;

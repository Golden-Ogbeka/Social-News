import combineContexts from './combineContexts';
import FeedbackProvider from './FeedbackProvider';
import LoadingIndicatorProvider from './LoadingIndicatorProvider';
import SignoutModalProvider from './SignoutModalProvider';
import UserProvider from './UserProvider';

const providers = [
	FeedbackProvider,
	UserProvider,
	SignoutModalProvider,
	LoadingIndicatorProvider,
];

const AppContextProvider = combineContexts(...providers);

export default AppContextProvider;

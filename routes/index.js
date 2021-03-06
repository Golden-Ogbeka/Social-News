import AuthenticationRouter from './authentication.js';
import CommentRouter from './comment.js';
import PasswordRouter from './password.js';
import PostRouter from './posts.js';
import UserRouter from './user.js';

const AppRouters = [
	UserRouter,
	AuthenticationRouter,
	PasswordRouter,
	PostRouter,
	CommentRouter,
];

export default AppRouters;

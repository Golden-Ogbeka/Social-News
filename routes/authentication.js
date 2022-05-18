import express from 'express';
import { body } from 'express-validator';
import { LoginUser, RegisterUser } from '../controllers/authentication.js';
import verifyUser from '../middleware/user/verifyUser.js';

const AuthenticationRouter = express.Router();

// Login user
AuthenticationRouter.post(
	'/user/login',
	[
		body('email')
			.isEmail()
			.withMessage('Invalid Email')
			.bail()
			.notEmpty()
			.withMessage('Email is required')
			.bail(),
		body('password').notEmpty().withMessage('Password is required'),
	],
	LoginUser
);

// Register User
AuthenticationRouter.post(
	'/user/register',
	[
		body('email')
			.isEmail()
			.withMessage('Invalid Email')
			.bail()
			.notEmpty()
			.withMessage('Email is required')
			.bail(),
		body('name').notEmpty().withMessage('Name is required').bail(),
		body('password').notEmpty().withMessage('Password is required'),
	],
	RegisterUser
);

export default AuthenticationRouter;

import express from 'express';
import { body, check } from 'express-validator';
import { ResetPassword, UpdateResetPassword } from '../controllers/password.js';

const PasswordRouter = express.Router();

// Reset password
PasswordRouter.post(
	'/password/reset',
	[
		body('email')
			.isEmail()
			.withMessage('Invalid Email')
			.bail()
			.notEmpty()
			.withMessage('Email is required'),
	],
	ResetPassword
);

// Update Reset Password
PasswordRouter.post(
	'/password/updateReset',
	[
		body('email')
			.isEmail()
			.withMessage('Invalid Email')
			.bail()
			.notEmpty()
			.withMessage('Email is required')
			.bail(),
		body('verificationCode')
			.isString()
			.withMessage('Invalid verification code')
			.notEmpty()
			.withMessage('Verification code is required')
			.bail(),
		body('password')
			.isString()
			.withMessage('Invalid password')
			.bail()
			.notEmpty()
			.withMessage('Password is required')
			.bail()
			.custom((value, { req }) => {
				if (value !== req.body.confirmPassword) {
					// trow error if passwords do not match
					throw new Error("Passwords don't match");
				} else {
					return value;
				}
			}),
		// body('confirmPassword').isString().notEmpty(),
	],
	UpdateResetPassword
);

export default PasswordRouter;

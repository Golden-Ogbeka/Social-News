import express from 'express';
import { body } from 'express-validator';
import { ResetPassword, UpdateResetPasswor } from '../controllers/password.js';

const PasswordRouter = express.Router();

// Reset password
PasswordRouter.post(
	'/password/reset',
	[body('email').isEmail()],
	ResetPassword
);

// Update Reset Password
PasswordRouter.post('/password/updateReset', UpdateResetPasswor);

export default PasswordRouter;

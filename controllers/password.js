import { validationResult } from 'express-validator';
import sendEmail from '../functions/email/sendEmail.js';
import generateRandomValues from '../functions/others/generateRamdomValues.js';
import sendResponse from '../functions/response/sendResponse.js';
import UserModel from '../models/User.js';

export const ResetPassword = async (req, res) => {
	try {
		const errors = validationResult(req);
		if (!errors.isEmpty()) {
			return sendResponse(res, 400, 'Incomplete Fields');
		}

		const { email } = req.body;
		const existingUser = await UserModel.findOne({ email });

		if (!existingUser) {
			return sendResponse(res, 404, 'User not found');
		}

		// Generate verification code
		const verificationCode = generateRandomValues().substring(0, 6);
		const User = await UserModel.findOneAndUpdate(
			{ email },
			{ $set: { verificationCode } }
		);

		if (!User) {
			return sendResponse(res, 404, "Couldn't create verification code");
		}

		// Send verification code
		const mailInfo = await sendEmail(
			email,
			'Reset Password Code',
			'Here is your verification code: ' + verificationCode
		);

		if (!mailInfo)
			return sendResponse(res, 400, "Couldn't send verification code");

		return sendResponse(res, 200, 'Successful. Verification code sent');
	} catch (error) {
		console.log(error);
		return sendResponse(res, 500, "Couldn't reset password", error);
	}
};

export const UpdateResetPasswor = async (req, res) => {};

import { validationResult } from 'express-validator';
import { hashPassword } from '../functions/authentication/passwordHash.js';
import sendEmail from '../functions/email/sendEmail.js';
import generateRandomValues from '../functions/others/generateRamdomValues.js';
import sendResponse from '../functions/response/sendResponse.js';
import validationErrorCheck from '../functions/response/validationErrorCheck.js';
import UserModel from '../models/User.js';

export const ResetPassword = async (req, res) => {
	try {
		if (validationErrorCheck(req)) {
			return sendResponse(res, 400, validationErrorCheck(req));
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
		return sendResponse(res, 500, "Couldn't reset password", error);
	}
};

export const UpdateResetPassword = async (req, res) => {
	try {
		if (validationErrorCheck(req)) {
			return sendResponse(res, 400, validationErrorCheck(req));
		}
		const { email, verificationCode, password } = req.body;

		// Find user
		const User = await UserModel.findOne({ email, verificationCode });
		if (!User) {
			return sendResponse(res, 404, 'Verification code is incorrect');
		}

		// Hash new password, generate new verification code and save
		const hashedPassword = hashPassword(password);
		const newVerificationCode = generateRandomValues().substring(0, 6);

		User.password = hashedPassword;
		User.verificationCode = newVerificationCode;

		await User.save();

		return sendResponse(res, 200, 'Password updated successfully');
	} catch (error) {
		return sendResponse(res, 500, "Couldn't update password", error);
	}
};

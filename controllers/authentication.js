import {
	compareHashedPassword,
	hashPassword,
} from '../functions/authentication/passwordHash.js';
import sendResponse from '../functions/response/sendResponse.js';
import validationErrorCheck from '../functions/response/validationErrorCheck.js';
import UserModel from '../models/User.js';
import JWT from 'jsonwebtoken';

export const LoginUser = async (req, res) => {
	try {
		if (validationErrorCheck(req)) {
			return sendResponse(res, 400, validationErrorCheck(req));
		}

		// Find email
		const User = await UserModel.findOne({
			email: req.body.email,
		});

		if (!User) {
			return sendResponse(res, 404, 'Invalid email or password');
		}

		// Compare password
		const isUserPassword = compareHashedPassword(
			req.body.password,
			User.password
		);

		if (!isUserPassword) {
			return sendResponse(res, 404, 'Invalid email or password');
		}

		// Generate user token and send details to user
		const userToken = JWT.sign(
			{
				email: req.body.email,
			},
			process.env.JWT_SECRET,
			{
				expiresIn: '7d',
				issuer: 'Social Share',
			}
		);

		return sendResponse(res, 200, 'Sign in successful', {
			User: { User, token: userToken },
		});
	} catch (error) {
		return sendResponse(res, 500, "Couldn't login", error);
	}
};

export const RegisterUser = async (req, res) => {
	try {
		if (validationErrorCheck(req)) {
			return sendResponse(res, 400, validationErrorCheck(req));
		}
		const { name, email, password } = req.body;

		const hashedPassword = hashPassword(password);

		let existingUser = await UserModel.findOne({ email });

		if (existingUser) {
			return sendResponse(res, 400, 'User already exists');
		}

		let User = await UserModel.create({
			name,
			email,
			password: hashedPassword,
		});
		return sendResponse(res, 200, 'Sign up successful', User);
	} catch (error) {
		return sendResponse(res, 500, "Couldn't register user", error);
	}
};

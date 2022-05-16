import {
	compareHashedPassword,
	hashPassword,
} from '../functions/authentication/passwordHash.js';
import sendResponse from '../functions/response/sendResponse.js';
import UserModel from '../models/User.js';

export const LoginUser = async (req, res) => {
	try {
		if (!req.body.email || !req.body.password) {
			return sendResponse(res, 400, 'Incomplete Fields');
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

		return sendResponse(res, 200, 'Sign in successful', User);
	} catch (error) {
		console.log(error);
		return sendResponse(res, 500, "Couldn't login", error);
	}
};

export const RegisterUser = async (req, res) => {
	try {
		if (!req.body.email || !req.body.password || !req.body.name) {
			return sendResponse(res, 400, 'Incomplete Fields');
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

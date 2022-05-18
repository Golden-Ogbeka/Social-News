import sendResponse from '../../functions/response/sendResponse.js';
import JWT from 'jsonwebtoken';

export default function verifyUser(req, res, next) {
	//Verify User's token
	try {
		const token = req.headers.token;
		JWT.verify(token, process.env.JWT_SECRET);

		next();
	} catch (error) {
		return sendResponse(res, 401, 'Login to continue');
	}
}

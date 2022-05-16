import sendResponse from '../functions/response/sendResponse.js';
import UserModel from '../models/User.js';

export const GetUsers = async (req, res) => {
	try {
		const Users = await UserModel.find();
		return sendResponse(res, 200, 'Users retrieved successfully', Users);
	} catch (error) {
		return sendResponse(res, 500, "Couldn't get users", error);
	}
};

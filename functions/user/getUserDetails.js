import UserModel from '../../models/User.js';

export default async function getUserDetails({ email = '' }) {
	try {
		const User = await UserModel.findOne({ email });
		return User;
	} catch (error) {
		return null;
	}
}

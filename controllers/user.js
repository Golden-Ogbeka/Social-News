import { ObjectId } from 'mongodb';
import sendResponse from '../functions/response/sendResponse.js';
import validationErrorCheck from '../functions/response/validationErrorCheck.js';
import getUserDetails from '../functions/user/getUserDetails.js';
import { getUserFromToken } from '../functions/user/getUserFromToken.js';
import UserModel from '../models/User.js';

// Get all users
export const GetUsers = async (req, res) => {
	try {
		const Users = await UserModel.find()
			.populate('followers')
			.populate('mentors');
		return sendResponse(res, 200, 'Users retrieved successfully', {
			Users: Users,
		});
	} catch (error) {
		return sendResponse(res, 500, "Couldn't get users", error);
	}
};

// Follow user
export const FollowUser = async (req, res) => {
	try {
		if (validationErrorCheck(req)) {
			return sendResponse(res, 400, validationErrorCheck(req));
		}

		// Get details of user that is making the request
		let { id } = req.body;

		// convert Id to Object ID
		id = new ObjectId(id);

		const userEmail = getUserFromToken(req);
		let loggedInUser = await getUserDetails({ email: userEmail });

		// Compare if the IDs are equal. You can either use mongodb's equal() or convert to string first
		if (loggedInUser._id.equals(id))
			return sendResponse(res, 400, 'You cannot follow yourself');

		// Get details of person to follow
		const userToFollow = await UserModel.findOne({ _id: ObjectId(id) });

		if (!userToFollow) return sendResponse(res, 404, 'User not found');

		// Check if user already follows
		const followingAlready = loggedInUser.mentors.find(mentor =>
			mentor.equals(id)
		);

		if (followingAlready)
			return sendResponse(
				res,
				400,
				'You are already following this user'
			);

		// Update each users field to follow and add mentor respectively

		const newUserDetails = await UserModel.findOneAndUpdate(
			{ _id: ObjectId(loggedInUser._id) },
			{
				$push: { mentors: userToFollow._id },
				$set: { updatedAt: new Date() },
			},
			{ returnDocument: 'after' }
		);

		await UserModel.findOneAndUpdate(
			{ _id: ObjectId(userToFollow._id) },
			{
				$push: { followers: loggedInUser._id },
				$set: { updatedAt: new Date() },
			}
		);

		// Or use this style
		// loggedInUser.mentors.push(userToFollow._id);
		// userToFollow.followers.push(loggedInUser._id);

		// const newUserDetails = await loggedInUser.save();
		// await userToFollow.save();

		return sendResponse(res, 200, 'User followed successfully', {
			Users: newUserDetails,
		});
	} catch (error) {
		return sendResponse(res, 500, "Couldn't follow user", error);
	}
};

// Follow user
export const UnFollowUser = async (req, res) => {
	try {
		if (validationErrorCheck(req)) {
			return sendResponse(res, 400, validationErrorCheck(req));
		}

		// Get details of user that is making the request
		let { id } = req.body;

		// convert Id to Object ID
		id = new ObjectId(id);

		const userEmail = getUserFromToken(req);
		let loggedInUser = await getUserDetails({ email: userEmail });

		// Compare if the IDs are equal. You can either use mongodb's equal() or convert to string first
		if (loggedInUser._id.equals(id))
			return sendResponse(res, 400, 'You cannot unfollow yourself');

		// Get details of person to follow
		const userToFollow = await UserModel.findOne({ _id: ObjectId(id) });

		if (!userToFollow) return sendResponse(res, 404, 'User not found');

		// Check if user already unfollows
		const followingAlready = loggedInUser.mentors.find(mentor =>
			mentor.equals(id)
		);

		if (!followingAlready)
			return sendResponse(res, 400, 'You are not following this user');

		// Update each users field to unfollow and remove mentor respectively

		const newUserDetails = await UserModel.findOneAndUpdate(
			{ _id: ObjectId(loggedInUser._id) },
			{
				$pull: { mentors: userToFollow._id },
				$set: { updatedAt: new Date() },
			},
			{ returnDocument: 'after' }
		);

		await UserModel.findOneAndUpdate(
			{ _id: ObjectId(userToFollow._id) },
			{
				$pull: { followers: loggedInUser._id },
				$set: { updatedAt: new Date() },
			}
		);

		return sendResponse(res, 200, 'User unfollowed successfully', {
			Users: newUserDetails,
		});
	} catch (error) {
		return sendResponse(res, 500, "Couldn't unfollow user", error);
	}
};

import sendResponse from '../functions/response/sendResponse.js';
import { getUserFromToken } from '../functions/user/getUserFromToken.js';
import PostModel from '../models/Post.js';

// Get all posts
export const GetAllPosts = async (req, res) => {
	try {
		const Posts = await PostModel.find();
		return sendResponse(res, 200, 'Posts retrieved Successfully', {
			Posts: Posts,
		});
	} catch (error) {
		console.log(error);
		return sendResponse(res, 500, "Couldn't get posts", error);
	}
};

// Get user's posts
export const GetUserPosts = async (req, res) => {
	try {
		const userEmail = await getUserFromToken(req);

		const Posts = await PostModel.find({ email: userEmail });
		return sendResponse(res, 200, 'Posts retrieved Successfully', {
			Posts: Posts,
		});
	} catch (error) {
		return sendResponse(res, 500, "Couldn't get posts", error);
	}
};

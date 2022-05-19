import { ObjectId } from 'mongodb';
import sendResponse from '../functions/response/sendResponse.js';
import validationErrorCheck from '../functions/response/validationErrorCheck.js';
import getUserDetails from '../functions/user/getUserDetails.js';
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

// Create new post
export const CreatePost = async (req, res) => {
	try {
		if (validationErrorCheck(req)) {
			return sendResponse(res, 400, validationErrorCheck(req));
		}

		const { title, subtitle, content } = req.body;
		const userEmail = getUserFromToken(req);
		const User = await getUserDetails({ email: userEmail });

		const newPost = await PostModel.create({
			title,
			subtitle,
			content,
			userId: User._id,
			userImageURL: User.imageUrl,
		});

		return sendResponse(res, 200, 'Post created Successfully', {
			Post: newPost,
		});
	} catch (error) {
		return sendResponse(res, 500, "Couldn't create post", error);
	}
};

// Update existing post
export const UpdatePost = async (req, res) => {
	try {
		if (validationErrorCheck(req)) {
			return sendResponse(res, 400, validationErrorCheck(req));
		}

		const { id, title, subtitle, content } = req.body;

		const Post = await PostModel.findOne({ _id: ObjectId(id) });

		if (!Post) return sendResponse(res, 404, 'Post not found');
		if (title) Post.title = title;
		if (subtitle) Post.subtitle = subtitle;
		if (content) Post.content = content;

		const newPost = await Post.save();

		return sendResponse(res, 200, 'Post updated Successfully', {
			Post: newPost,
		});
	} catch (error) {
		return sendResponse(res, 500, "Couldn't update post", error);
	}
};

import { ObjectId } from 'mongodb';
import sendResponse from '../functions/response/sendResponse.js';
import validationErrorCheck from '../functions/response/validationErrorCheck.js';
import getUserDetails from '../functions/user/getUserDetails.js';
import { getUserFromToken } from '../functions/user/getUserFromToken.js';
import CommentModel from '../models/Comment.js';
import PostModel from '../models/Post.js';

// Get all posts
export const GetAllPosts = async (req, res) => {
	try {
		const Posts = await PostModel.find({ isDeleted: false }).populate(
			'user'
		);
		return sendResponse(res, 200, 'Posts retrieved successfully', {
			Posts: Posts,
		});
	} catch (error) {
		return sendResponse(res, 500, "Couldn't get posts", error);
	}
};

// Get a particular post and increase post views

export const GetPost = async (req, res) => {
	try {
		if (validationErrorCheck(req)) {
			return sendResponse(res, 400, validationErrorCheck(req));
		}

		// Get post
		const { id } = req.body;

		const Post = await PostModel.findOne({
			_id: ObjectId(id),
			isDeleted: false,
		}).populate('user');

		if (!Post) return sendResponse(res, 404, 'Post not found');

		// Increase views if its not the user that if checking

		const userEmail = getUserFromToken(req);
		const User = await getUserDetails({ email: userEmail });

		if (!Post.user.equals(User._id)) {
			Post.views = Post.views + 1;
			const newPost = await Post.save();
			return sendResponse(res, 200, 'Post retrieved successfully', {
				Post: newPost,
			});
		}

		return sendResponse(res, 200, 'Post retrieved successfully', {
			Post: Post,
		});
	} catch (error) {
		return sendResponse(res, 500, "Couldn't get post", error);
	}
};

// Get user's posts
export const GetUserPosts = async (req, res) => {
	try {
		const userEmail = await getUserFromToken(req);

		const Posts = await PostModel.find({
			email: userEmail,
			isDeleted: false,
		}).populate('user');
		return sendResponse(res, 200, 'Posts retrieved successfully', {
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
			user: User._id,
		});

		return sendResponse(res, 200, 'Post created successfully', {
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

		const Post = await PostModel.findOne({
			_id: ObjectId(id),
			isDeleted: false,
		});

		if (!Post) return sendResponse(res, 404, 'Post not found');
		if (title) Post.title = title;
		if (subtitle) Post.subtitle = subtitle;
		if (content) Post.content = content;

		// Update post's date
		Post.updatedAt = new Date();
		const newPost = await Post.save();

		return sendResponse(res, 200, 'Post updated successfully', {
			Post: newPost,
		});
	} catch (error) {
		return sendResponse(res, 500, "Couldn't update post", error);
	}
};

// Get comments for a particular post
export const GetPostComments = async (req, res) => {
	try {
		if (validationErrorCheck(req)) {
			return sendResponse(res, 400, validationErrorCheck(req));
		}

		const { id } = req.body;

		const Post = await PostModel.findOne({ _id: ObjectId(id) });

		if (!Post) return sendResponse(res, 404, 'Post not found');

		const comments = await CommentModel.find({ post: ObjectId(id) });

		return sendResponse(res, 200, 'Comments retrieved successfully', {
			Comments: comments,
		});
	} catch (error) {
		return sendResponse(res, 500, "Couldn't get post's comments", error);
	}
};

// Delete Post
export const DeletePost = async (req, res) => {
	try {
		if (validationErrorCheck(req)) {
			return sendResponse(res, 400, validationErrorCheck(req));
		}

		const { id } = req.body;
		const userEmail = getUserFromToken(req);
		const User = await getUserDetails({ email: userEmail });

		// Find the post and confirm it belongs to the user that is logged in
		const Post = await PostModel.findOne({
			_id: ObjectId(id),
			user: User._id,
		});

		if (!Post) return sendResponse(res, 404, 'Post not found');

		await PostModel.findOneAndUpdate(
			{ _id: ObjectId(id) },
			{ $set: { isDeleted: true } }
		);

		return sendResponse(res, 200, 'Post deleted successfully');
	} catch (error) {
		return sendResponse(res, 500, "Couldn't delete post", error);
	}
};

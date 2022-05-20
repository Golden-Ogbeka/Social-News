import { ObjectId } from 'mongodb';
import sendResponse from '../functions/response/sendResponse.js';
import validationErrorCheck from '../functions/response/validationErrorCheck.js';
import getUserDetails from '../functions/user/getUserDetails.js';
import { getUserFromToken } from '../functions/user/getUserFromToken.js';
import CommentModel from '../models/Comment.js';
import PostModel from '../models/Post.js';

// Get all posts
export const GetAllComments = async (req, res) => {
	try {
		// Get details of the post, the user in the post and then the user that made the comment
		const Comments = await CommentModel.find()
			.populate({
				path: 'post',
				populate: { path: 'user' },
			})
			.populate('user');
		return sendResponse(res, 200, 'Comments retrieved successfully', {
			Comments: Comments,
		});
	} catch (error) {
		return sendResponse(res, 500, "Couldn't get comments", error);
	}
};

export const AddCommentToPost = async (req, res) => {
	try {
		if (validationErrorCheck(req)) {
			return sendResponse(res, 400, validationErrorCheck(req));
		}

		const { id, content } = req.body;

		const Post = await PostModel.findOne({ _id: ObjectId(id) });

		if (!Post) return sendResponse(res, 404, 'Post not found');

		const userEmail = getUserFromToken(req);
		const User = await getUserDetails({ email: userEmail });

		const newComment = await CommentModel.create({
			content,
			post: id,
			user: User._id,
		});

		return sendResponse(res, 200, 'Comment created successfully', {
			Comment: newComment,
		});
	} catch (error) {
		return sendResponse(res, 500, "Couldn't add comment", error);
	}
};

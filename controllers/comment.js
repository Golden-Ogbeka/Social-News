import sendResponse from '../functions/response/sendResponse.js';
import CommentModel from '../models/Comment.js';

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
		return sendResponse(res, 200, 'Comments retrieved Successfully', {
			Comments: Comments,
		});
	} catch (error) {
		return sendResponse(res, 500, "Couldn't get comments", error);
	}
};

import express from 'express';
import { body } from 'express-validator';
import { AddCommentToPost, GetAllComments } from '../controllers/comment.js';
import verifyMongoID from '../middleware/posts/verifyMongoID.js';
import verifyUser from '../middleware/user/verifyUser.js';

const CommentRouter = express.Router();

// All posts
CommentRouter.get('/comments', verifyUser, GetAllComments);

// Add comment to Post
CommentRouter.post(
	'/comment/new',
	verifyUser,
	[
		body('content')
			.notEmpty()
			.withMessage('Comment content is required')
			.bail()
			.isString()
			.bail()
			.withMessage('Invalid comment')
			.trim()
			.escape(),
	],
	verifyMongoID,
	AddCommentToPost
);

export default CommentRouter;

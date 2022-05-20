import express from 'express';
import { body } from 'express-validator';
import {
	CreatePost,
	GetAllPosts,
	GetUserPosts,
	UpdatePost,
} from '../controllers/posts.js';
import postIsUnique from '../middleware/posts/postIsUnique.js';
import verifyMongoID from '../middleware/posts/verifyMongoID.js';
import verifyUser from '../middleware/user/verifyUser.js';

const PostRouter = express.Router();

// All posts
PostRouter.get('/posts', verifyUser, GetAllPosts);

// User's posts
PostRouter.get('/posts/user', verifyUser, GetUserPosts);

// Create Post
PostRouter.post(
	'/post/new',
	verifyUser,
	[
		body('title')
			.notEmpty()
			.withMessage('Post title is required')
			.bail()
			.isString()
			.bail()
			.withMessage('Invalid post title')
			.isLength({ min: 5 })
			.withMessage('Post title must be a minimum of 5 characters')
			.bail()
			.trim()
			.escape(),
		body('subtitle')
			.notEmpty()
			.withMessage('Post subtitle is required')
			.bail()
			.isString()
			.bail()
			.withMessage('Invalid post subtitle')
			.trim()
			.escape(),
		body('content')
			.notEmpty()
			.withMessage('Post content is required')
			.bail()
			.isString()
			.bail()
			.withMessage('Invalid post content')
			.trim()
			.escape(),
	],
	postIsUnique,
	CreatePost
);

// Update Post
PostRouter.put(
	'/post/update',
	verifyUser,
	[
		body('id')
			.notEmpty()
			.withMessage('Post ID is required')
			.bail()
			.isString()
			.withMessage('Invalid post ID')
			.bail()
			.trim()
			.escape(),
		body('title')
			.optional()
			.isString()
			.bail()
			.withMessage('Invalid post title')
			.isLength({ min: 5 })
			.withMessage('Post title must be a minimum of 5 characters')
			.bail()
			.trim()
			.escape(),
		body('subtitle')
			.optional()
			.isString()
			.bail()
			.withMessage('Invalid post subtitle')
			.trim()
			.escape(),
		body('content')
			.optional()
			.isString()
			.bail()
			.withMessage('Invalid post content')
			.trim()
			.escape(),
	],
	verifyMongoID,
	UpdatePost
);

export default PostRouter;

import express from 'express';
import { GetAllPosts, GetUserPosts } from '../controllers/posts.js';
import verifyUser from '../middleware/user/verifyUser.js';

const PostRouter = express.Router();

// All posts
PostRouter.get('/posts', verifyUser, GetAllPosts);

// User's posts
PostRouter.get('/posts/user', verifyUser, GetUserPosts);

export default PostRouter;

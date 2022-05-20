import express from 'express';
import { body } from 'express-validator';
import { GetAllComments } from '../controllers/comment.js';
import { GetAllPosts } from '../controllers/posts.js';
import verifyUser from '../middleware/user/verifyUser.js';

const CommentRouter = express.Router();

// All posts
CommentRouter.get('/comments', verifyUser, GetAllComments);

export default CommentRouter;

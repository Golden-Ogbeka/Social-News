import express from 'express';
import { body } from 'express-validator';
import {
	DeleteUser,
	FollowUser,
	GetUsers,
	UnFollowUser,
} from '../controllers/user.js';
import verifyMongoID from '../middleware/posts/verifyMongoID.js';
import verifyUser from '../middleware/user/verifyUser.js';

const UserRouter = express.Router();

// Get all users
UserRouter.get('/users', verifyUser, GetUsers);

// Follow user
UserRouter.post('/user/follow', verifyUser, verifyMongoID, FollowUser);

// Unfollow user
UserRouter.post('/user/unfollow', verifyUser, verifyMongoID, UnFollowUser);

// Delete User Account
UserRouter.delete('/user', verifyUser, DeleteUser);

export default UserRouter;

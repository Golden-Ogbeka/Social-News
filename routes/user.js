import express from 'express';
import { GetUsers } from '../controllers/user.js';
import verifyUser from '../middleware/user/verifyUser.js';

const UserRouter = express.Router();

// Get all users
UserRouter.get('/users', verifyUser, GetUsers);

export default UserRouter;

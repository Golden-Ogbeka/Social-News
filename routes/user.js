import express from 'express';
import { GetUsers } from '../controllers/user.js';

const UserRouter = express.Router();

// Get all users
UserRouter.get('/users', GetUsers);

export default UserRouter;

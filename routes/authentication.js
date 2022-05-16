import express from 'express';
import { LoginUser, RegisterUser } from '../controllers/authentication.js';

const AuthenticationRouter = express.Router();

// Login user
AuthenticationRouter.post('/user/login', LoginUser);

// Register User
AuthenticationRouter.post('/user/register', RegisterUser);

export default AuthenticationRouter;

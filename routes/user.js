import express from 'express';
import UserModel from '../models/User.js';

const router = express.Router();

// Get all users
router.get('/api/users', async (req, res) => {
	try {
		const Users = await UserModel.find();

		return res.json({ Users });
	} catch (error) {
		return res.status(500).json({
			message: "Couldn't get users",
		});
	}
});

router.post('/api/user/login', async (req, res) => {
	try {
		if (!req.body.email || !req.body.password) {
			return res.status(400).json({
				status: 'failed',
				message: 'Incomplete fields',
			});
		}
		const User = await UserModel.findOne({
			email: req.body.email,
			password: req.body.password,
		});
		if (!User) {
			return res.status(404).json({
				status: 'failed',
				message: 'Invalid email or password',
			});
		}
		return res.json({
			status: 'success',
			message: 'Sign in successful',
			User,
		});
	} catch (error) {
		return res.status(500).json({
			message: "Couldn't login",
		});
	}
});

router.post('/api/user/register', async (req, res) => {
	try {
		if (!req.body.email || !req.body.password || !req.body.name) {
			return res.status(400).json({
				status: 'failed',
				message: 'Incomplete fields',
			});
		}
		const { name, email, password } = req.body;

		let User = await UserModel.create({
			name,
			email,
			password,
		});

		return res.json({
			status: 'success',
			message: 'Sign up successful',
			User,
		});
	} catch (error) {
		return res.status(500).json({
			message: "Couldn't login",
		});
	}
});

export default router;

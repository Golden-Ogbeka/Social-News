import mongoose from 'mongoose';
import sendResponse from '../../functions/response/sendResponse.js';

export default function verifyPostID(req, res, next) {
	if (!mongoose.Types.ObjectId.isValid(req.body.id))
		return sendResponse(res, 400, 'Invalid Post ID');
	next();
}

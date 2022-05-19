import sendResponse from '../../functions/response/sendResponse.js';
import PostModel from '../../models/Post.js';

export default async function postIsUnique(req, res, next) {
	//Verify User's token
	try {
		let { title, subtitle } = req.body;

		let existingPost = await PostModel.findOne({ title, subtitle });
		if (existingPost) {
			return sendResponse(res, 400, 'Post already exists');
		}

		next();
	} catch (error) {
		return sendResponse(res, 500, 'Post could not be verified');
	}
}

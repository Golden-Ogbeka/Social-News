import mongoose from 'mongoose';
const { Schema } = mongoose;

const PostSchema = new Schema({
	title: { type: String, required: true },
	subtitle: { type: String, required: true },
	content: { type: String, required: true },
	views: { type: Number, required: true, default: 0 },
	comments: { type: Array, default: [] },
	userId: { type: String, required: true },
	userImageURL: { type: String, required: true },
	isDeleted: { type: Boolean, required: true, default: false },
	createdAt: {
		type: Date,
		default: new Date(),
	},
});

const PostModel = mongoose.model('Post', PostSchema);

export default PostModel;

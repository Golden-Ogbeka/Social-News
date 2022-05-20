import mongoose from 'mongoose';
const { Schema } = mongoose;

const CommentSchema = new Schema({
	content: { type: String, required: true },
	user: { type: Schema.Types.ObjectId, ref: 'User', required: true },
	post: { type: Schema.Types.ObjectId, ref: 'Post', required: true },
	createdAt: {
		type: Date,
		default: new Date(),
	},
	updatedAt: {
		type: Date,
		default: new Date(),
	},
});

const CommentModel = mongoose.model('Comment', CommentSchema);

export default CommentModel;

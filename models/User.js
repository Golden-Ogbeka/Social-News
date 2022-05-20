import mongoose from 'mongoose';
const { Schema } = mongoose;

const UserSchema = new Schema({
	name: { type: String, required: true },
	email: {
		type: String,
		unique: true,
		required: true,
	},
	password: {
		type: String,
		required: true,
	},
	verificationCode: {
		type: String,
	},
	imageUrl: { type: String, default: 'https://www.gravatar.com/avatar' },
	followers: [
		{
			type: Schema.Types.ObjectId,
			ref: 'User',
		},
	],
	mentors: [
		{
			type: Schema.Types.ObjectId,
			ref: 'User',
		},
	],
	isDeleted: { type: Boolean, default: false },
	createdAt: {
		type: Date,
		default: new Date(),
	},
	updatedAt: {
		type: Date,
		default: new Date(),
	},
});

UserSchema.set('toJSON', {
	transform: function (doc, ret, options) {
		// remove the password of every document before returning the result
		delete ret.password;
		delete ret.verificationCode;
		return ret;
	},
});

const UserModel = mongoose.model('User', UserSchema);

export default UserModel;

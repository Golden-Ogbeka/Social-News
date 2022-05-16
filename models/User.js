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
		// select: false,
		required: true,
	},
	verificationCode: {
		type: String,
		// select: false
	},
	phone: String,
	gender: String,
	address: String,
	imageUrl: String,
	isVerified: Boolean,
	isActive: Boolean,
	createdAt: {
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

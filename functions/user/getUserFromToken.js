import JWT from 'jsonwebtoken';

export const getUserFromToken = req => {
	try {
		let token = req.headers.authorization;

		if (token) {
			token = token.replace('Bearer ', '');
			const tokenObject = JWT.verify(token, process.env.JWT_SECRET);
			const userEmail = tokenObject.email;
			return userEmail;
		}
		return null;
	} catch (error) {
		return null;
	}
};

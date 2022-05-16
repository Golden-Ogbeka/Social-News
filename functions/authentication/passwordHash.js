import bcryptjs from 'bcryptjs';

export const hashPassword = password => {
	let salt = bcryptjs.genSaltSync(10);
	let hash = bcryptjs.hashSync(password, salt);
	return hash;
};

export const compareHashedPassword = (password, hashedPassword) => {
	const isSamePassword = bcryptjs.compareSync(password, hashedPassword);
	return isSamePassword;
};

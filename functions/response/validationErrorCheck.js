import { validationResult } from 'express-validator';

function validationErrorCheck(request) {
	const errors = validationResult(request).formatWith(
		({
			msg,
			//  ...rest
		}) => msg
	);
	if (!errors.isEmpty()) {
		return errors.array()[0];
	}
	return false;
}

export default validationErrorCheck;

const sendResponse = (response, status, message, payload) => {
	const statusType = status === 200 || status === 201 ? 'success' : 'failed';

	return response.status(status).json({
		status: statusType,
		message: message,
		payload,
	});
};

export default sendResponse;

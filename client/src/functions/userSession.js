import cryptoJs from 'crypto-js';
import { SESSION_KEY, SESSION_NAME } from './environmentVariables';

export const encrpyptSession = sessionDetails => {
	const encryptedText = cryptoJs.AES.encrypt(
		JSON.stringify(sessionDetails),
		process.env.REACT_APP_SESSION_KEY
	).toString();
	return encryptedText;
};

export const decryptSession = sessionDetails => {
	const decryptedText = cryptoJs.AES.decrypt(sessionDetails, SESSION_KEY);
	const originalSessionDetails = decryptedText.toString(cryptoJs.enc.Utf8);
	return originalSessionDetails;
};

export const getSessionDetails = () => {
	let sessionDetails = localStorage.getItem(SESSION_NAME);
	if (sessionDetails) {
		sessionDetails = decryptSession(sessionDetails);
	}

	return sessionDetails;
};

export const storeSessionDetails = sessionDetails => {
	const encrytedSession = encrpyptSession(sessionDetails);
	localStorage.setItem(SESSION_NAME, encrytedSession);
	return true;
};

export const removeSessionDetails = () => {
	localStorage.removeItem(SESSION_NAME);
	return true;
};

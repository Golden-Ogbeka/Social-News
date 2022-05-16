import nodemailer from 'nodemailer';
import dotenv from 'dotenv';
dotenv.config();

let transporter = nodemailer.createTransport({
	host: process.env.EMAIL_HOST,
	port: process.env.EMAIL_PORT,
	secure: process.env.EMAIL_SECURE,
	auth: {
		user: process.env.EMAIL_USER,
		pass: process.env.EMAIL_PASSWORD,
	},
});

// transporter.verify((err, success) => {
// 	if (err) return console.error(err);
// 	console.log('Your config is correct');
// });

const sendEmail = async (receiverAddress, mailSubject, mailText) => {
	try {
		let mailInfo = await transporter.sendMail({
			from: 'ogbekagolden@gmail.com',
			to: receiverAddress,
			subject: mailSubject,
			text: mailText,
		});
		return mailInfo;
	} catch (error) {
		return false;
	}
};

export default sendEmail;

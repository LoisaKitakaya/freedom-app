import { gmail_address, gmail_password, password } from '$lib/secrets';
import type { RequestHandler } from './$types';
import nodemailer from 'nodemailer';

const sendEmail = async ({ from, subject, text }) => {
	try {
		const transporter = nodemailer.createTransport({
			host: 'smtp.gmail.com',
			port: 587,
			secure: false,
			auth: {
				user: gmail_address,
				pass: gmail_password
			}
		});

		const info = await transporter.sendMail({
			from: gmail_address,
			to: gmail_address,
			subject: subject,
			text: from + ': ' + text
		});

		console.log('Message sent: %s', info.messageId);

		return true;
	} catch (error) {
		console.error('Error sending email:', error);
	}
};

export const POST: RequestHandler = async ({ request }) => {
	const token = request.headers.get('Authorization');

	if (token !== password) {
		return new Response(JSON.stringify({ message: 'Unauthorized' }), { status: 401 });
	}

	const body = await request.json();

	const isSuccess = await sendEmail({ from: body?.from, subject: body?.subject, text: body?.text });

	if (isSuccess) {
		return new Response(JSON.stringify({ message: 'Message sent successfully' }), { status: 200 });
	} else {
		return new Response(JSON.stringify({ message: 'Could not send message' }), { status: 400 });
	}
};

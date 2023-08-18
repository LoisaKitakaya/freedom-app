import type { Actions } from '@sveltejs/kit'
import nodemailer from 'nodemailer'
import { gmailPassword } from '$lib/secrets'

export const actions: Actions = {
	sendMessage: async ({ request }) => {
		const formData = await request.formData()

		const firstName = formData.get('firstName')
		const lastName = formData.get('lastName')
		const email = formData.get('email')
		const subject = formData.get('subject')
		const message = formData.get('message')

		const transporter = nodemailer.createTransport({
			service: 'gmail',
			auth: {
				user: 'loisadevmode@gmail.com',
				pass: gmailPassword
			}
		})

		const mailOptions = {
			to: 'kitakayaloisa@gmail.com',
			subject: `${subject}`,
			html: `<p>New message from potential client.</p>
                       <br />
                       <p>Name: ${firstName + ' ' + lastName}</p>
                       <p>Email: ${email}</p>
                       <p>Message: ${message}</p>`
		}

		transporter.sendMail(mailOptions, (error, info) => {
			if (error) {
				console.log(error)
			} else {
				console.log('Email sent: ' + info.response)
			}
		})

		return {
			update: { status: 'success', message: 'Message sent successfully!' }
		}
	}
}

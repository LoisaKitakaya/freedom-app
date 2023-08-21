import type { Actions } from '@sveltejs/kit'
import { backend } from '$lib/config'

export const actions: Actions = {
	sendMessage: async ({ request, fetch }) => {
		const formData = await request.formData()

		const firstName = formData.get('firstName')
		const lastName = formData.get('lastName')
		const email = formData.get('email')
		const subject = formData.get('subject')
		const message = formData.get('message')

		const contactEndpoint = `${backend}/contact/`

		const res = await fetch(contactEndpoint, {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json'
			},
			body: JSON.stringify({
				first_name: firstName,
				last_name: lastName,
				email: email,
				subject: subject,
				message: message
			})
		})
			.then((res) => res.json())
			.catch((error) => {
				console.error('Error:', error)
			})

		if (res !== null) {
			return {
				update: { status: res.data.status, message: res.data.message }
			}
		}
	}
}

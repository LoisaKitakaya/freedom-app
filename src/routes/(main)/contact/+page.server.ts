import type { Actions } from '@sveltejs/kit'

export const actions: Actions = {
	sendMessage: async ({ request }) => {
		const formData = await request.formData()

		const firstName = formData.get('firstName')
		const lastName = formData.get('lastName')
		const email = formData.get('email')
		const subject = formData.get('subject')
		const message = formData.get('message')

		console.log(firstName + ' ' + lastName + ' ' + email + ' ' + subject + ' ' + message) 

		return {
			update: { status: 'success', message: 'Message sent successfully!' }
		}
	}
}

import type { Actions } from '@sveltejs/kit'
import { backend } from '$lib/config'

export const actions: Actions = {
	setTheme: async ({ url, cookies }) => {
		const theme = url.searchParams.get('theme')

		if (theme) {
			cookies.set('appTheme', theme, {
				path: '/',
				maxAge: 60 * 60 * 24 * 365
			})
		}
	},
	requestResume: async ({ request, fetch }) => {
		const formData = await request.formData()

		const email = formData.get('email')

		const resumeEndpoint = `${backend}/resume/`

		fetch(resumeEndpoint, {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json'
			},
			body: JSON.stringify({ email })
		})
			.then((response) => response.json())
			.then((data) => {
				console.log('Response from server:', data)
			})
			.catch((error) => {
				console.error('Error:', error)
			})

		return {
			update: { status: 'success', message: `Resume has been sent to ${email}` }
		}
	}
}

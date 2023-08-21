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

		const res = await fetch(resumeEndpoint, {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json'
			},
			body: JSON.stringify({ email })
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

import type { Actions } from '@sveltejs/kit'

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
	requestResume: async ({ request }) => {
		const formData = await request.formData()

		const email = formData.get('email')

		console.log(email)

		return {
			update: { status: 'success', message: `Resume has been sent to ${email}` }
		}
	}
}

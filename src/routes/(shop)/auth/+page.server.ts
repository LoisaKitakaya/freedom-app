import { createNewCustomer, createNewUser, signInUser, signOutUser } from '$lib/supabase'
import { redirect, type Action } from '@sveltejs/kit'

export const actions: Action = {
	signOut: async ({ cookies }) => {
		await signOutUser()

		cookies.set('session', '', {
			path: '/',
			expires: new Date(0)
		})
	},
	signIn: async ({ request, cookies }) => {
		const formData = await request.formData()

		const email = formData.get('email')
		const password = formData.get('password')

		const auth = await signInUser(email, password)

		cookies.set('session', auth?.session.access_token, {
			path: '/',
			httpOnly: true,
			sameSite: 'strict',
			secure: process.env.NODE_ENV === 'production',
			maxAge: 60 * 60 * 24 * 1
		})

		throw redirect(302, '/shop')
	},
	signUp: async ({ request }) => {
		const formData = await request.formData()

		const firstName = formData.get('first_name')
		const lastName = formData.get('last_name')
		const email = formData.get('email')
		const phone = formData.get('phone')
		const password = formData.get('password')
		const confirmPassword = formData.get('confirm_password')

		if (password === confirmPassword) {
			// do nothing
		} else {
			throw new Error('Passwords do not match')
		}

		const register = await createNewUser(email, password)

		const newCustomer = await createNewCustomer(
			firstName,
			lastName,
			email,
			phone,
			register?.user?.id
		)

		if (register && newCustomer) {
			console.log(
				`User registration successful. Check your inbox (${register?.user?.email}) for more information.`
			)

			return {
				response: `User registration successful. Check your inbox (${register?.user?.email}) for more information.`
			}
		}
	}
}

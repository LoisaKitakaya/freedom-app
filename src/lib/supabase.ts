import { createClient } from '@supabase/supabase-js'
import { supabase_anon_key, supabase_project } from './secrets'

export const supabase = createClient(supabase_project, supabase_anon_key)

export const createNewUser = async (email: string, password: string) => {
	try {
		const { data, error } = await supabase.auth.signUp({
			email: email,
			password: password
		})

		if (error) {
			console.error('Error fetching data:', error.message)
		} else {
			console.log('Fetched data:', data)

			return data
		}
	} catch (e) {
		console.error('An unexpected error occurred:', e)
	}
}

export const signInUser = async (email: string, password: string) => {
	try {
		const { data, error } = await supabase.auth.signInWithPassword({
			email: email,
			password: password
		})

		if (error) {
			console.error('Error fetching data:', error.message)
		} else {
			console.log('Fetched data:', data)

			return data
		}
	} catch (e) {
		console.error('An unexpected error occurred:', e)
	}
}

export const signOutUser = async () => {
	try {
		const { error } = await supabase.auth.signOut()
		if (error) {
			console.error('Error fetching data:', error.message)
		} else {
			return
		}
	} catch (e) {
		console.error('An unexpected error occurred:', e)
	}
}

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
			throw new Error(error.message)
		}

		return data
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
			throw new Error(error.message)
		}

		return data
	} catch (e) {
		console.error('An unexpected error occurred:', e)
	}
}

export const signOutUser = async () => {
	try {
		const { error } = await supabase.auth.signOut()

		if (error) {
			throw new Error(error.message)
		}

		return
	} catch (e) {
		console.error('An unexpected error occurred:', e)
	}
}

export const createNewCustomer = async (
	first_name: string,
	last_name: string,
	email: string,
	phone: string,
	user: unknown
) => {
	try {
		const { data, error } = await supabase.from('customers').insert({
			first_name,
			last_name,
			email,
			phone,
			user
		})

		if (error) {
			throw new Error(error.message)
		}

		return data
	} catch (e) {
		console.error('An unexpected error occurred:', e)
	}
}

import { supabase } from '$lib/supabase'

export const load = async () => {
	try {
		const { data, error } = await supabase.from('products').select()

		if (error) {
			console.error('Error fetching data:', error.message)
		} else {
			console.log('Fetched data:', data)

			return {
				products: data ?? []
			}
		}
	} catch (e) {
		console.error('An unexpected error occurred:', e)
	}
}

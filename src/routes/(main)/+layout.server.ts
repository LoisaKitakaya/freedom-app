export const load = async ({ cookies }) => {
	let theme = ''
	const savedTheme = cookies.get('appTheme')

	if (savedTheme) {
		theme = savedTheme
	}

	return {
		theme
	}
}

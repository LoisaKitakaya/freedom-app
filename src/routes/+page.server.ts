export const actions = {
	setTheme: async ({ url, cookies }) => {
		const theme = url.searchParams.get('theme')

		if (theme) {
			cookies.set('colorTheme', theme, { path: '/', maxAge: 60 * 60 * 24 * 365 })
		}
	}
}

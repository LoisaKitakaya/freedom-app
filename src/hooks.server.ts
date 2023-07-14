export const handle = async ({ resolve, event }) => {
	let theme: string | null = null

	const newTheme = event.url.searchParams.get('theme')
	const cookieTheme = event.cookies.get('colorTheme')

	if (newTheme) {
		theme = newTheme
	} else if (cookieTheme) {
		theme = cookieTheme
	}

	if (theme) {
		return await resolve(event, {
			transformPageChunk: ({ html }) => html.replace('data-theme=""', `data-theme="${theme}"`)
		})
	}

	return await resolve(event)
}

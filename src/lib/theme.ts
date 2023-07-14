import { writable } from 'svelte/store'
import { browser } from '$app/environment'

type Theme = 'winter' | 'night'

const userTheme = browser && localStorage.getItem('theme')

export const theme = writable(userTheme ?? 'night')

export function toggleTheme() {
	theme.update((currentTheme) => {
		const newTheme = currentTheme === 'night' ? 'winter' : 'night'

		document.documentElement.setAttribute('data-theme', newTheme)
		localStorage.setItem('theme', newTheme)

		return newTheme
	})
}

export function setTheme(newTheme: Theme) {
	theme.set(newTheme)
}

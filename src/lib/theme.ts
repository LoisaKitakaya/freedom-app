import { writable } from 'svelte/store'
import { browser } from '$app/environment'

type Theme = 'fantasy' | 'dracula'

const userTheme = browser && localStorage.getItem('theme')

export const theme = writable(userTheme ?? 'dracula')

export function toggleTheme() {
	theme.update((currentTheme) => {
		const newTheme = currentTheme === 'dracula' ? 'fantasy' : 'dracula'

		document.documentElement.setAttribute('data-theme', newTheme)
		localStorage.setItem('theme', newTheme)

		return newTheme
	})
}

export function setTheme(newTheme: Theme) {
	theme.set(newTheme)
}

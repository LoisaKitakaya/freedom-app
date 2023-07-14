/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		extend: {}
	},
	plugins: [require('@tailwindcss/typography'), require('@tailwindcss/forms'), require('daisyui')],
	daisyui: {
		themes: ['winter', 'night'],
		darkTheme: 'night',
		base: true,
		styled: true,
		utils: true,
		rtl: false,
		prefix: '',
		logs: true
	}
}

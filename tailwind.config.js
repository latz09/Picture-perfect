/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		'./pages/**/*.{js,ts,jsx,tsx}',
		'./components/**/*.{js,ts,jsx,tsx}',
	],
	theme: {
		extend: {},
		fontFamily: {
			tinos: ['Tinos', 'serif'],
			mulish: ['Mulish', 'sans-serif'],
			questrial: ['Questrial', 'sans-serif'],
			oswald: ['Oswald', 'sans-serif'],
		},
		colors: {
			primary: '#E30015',
		
			secondary: '#779E43',
			tertiary: '#ffee65',
			dark: '#280004',
			light: '#FDF4F5',
		},
	},
	plugins: [require('@tailwindcss/forms')],
};

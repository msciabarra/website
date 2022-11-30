const typography = require('@tailwindcss/typography');
const forms = require('@tailwindcss/forms');
const aratio = require('@tailwindcss/aspect-ratio');

const config = {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		extend: {
			colors: {
				'nuv-light-blue': '#a0d8ea',
				'nuv-blue': '#1da1ce',
				'nuv-blue-border': '#2092d1',
				'nuv-light-gray': '#c4c4c4',
				'nuv-dark-gray': '#4d4d4d',
				'nuv-light-orange': '#ffa944',
				'nuv-orange': '#ff7113',
				'nuv-placeholder': '#999999',
				'nuv-disabled': '#a0d8ea',
				'nuv-text-light-gray': '#a8a6a7',
				'nuv-text-dark-gray': '#797979',
				'nuv-border-color': 'rgba(255, 255, 255, 0.28)',
				'nuv-download-gray': '#58595B',
				'nuv-card-background': 'rgba(217, 217, 217, 0.08)'
			},
			dropShadow: {
				'nuv-text-shadow': '0px 4px 4px rgba(0, 0, 0, 0.25)'
			},
			boxShadow: {
				'nuv-box-shadow': '0px 4px 4px rgba(0, 0, 0, 0.25)',
				'nuv-card-box-shadow': '0px 5px 5px 0px rgba(0, 0, 0, 0.25)'
			},
			fontSize: {
				'nuv-header': '55px'
			},
			borderRadius: {
				'nuv-button': '20px'
			}
		}
	},

	plugins: [forms, typography, aratio]
};

module.exports = config;

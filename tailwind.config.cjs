/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
	theme: {
		extend: {
			colors: {
				accent: "rgb(41, 207, 140)",
				subaccent: "#62d6da",
			},
		},
	},
	darkMode: "media",
	plugins: [],
};

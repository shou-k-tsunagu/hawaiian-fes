/** @type {import('tailwindcss').Config} */
module.exports = {
	darkMode: ["class"],
	// content: [
	//   './pages/**/*.{ts,tsx}',
	//   './components/**/*.{ts,tsx}',
	//   './app/**/*.{ts,tsx}',
	//   './src/**/*.{ts,tsx}',
	// ],
	content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
	prefix: "",
	theme: {
		container: {
			center: true,
			padding: "2rem",
			screens: {
				"2xl": "1400px",
			},
		},
		fontFamily: {
			sans: [
				"YuGothic",
				"Yu Gothic",
				"游ゴシック体",
				"游ゴシック",
				"Noto Sans JP",
				"sans-serif",
			],
		},
		extend: {
			colors: {
				white: "#FFFFFF",
				black: "#000000",
				blue: "#009DC8",
			},
			backgroundImage: {
				"main-bg": "url('/assets/common/main-bg.png')",
			},
			dropShadow: {
				og: "0px 10px 15px rgba(0, 0, 0, 0.25)",
			},
			keyframes: {
				"accordion-down": {
					from: { height: "0" },
					to: { height: "var(--radix-accordion-content-height)" },
				},
				"accordion-up": {
					from: { height: "var(--radix-accordion-content-height)" },
					to: { height: "0" },
				},
			},
			animation: {
				"accordion-down": "accordion-down 0.2s ease-out",
				"accordion-up": "accordion-up 0.2s ease-out",
			},
		},
	},
	plugins: [require("tailwindcss-animate")],
};

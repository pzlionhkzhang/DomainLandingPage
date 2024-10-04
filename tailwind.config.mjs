const defaultTheme = require("tailwindcss/defaultTheme");
import flattenColorPalette from "tailwindcss/lib/util/flattenColorPalette";
/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		// your paths
		"./src/**/*.{ts,tsx}",
	],
	theme: {
		extend: {
			animation: {
				aurora: "aurora 60s linear infinite",
			},
			keyframes: {
				aurora: {
					from: {
						backgroundPosition: "50% 50%, 50% 50%",
					},
					to: {
						backgroundPosition: "350% 50%, 350% 50%",
					},
				},
			},
			boxShadow: {
				input: `0px 2px 3px -1px rgba(0,0,0,0.1), 0px 1px 0px 0px rgba(25,28,33,0.02), 0px 0px 0px 1px rgba(25,28,33,0.08)`,
			},
			fontFamily: {
				sans: ["Libre Baskerville", ...defaultTheme.fontFamily.sans],
			},
		},
	},
	plugins: [addVariablesForColors],
};

// This plugin adds each Tailwind color as a global CSS variable, e.g. var(--gray-200).
function addVariablesForColors({
								   addBase,
								   theme
							   }) {
	let allColors = flattenColorPalette(theme("colors"));
	let newVars = Object.fromEntries(Object.entries(allColors).map(([key, val]) => [`--${key}`, val]));

	addBase({
		":root": newVars,
	});
}

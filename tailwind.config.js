/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./common/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    screens: {
      'sm': {'max': '767px'},
      // => @media (max-width: 767px) { ... }

      'md': {'min': '768px'},
      // => @media (min-width: 768px and max-width: 1023px) { ... }

      'lg': {'min': '992px'},
      // => @media (min-width: 1024px and max-width: 1279px) { ... }

      'xl': {'min': '1201px'},
      // => @media (min-width: 1280px and max-width: 1535px) { ... }

    },
    extend: {
      fontFamily: {
        inter: ["'Inter'", "sans-serif"],
        gelasio: ["'Gelasio'", "serif"],
        lato: ["'Lato'", "sans-serif"],
        merriweather: ["'Merriweather'", "serif"],
        poppins : ["'Poppins'","serif"]
      },
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        primary: "#2cacc4", // blue-400 hex value
      },
    },
  },
  plugins: [],
};

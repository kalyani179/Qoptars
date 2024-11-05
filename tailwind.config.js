/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./common/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
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
        primary: "#60a5fa", // blue-400 hex value
      },
    },
  },
  plugins: [],
};

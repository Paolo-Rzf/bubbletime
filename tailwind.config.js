/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        Kinetika_regular: ["Kinetika_regular"],
        kinetika_bold: ["kinetika_bold"]
      }
    },
  },
  plugins: [],
}


/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'sans': ['Montserrat', 'ui-sans-serif', 'system-ui'],
      },
      gridTemplateRows: {
        // Define the rows for the header, main content, and footer
        'layout': 'auto 1fr auto',
      },
      gridTemplateColumns: {
        // Define the columns for the sidebar and main content
        'layout': '250px 1fr',
      }
    },
  },
  plugins: [],
}

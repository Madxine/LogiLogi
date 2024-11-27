/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [    
    './app/**/*.{js,ts,jsx,tsx,mdx}', // Note the addition of the `app` directory.
    './app/dashboard/**/*.{js,ts,jsx,tsx,mdx}',
    './app/dashboard/components/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {},
    container: {
      padding: {
        DEFAULT: '1rem',
        sm: '2rem',
        lg: '4rem',
        xl: '5rem',
        '2xl': '6rem',
      },
      center:true,
    },
  },
  plugins: [],
}
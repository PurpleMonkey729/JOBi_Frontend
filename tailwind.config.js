/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {},
    screens: {
      'sp' : [
        {'min' : '390px', 'max' : '1024px'} 
      ],
      'db' : [
        {'max' : '550px'}
      ]
    }
  },
  plugins: [],
}


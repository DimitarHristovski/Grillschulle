/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {},
  },
  plugins: [],
  safelist: [
    'border-white',
    'border-black',
    'border-red-500',
    'border-blue-500',
    'bg-black',
    'bg-red-500',
    'bg-blue-500',
    'hover:bg-black',
    'hover:bg-red-600',
    'hover:bg-blue-600'
  ]
};
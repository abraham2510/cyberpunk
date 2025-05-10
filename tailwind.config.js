/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'blender': ['Blender Pro Book', 'Blender Pro', 'sans-serif'],
        'blenderbold': ['BlenderPro-Bold', 'sans-serif'],
        'refinery': ['Refinery-25', 'sans-serif'],
        'Jersey' : ['Jersey M54', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
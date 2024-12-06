/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class', // Habilita modo oscuro con clase
  theme: {
    extend: {
      colors: {
        // Paleta de colores futurista
        primary: {
          50: '#e6f1ff',
          100: '#b3d7ff',
          200: '#80bdff',
          300: '#4da3ff',
          400: '#1a89ff',
          500: '#0070f3', // Color principal
          600: '#0059c2',
          700: '#004191',
          800: '#002a60',
          900: '#001530',
        },
        dark: {
          50: '#1a1a2e',
          100: '#16213e',
          200: '#0f3460',
          300: '#0b2447',
          400: '#070c1f',
          500: '#040615', // Fondo oscuro principal
          600: '#020308',
        },
      },
      fontFamily: {
        futuristic: ['Inter', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        futuristic: '0 10px 25px rgba(0, 112, 243, 0.2)',
        'futuristic-dark': '0 10px 25px rgba(0, 112, 243, 0.1)',
      },
    },
  },
  plugins: [],
}

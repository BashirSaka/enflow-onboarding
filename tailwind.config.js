/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        bg: {
          page: '#0E0D0C',
          panel: '#161412',
          input: '#1F1B17',
        },
        border: {
          warm: '#2A1F18',
          input: '#3D2A1A',
        },
        accent: {
          DEFAULT: '#D9690D',
          dark: '#A8470A',
          light: '#E07B2E',
          gold: '#F5A623',
        },
        success: '#3FAE5A',
        ink: {
          DEFAULT: '#F5F3F1',
          muted: '#9A9590',
        },
        apple: '#241813',
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'sans-serif'],
      },
      backgroundImage: {
        'accent-gradient': 'linear-gradient(135deg, #D9690D 0%, #A8470A 100%)',
      },
    },
  },
  plugins: [],
}

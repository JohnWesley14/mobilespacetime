
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./App.tsx", "./App/**/*.tsx", "./app/Index.tsx", "./app/**/*.tsx",],
  theme: {
    extend: {
      fontFamily:{
        title: 'Roboto_700Bold',
        body: 'Roboto_400Regular',
        alt: 'BaiJamjuree_700Bold',
      },
      colors:{
        gray:{
          50: '#eaeaea',
          100: '#bebebf',
          200: '#9e9ea0',
          300: '#727275',
          400: '#56565a',
          500: '#2c2c31',
          600: '#28282d',
          700: '#1f1f23',
          800: '#18181b',
          900: '#121215',
        },
        purple:{
          50: '#f3eefc',
          100: '#d8cbf7',
          200: '#c6b2f3',
          300: '#ab8eee',
          400: '#9b79ea',
          500: '#8257e5',
          600: '#764fd0',
          700: '#5c3ea3',
          800: '#48307e',
          900: '#372560',
        }, //#e6fbef
        
        green:{
          50: '#f3eefc',
          100: '#d8cbf7',
          200: '#c6b2f3',
          300: '#ab8eee',
          400: '#9b79ea',
          500: '#04d361',
          600: '#04c058',
          700: '#5c3ea3',
          800: '#48307e',
          900: '#372560',
        },black:{
          900: "#000"
        }
        
      },
    },
  },
  plugins: [],
}

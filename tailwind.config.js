/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      animation:{
        'testing' : 'wiggle 2s linear infinite',
        'slide-top' : 'slide-top 1s cubic-bezier(0.250, 0.460, 0.450, 0.940) both;',
        'slide-right' : 'slide-right 1s cubic-bezier(0.250, 0.460, 0.450, 0.940) both;',
        'slide-left' : 'slide-left 1s cubic-bezier(0.250, 0.460, 0.450, 0.940) both;'
      },
      keyframes: {
        wiggle: {
          '0%, 100%': { transform: 'rotate(-3deg)' },
          '50%': { transform: 'rotate(3deg)' },
        },
        'slide-top' : {
          '0%' : {transform:' translateY(50px)', opacity: 0},
          '100%' : {transform: 'translateY(0)', opacity: 1}
        },
        'slide-right' : {
          '0%' : {transform:' translateX(-50px)', opacity: 0},
          '100%' : {transform: 'translateY(0)', opacity: 1}
        },
        'slide-left' : {
          '0%' : {transform:' translateX(50px)', opacity: 0},
          '100%' : {transform: 'translateY(0)', opacity: 1}
        }

      },
      colors:{
        primary : '#60a5fa',
        secondary : '#2563eb',
        muted : '#777',
        ligthMuted : '#f7f7f7'
      },
      backgroundImage : {
        'hero-image' : "linear-gradient(to right,rgba(#60a5fa, 0.584), #2563eb) , url(../src/images/hero.jpg)",
        testing : 'linear-gradient(to right,#60a5fa, #2563eb)'
      },
      background : {
        'hero-image-test' : "linear-gradient(to right,rgba(#60a5fa, 0.584), #2563eb) , url(../src/images/hero.jpg)"
      }
    },
  },
  plugins: [],
}

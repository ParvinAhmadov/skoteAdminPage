/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {
      colors: {
        backColor: "#2A3042",
        Textcolor: "#E9ECEF",  
        ItemColor: '#2A3042',
        Fotterbg: "#262B3C",
        Tablebg: "#222736",
        Listtextcolor: "#A6B0CF",
        Listbordercolor: "#32394E",

      },
      placeholderColor: {
        'custom-color': '#f0f0f0', 
      },
      fontWeight: {
        'customWeight': '400', 
      },
      keyframes: {
        ringing: {
          '0%': { transform: 'scale(1) rotate(0deg)' },
          '20%': { transform: 'scale(1) rotate(15deg)' },
          '40%': { transform: 'scale(1) rotate(-17deg)' },
          '60%': { transform: 'scale(1) rotate(15deg)' },
          '80%': { transform: 'scale(1) rotate(-17deg)' },
          '100%': { transform: 'scale(1) rotate(0deg)' },
        },
        spin: {
          '0%': { transform: 'rotate(0deg)' },
          '100%': { transform: 'rotate(360deg)' },
        },
      },
      animation: {
        ringing: 'ringing 0.7s ease-in-out infinite',
        spin: 'spin 2s linear infinite',
      },
      transitionProperty: {
        'transform': 'transform',
      },
      transitionDuration: {
        'default': '500ms',
      },
      transitionTimingFunction: {
        'default': 'ease-in-out',
      },
    },
  },
  plugins: [],
}

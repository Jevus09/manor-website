/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      height: {
        '128': '66vh',
        '100': '12rem',
        '104': '75vh',
        '112': '32rem',
        '110': '28rem',
      },
      width: {
        '128': '66vh',
        '104': '90vw',
        '108': '100vw',
        '100': '40rem',
        '97': '32',
      }
    },
  },
  variants: {
    extend: {
        display: ["group-hover"],
    },
},
  plugins: [require("daisyui")],
  daisyui: {
    themes: ["light", "dark", "cupcake", "bumblebee", "emerald", "corporate", "synthwave", "retro", "cyberpunk", "valentine", "halloween", "garden", "forest", "aqua", "lofi", "pastel", "fantasy", "wireframe", "black", "luxury", "dracula", "cmyk", "autumn", "business", "acid", "lemonade", "night", "coffee", "winter"]
  },
}


/** @type {import('tailwindcss').Config} */
export default {
    content: [
    "./index.html", "./src/**/*.{js,ts,jsx,tsx}",

  ],

  theme: {
       keyframes: {
        move: {
        "0%": { transform: "translateX(0)" },
          "50%": { transform: "translateX(10px)" },
          "100%": { transform: "translateX(0)" }
        }
      },
    extend: {
      animation: {
          "move":'move 1s infinite ease-in-out'
        },
        colors: {
          mains: "red",
          customcolorbg: '#1c2230',
secondcolor:"rgb(103 219 218)",
    
      },
          fontFamily: {
        roboto: ['Roboto', 'sans-serif'],
      },
    screens: {
     
      sm: "576px",
      md: "768px",
      lg: "992px",
      xl: "1200px",
      "xxl": "1400px",
    },
  }

  
  
  },
  plugins: [],
}


export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx,html}", // Add .html if needed
  ],
  theme: {
    screens: {
      sm: "480px",
      md: "768px",
      lg: "976px",
      "2lg": "1100px",
      xl: "1440px",
    },
    colors: {
      "bg-gray": "#A3A3A3",
      "bg-white": "#ffffff",
      "bg-secondary": "#152331",
      "bg-primary": "#45612D",
      "bg-orange": "#DD9932",
      "text-orange": "#bf8f45",
      "text-primary": "#101d2b",
      "text-secondary": "#626262",
      "text-white": "#ffffff",
    },
    fontFamily: {
      InterTight: ["Roboto", "sans-serif"],
    },
    extend: {
      spacing: {
        128: "32rem",
        144: "36rem",
      },
      borderRadius: {
        "4xl": "2rem",
      },
      maxWidth: {
        container: "1260px",
        header: "1460px",
      },
      animation: {
        "gradient-x": "gradient-x 3s ease infinite",
      },
      keyframes: {
        "gradient-x": {
          "0%, 100%": {
            "background-position": "0% 50%",
          },
          "50%": {
            "background-position": "100% 50%",
          },
        },
      },
    },
  },
  plugins: [],
};

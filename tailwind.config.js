module.exports = {
  darkMode: "class",
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./layouts/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundColor: {
        "inter-blue": "#09C0FA",
        "inter-yellow": "#FFB647",
        "inter-black": "#222831",
        "inter-white": "#FFFFFF",
      },
      fontFamily: {
        workSans: ['"Work Sans"', "sans-serif"],
        EbG: ['"EB Garamond"', "serif"],
        poppins: ['"Poppin"', "Arial", "sans-serif"],
      },
    },
  },
  plugins: [require("@tailwindcss/line-clamp")],
};

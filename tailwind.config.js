module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {},
  },daisyui: {
    themes: [
      {
        techParts: {
          primary: "#3F3F3F",
          secondary: "#19D3AE",
          accent: "#F6F6F6",
          neutral: "#3d4451",
          "base-100": "#ffffff",
        },
      },
      "dark",
      "cupcake",
    ],
  },
  plugins: [require("daisyui")],
}
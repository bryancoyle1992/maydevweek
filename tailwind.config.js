const defaultTheme = require("tailwindcss/defaultTheme")

// had to add purge: enabled: false in order to access all colors

module.exports = {
  mode: "jit",
  purge: {
    enabled: false,
    content: [
      "./src/pages/**/*.{js,ts,jsx,tsx}",
      "./src/components/**/*.{js,ts,jsx,tsx}",
    ],
  },
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter", ...defaultTheme.fontFamily.sans],
      },
      backgroundImage: (theme) => ({
        audits: "url('/audit_bg.jpg')",
        specifications: "url('/specs_ql.jpg')",
        supplychain: "url('/supply_chain_ql.png')",
        riskassessments: "url('/risk_assessment_ql.png')",
      }),
    },
  },

  variants: {
    scrollbar: ["rounded"],
    extend: {},
  },
  // eslint-disable-next-line global-require
  plugins: [
    require("tailwind-scrollbar"),
    require("@tailwindcss/typography"),
    require("@tailwindcss/forms"),
  ],
}

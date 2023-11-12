import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        bgColor: "#1C1D25",
        textGray: "#ffffff97",
        bgColor3: "#787f9f",
        bgColor4: "#4c5881",
        bgColor5: "#575a77",
      },
      screens: {
        'md': '812px',
      },
    },
  },
  plugins: [],
}
export default config

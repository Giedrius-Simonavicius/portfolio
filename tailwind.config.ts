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
        bgColor: "#e4e2df",
        bgColor2: "#c6c3bf",
        bgColor3: "#787f9f",
        bgColor4: "#4c5881",
        bgColor5: "#575a77",
      },
    },
  },
  plugins: [],
}
export default config

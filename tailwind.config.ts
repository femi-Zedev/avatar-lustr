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
        primary: {
          bold: "var(--primary-bold)",
          dark: "var(--primary-dark)",
          soft: "var(--primary--soft)",
          base: "var(--primary-base)",
          medium: "var(--primary-medium)",
          light: "var(--primary-light)",
          lighter: "var(--primary-lighter)",
          script: "var(--primary-script)"
        },
      }
    },
  },
  plugins: [],
}
export default config

import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    fontFamily: {
      'sans': ['var(--font-lato)', 'var(--font-noto-sans-jp)', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'sans-serif'],
      'japanese': ['var(--font-noto-sans-jp)', 'sans-serif'],
      'english': ['var(--font-lato)', 'sans-serif'],
    },
    extend: {
      // その他の拡張設定があればここに追加
    },
  },
  plugins: [],
}

export default config

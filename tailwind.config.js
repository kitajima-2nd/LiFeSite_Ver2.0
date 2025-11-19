/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#0abab5',
        'primary-foreground': '#ffffff',
        'surface': '#0abab514',
        'neutral-900': '#1a1a1a',
        'neutral-700': '#4a4a4a',
        'neutral-500': '#6b7280',
      },
      fontFamily: {
        sans: ['var(--font-noto-serif-jp)', 'system-ui', 'sans-serif'],
        display: ['var(--font-noto-serif-jp)', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        card: '0 16px 40px rgba(10, 186, 181, 0.12)',
      },
    },
  },
  plugins: [],
};

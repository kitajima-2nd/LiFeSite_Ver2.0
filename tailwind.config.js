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
        'primary-sm': '0 1px 2px 0 rgba(10, 186, 181, 0.3)',
        'primary': '0 4px 6px -1px rgba(10, 186, 181, 0.3), 0 2px 4px -1px rgba(10, 186, 181, 0.2)',
        'primary-md': '0 10px 15px -3px rgba(10, 186, 181, 0.3), 0 4px 6px -2px rgba(10, 186, 181, 0.2)',
        'primary-lg': '0 20px 25px -5px rgba(10, 186, 181, 0.3), 0 10px 10px -5px rgba(10, 186, 181, 0.2)',
        'primary-xl': '0 25px 50px -12px rgba(10, 186, 181, 0.3)',
        'primary-2xl': '0 25px 50px -12px rgba(10, 186, 181, 0.3)',
      },
    },
  },
  plugins: [],
};

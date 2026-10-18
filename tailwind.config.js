/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    './src/content/**/*.{js,ts,jsx,tsx,mdx}',
    './content/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        bg: '#F8F9FC',
        ink: '#101A35',
        accent: '#285BFF',
        tint: '#E9EEFA',
        muted: '#4E586E',
        'muted-light': '#68738A',
        positive: '#16834A',
        border: '#E1E6F0',
        'border-dark': '#1F2C4C',
        dark: '#0B1530',
        'dark-card': '#121F42',
      },
      fontFamily: {
        sans: ['var(--font-inter)', 'system-ui', 'sans-serif'],
        heading: ['var(--font-manrope)', 'system-ui', 'sans-serif'],
        hindi: ['var(--font-noto-devanagari)', 'sans-serif'],
      },
      borderRadius: {
        none: '0px',
        xs: '2px',
        sm: '4px',
        DEFAULT: '2px',
        md: '4px',
      },
      maxWidth: {
        site: '1200px',
      },
      letterSpacing: {
        tightest: '-0.03em',
        tighter: '-0.02em',
        eyebrow: '0.08em',
      },
      lineHeight: {
        tightest: '1.05',
        snugger: '1.15',
      },
    },
  },
  plugins: [],
};

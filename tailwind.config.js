/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ['class', '[data-theme="dark"]'],
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
        bg: 'var(--bg)',
        card: 'var(--card)',
        ink: 'var(--ink)',
        foreground: 'var(--foreground)',
        accent: 'var(--accent)',
        tint: 'var(--tint)',
        muted: 'var(--muted)',
        'muted-light': 'var(--muted-light)',
        positive: 'var(--positive)',
        border: 'var(--border)',
        'border-dark': 'var(--border-dark)',
        dark: 'var(--dark)',
        'dark-card': 'var(--dark-card)',
      },
      fontFamily: {
        sans: ['var(--font-inter)', 'system-ui', 'sans-serif'],
        heading: ['var(--font-manrope)', 'system-ui', 'sans-serif'],
        mono: ['var(--font-mono)', 'ui-monospace', 'monospace'],
        hindi: ['var(--font-hindi)', 'sans-serif'],
        serif: ['Georgia', 'serif'],
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

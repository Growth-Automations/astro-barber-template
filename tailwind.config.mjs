import typography from '@tailwindcss/typography';

const cssVar = (name) => `rgb(var(--color-${name}) / <alpha-value>)`;

/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    container: {
      center: true,
      padding: '1.5rem'
    },
    extend: {
      fontFamily: {
        heading: ['var(--font-heading)', 'sans-serif'],
        body: ['var(--font-body)', 'sans-serif']
      },
      colors: {
        primary: {
          DEFAULT: cssVar('primary'),
          dark: cssVar('primary-dark'),
          light: cssVar('primary-light')
        },
        accent: {
          DEFAULT: cssVar('accent'),
          dark: cssVar('accent-dark'),
          light: cssVar('accent-light')
        },
        background: cssVar('background'),
        surface: {
          DEFAULT: cssVar('surface'),
          alt: cssVar('surface-alt')
        },
        border: cssVar('border'),
        text: {
          primary: cssVar('text-primary'),
          secondary: cssVar('text-secondary'),
          muted: cssVar('text-muted')
        },
        'on-primary': cssVar('on-primary'),
        'on-accent': cssVar('on-accent'),
        footer: {
          accent: cssVar('footer-accent'),
          text: cssVar('footer-text'),
          'text-secondary': cssVar('footer-text-secondary'),
          'text-muted': cssVar('footer-text-muted'),
          surface: cssVar('footer-surface'),
          border: cssVar('footer-border')
        }
      }
    }
  },
  plugins: [typography]
};

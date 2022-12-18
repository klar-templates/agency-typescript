/** @type {import('tailwindcss').Config} */

function withOpacity(variableName) {
  return ({ opacityValue }) => {
    if (opacityValue !== undefined) {
      return `rgba(var(${variableName}), ${opacityValue})`;
    }
    return `rgb(var(${variableName}))`;
  };
}

module.exports = {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
    './public/blocks/*.html',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        display: [
          'var(--font-display)',
          'ui-sans-serif',
          'system-ui',
          '-apple-system',
          'BlinkMacSystemFont',
          'Segoe UI',
          'Roboto',
          'Helvetica Neue',
          'Arial',
          'Noto Sans',
          'sans-serif',
          'Apple Color Emoji',
          'Segoe UI Emoji',
          'Segoe UI Symbol',
          'Noto Color Emoji',
        ],
        body: [
          'var(--font-body)',
          'ui-sans-serif',
          'system-ui',
          '-apple-system',
          'BlinkMacSystemFont',
          'Segoe UI',
          'Roboto',
          'Helvetica Neue',
          'Arial',
          'Noto Sans',
          'sans-serif',
          'Apple Color Emoji',
          'Segoe UI Emoji',
          'Segoe UI Symbol',
          'Noto Color Emoji',
        ],
        logo: [
          'var(--font-logo)',
          'Helvetica Neue',
          'Helvetica',
          'Arial',
          'sans-serif',
        ],
      },
      colors: {
        primary: {
          DEFAULT: 'var(--primary-500)',
          50: 'var(--primary-50)',
          100: 'var(--primary-100)',
          200: 'var(--primary-200)',
          300: 'var(--primary-300)',
          400: 'var(--primary-400)',
          500: 'var(--primary-500)',
          600: 'var(--primary-600)',
          700: 'var(--primary-700)',
          800: 'var(--primary-800)',
          900: 'var(--primary-900)',
        },
        neutral: {
          DEFAULT: 'var(--neutral-500)',
          50: 'var(--neutral-50)',
          100: 'var(--neutral-100)',
          200: 'var(--neutral-200)',
          300: 'var(--neutral-300)',
          400: 'var(--neutral-400)',
          500: 'var(--neutral-500)',
          600: 'var(--neutral-600)',
          700: 'var(--neutral-700)',
          800: 'var(--neutral-800)',
          900: 'var(--neutral-900)',
        },

        'primary-dark': 'var(--color-primary-dark)',
        'primary-normal': 'var(--color-primary-normal)',
        'primary-light': 'var(--color-primary-light)',
        'inverse-primary-dark': 'var(--color-inverse-primary-dark)',
        'inverse-primary-normal': 'var(--color-inverse-primary-normal)',
        'inverse-primary-light': 'var(--color-inverse-primary-light)',

        'neutral-dark': 'var(--color-neutral-dark)',
        'neutral-normal': 'var(--color-neutral-normal)',
        'neutral-light': 'var(--color-neutral-light)',
        'inverse-neutral-dark': 'var(--color-inverse-neutral-dark)',
        'inverse-neutral-normal': 'var(--color-inverse-neutral-normal)',
        'inverse-neutral-light': 'var(--color-inverse-neutral-light)',

        'primary-container': 'var(--primary-container)',
        background: 'var(--background)',
        'inverse-background': 'var(--inverse-background)',
        surface: 'var(--surface)',
        'surface-variant': 'var(--surface-variant)',
        'inverse-surface': 'var(--inverse-surface)',
        'inverse-surface-variant': 'var(--inverse-surface-variant)',

        'on-primary': 'var(--on-primary)',
        'on-primary-container': 'var(--on-primary-container)',
        'inverse-primary': 'var(--inverse-primary)',
        'on-background': 'var(--on-background)',
        'inverse-on-background': 'var(--inverse-on-background)',
        'on-background-muted': 'var(--on-background)',
        'on-surface': 'var(--on-surface)',
        'on-surface-variant': 'var(--on-surface-variant)',
        'inverse-on-surface': 'var(--inverse-on-surface)',
        'inverse-on-surface-variant': 'var(--inverse-on-surface-variant)',

        outline: 'var(--outline)',
      },
    },
  },
  plugins: [],
};

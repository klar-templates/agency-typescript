/** @type {import('tailwindcss').Config} */

function withOpacity(variableName) {
  console.log(variableName);
  return ({ opacityValue }) => {
    if (opacityValue !== undefined) {
      return `rgb(var(${variableName}), ${opacityValue})`;
    }
    return `rgb(var(${variableName}))`;
  };
}
const defaultTheme = require('tailwindcss/defaultTheme');
module.exports = {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
    './src/components/blocks/nunjucks/*.html',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        display: ['var(--font-display)', ...defaultTheme.fontFamily.sans],
        body: ['var(--font-body)', ...defaultTheme.fontFamily.sans],
        logo: ['var(--font-logo)', ...defaultTheme.fontFamily.sans],
      },
      colors: {
        primary: {
          DEFAULT: 'rgb(var(--primary-500) / <alpha-value>)',
          50: 'rgb(var(--primary-50) / <alpha-value>)',
          100: 'rgb(var(--primary-100) / <alpha-value>)',
          200: 'rgb(var(--primary-200) / <alpha-value>)',
          300: 'rgb(var(--primary-300) / <alpha-value>)',
          400: 'rgb(var(--primary-400) / <alpha-value>)',
          500: 'rgb(var(--primary-500) / <alpha-value>)',
          600: 'rgb(var(--primary-600) / <alpha-value>)',
          700: 'rgb(var(--primary-700) / <alpha-value>)',
          800: 'rgb(var(--primary-800) / <alpha-value>)',
          900: 'rgb(var(--primary-900) / <alpha-value>)',
        },
        neutral: {
          DEFAULT: 'rgb(var(--neutral-500) / <alpha-value>)',
          50: 'rgb(var(--neutral-50) / <alpha-value>)',
          100: 'rgb(var(--neutral-100) / <alpha-value>)',
          200: 'rgb(var(--neutral-200) / <alpha-value>)',
          300: 'rgb(var(--neutral-300) / <alpha-value>)',
          400: 'rgb(var(--neutral-400) / <alpha-value>)',
          500: 'rgb(var(--neutral-500) / <alpha-value>)',
          600: 'rgb(var(--neutral-600) / <alpha-value>)',
          700: 'rgb(var(--neutral-700) / <alpha-value>)',
          800: 'rgb(var(--neutral-800) / <alpha-value>)',
          900: 'rgb(var(--neutral-900) / <alpha-value>)',
        },

        // The below is not in use
        // 'primary-dark': 'var(--color-primary-dark)',
        // 'primary-normal': 'var(--color-primary-normal)',
        // 'primary-light': 'var(--color-primary-light)',
        // 'inverse-primary-dark': 'var(--color-inverse-primary-dark)',
        // 'inverse-primary-normal': 'var(--color-inverse-primary-normal)',
        // 'inverse-primary-light': 'var(--color-inverse-primary-light)',

        // 'neutral-0': 'var(--neutral-0)',
        // 'neutral-1': 'var(--neutral-1)',
        // 'neutral-2': 'var(--neutral-2)',
        // 'neutral-3': 'var(--neutral-3)',
        // 'neutral-4': 'var(--neutral-4)',
        // 'neutral-5': 'var(--neutral-5)',
        // 'neutral-6': 'var(--neutral-6)',
        // 'neutral-7': 'var(--neutral-7)',
        // 'neutral-8': 'var(--neutral-8)',
        // 'neutral-9': 'var(--neutral-9)',

        // 'neutral-dark': 'var(--color-neutral-dark)',
        // 'neutral-normal': 'var(--color-neutral-normal)',
        // 'neutral-light': 'var(--color-neutral-light)',
        // 'inverse-neutral-dark': 'var(--color-inverse-neutral-dark)',
        // 'inverse-neutral-normal': 'var(--color-inverse-neutral-normal)',
        // 'inverse-neutral-light': 'var(--color-inverse-neutral-light)',

        // 'primary-container': 'var(--primary-container)',
        // background: 'var(--background)',
        // 'inverse-background': 'var(--inverse-background)',
        // surface: 'var(--surface)',
        // 'surface-variant': 'var(--surface-variant)',
        // 'inverse-surface': 'var(--inverse-surface)',
        // 'inverse-surface-variant': 'var(--inverse-surface-variant)',

        // 'on-primary': 'var(--on-primary)',
        // 'on-primary-container': 'var(--on-primary-container)',
        // 'inverse-primary': 'var(--inverse-primary)',
        // 'on-background': 'var(--on-background)',
        // 'inverse-on-background': 'var(--inverse-on-background)',
        // 'on-background-muted': 'var(--on-background)',
        // 'on-surface': 'var(--on-surface)',
        // 'on-surface-variant': 'var(--on-surface-variant)',
        // 'inverse-on-surface': 'var(--inverse-on-surface)',
        // 'inverse-on-surface-variant': 'var(--inverse-on-surface-variant)',

        // outline: 'var(--outline)',
      },
    },
  },
  plugins: [require('@tailwindcss/forms')],
};

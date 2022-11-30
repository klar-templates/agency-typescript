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
      colors: {
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

        outline: 'var(--outline)',
      },
      backgroundColor: {
        primary: 'var(--primary)',
        'primary-dark': 'var(--primary-dark)',
        'primary-container': 'var(--primary-container)',
        background: 'var(--background)',
        'inverse-background': 'var(--inverse-background)',
        surface: 'var(--surface)',
        'surface-variant': 'var(--surface-variant)',
        'inverse-surface': 'var(--inverse-surface)',
        'inverse-surface-variant': 'var(--inverse-surface-variant)',
      },
      textColor: {
        primary: 'var(--primary)',
        'primary-dark': 'var(--primary-dark)',
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
      },
    },
  },
  plugins: [],
};

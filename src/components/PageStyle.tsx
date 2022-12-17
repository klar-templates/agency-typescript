import RenderStyle from './RenderStyle';

export default function PageStyle(data: any) {
  const theme = data.theme;
  const pageStyle = `
    :root {
      /* primary */
      --primary-50: #eff6ff;
      --primary-100: #dbeafe;
      --primary-200: #bfdbfe;
      --primary-300: #93c5fd;
      --primary-400: #60a5fa;
      --primary-500: #3b82f6;
      --primary-600: #2563eb;
      --primary-700: #1d4ed8;
      --primary-800: #1e40af;
      --primary-900: #1e3a8a;

      /* neutral */
      --neutral-50: #f9fafb;
      --neutral-100: #f3f4f6;
      --neutral-200: #e5e7eb;
      --neutral-300: #d1d5db;
      --neutral-400: #9ca3af;
      --neutral-500: #6b7280;
      --neutral-600: #4b5563;
      --neutral-700: #374151;
      --neutral-800: #1f2937;
      --neutral-900: #111827;

      /* neutral variant */
      --neutral-variant-50: #f9fafb;
      --neutral-variant-100: #f3f4f6;
      --neutral-variant-200: #e5e7eb;
      --neutral-variant-300: #d1d5db;
      --neutral-variant-400: #9ca3af;
      --neutral-variant-500: #6b7280;
      --neutral-variant-600: #4b5563;
      --neutral-variant-700: #374151;
      --neutral-variant-800: #1f2937;
      --neutral-variant-900: #111827;

      /* light - default */
      --primary: var(--primary-500);
      --primary-dark: var(--primary-700);
      --on-primary: white;
      --primary-container: var(--primary-100);
      --on-primary-container: var(--primary-900);
      --inverse-primary: var(--primary-900);
      --background: var(--neutral-50);
      --inverse-background: var(--neutral-900);
      --on-background: var(--neutral-900);
      --on-background-muted: var(--neutral-700);
      --surface: var(--neutral-100);
      --on-surface: var(--neutral-700);
      --surface-variant: var(--neutral-200);
      --on-surface-variant: var(--neutral-600);
      --inverse-on-background: white;
      --inverse-surface: var(--neutral-700);
      --inverse-on-surface: var(--neutral-200);
      --inverse-surface-variant: var(--neutral-500);
      --inverse-on-surface-variant: var(--neutral-300);
      --outline: var(--neutral-200);

      --color-primary-dark: var(--primary-600);
      --color-primary-normal: var(--primary-500);
      --color-primary-light: var(--primary-300);
      --color-inverse-primary-dark: var(--primary-200);
      --color-inverse-primary-normal: var(--primary-100);
      --color-inverse-primary-light: var(--primary-50);

      --color-neutral-dark: var(--neutral-900);
      --color-neutral-normal: var(--neutral-700);
      --color-neutral-light: var(--neutral-500);
      --color-inverse-neutral-dark-inverse: var(--neutral-200);
      --color-inverse-neutral-normal: var(--neutral-100);
      --color-inverse-neutral-light: var(--neutral-50);
    }

    .dark {
      /* dark */
      --primary: var(--primary-500);
      --primary-dark: var(--primary-700);
      --on-primary: white;
      --primary-container: var(--primary-100);
      --on-primary-container: var(--primary-900);
      --inverse-primary: var(--primary-900);
      --background: var(--neutral-900);
      --inverse-background: var(--neutral-50);
      --on-background: var(--neutral-200);
      --on-background-muted: var(--neutral-100);
      --surface: var(--neutral-800);
      --on-surface: var(--neutral-100);
      --surface-variant: var(--neutral-700);
      --on-surface-variant: var(--neutral-100);
      --inverse-on-background: black;
      --inverse-surface: var(--neutral-100);
      --inverse-on-surface: var(--neutral-800);
      --inverse-surface-variant: var(--neutral-100);
      --inverse-on-surface-variant: var(--neutral-1800);
      --outline: var(--neutral-800);

      --color-primary-dark: var(--primary-50);
      --color-primary-normal: var(--primary-100);
      --color-primary-light: var(--primary-200);
      --color-inverse-primary-dark: var(--primary-900);
      --color-inverse-primary-normal: var(--primary-700);
      --color-inverse-primary-light: var(--primary-500);

      --color-neutral-dark: var(--neutral-50);
      --color-neutral-normal: var(--neutral-100);
      --color-neutral-light: var(--neutral-200);
      --color-inverse-neutral-dark: var(--neutral-900);
      --color-inverse-neutral-normal: var(--neutral-700);
      --color-inverse-neutral-light: var(--neutral-500);
    }
  `;
  return <RenderStyle id="css-variables">{pageStyle}</RenderStyle>;
}

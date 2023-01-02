import { useEffect } from 'react';
import RenderStyle from './RenderStyle';

export default function PageStyle(data: any) {
  const fallbackFonts =
    ',ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"';

  useEffect(() => {
    // if (window.production) {
    //   return;
    // }
    // const systemWebfonts = [
    //   'ui-sans-serif',
    //   'Open Sans',
    //   'Arial',
    //   'sans-serif',
    // ];
    // const googleEndpoint = '//fonts.googleapis.com/css?family=';
    // let link;
    // if (
    //   !systemWebfonts.includes(data.theme.typography.font_display) &&
    //   !document.querySelector(
    //     '#font-display-' + data.theme.typography.font_display.replace(' ', '-'),
    //   )
    // ) {
    //   link = document.createElement('link');
    //   link.id =
    //     'font-display-' + data.theme.typography.font_display.replace(' ', '-');
    //   link.rel = 'stylesheet';
    //   link.href = `${googleEndpoint}${data.theme.typography.font_display}:400,500,600,700`;
    //   document.querySelector('head')?.appendChild(link);
    // }
    // if (
    //   !systemWebfonts.includes(data.theme.typography.font_body) &&
    //   !document.querySelector(
    //     '#font-body-' + data.theme.typography.font_body.replace(' ', '-'),
    //   )
    // ) {
    //   link = document.createElement('link');
    //   link.id =
    //     'font-body-' + data.theme.typography.font_body.replace(' ', '-');
    //   link.rel = 'stylesheet';
    //   link.href = `${googleEndpoint}${data.theme.typography.font_body}:400,500,600,700`;
    //   document.querySelector('head')?.appendChild(link);
    // }
    // if (
    //   !systemWebfonts.includes(data.theme.typography.font_logo) &&
    //   !document.querySelector(
    //     '#font-logo-' + data.theme.typography.font_logo.replace(' ', '-'),
    //   )
    // ) {
    //   link = document.createElement('link');
    //   link.id =
    //     'font-logo-' + data.theme.typography.font_logo.replace(' ', '-');
    //   link.rel = 'stylesheet';
    //   link.href = `${googleEndpoint}${data.theme.typography.font_logo}:400,500,600,700`;
    //   document.querySelector('head')?.appendChild(link);
    // }
    // if (!document.querySelector('#font-logo-DroidSerif')) {
    //   link = document.createElement('link');
    //   link.id = 'font-logo-DroidSerif';
    //   link.rel = 'stylesheet';
    //   link.href = `//fonts.googleapis.com/css?family=Droid+Serif:400,700,400italic,700italic`;
    //   document.querySelector('head')?.appendChild(link);
    // }
    // if (!document.querySelector('#font-font-awesome')) {
    //   link = document.createElement('link');
    //   link.id = 'font-font-awesome';
    //   link.rel = 'stylesheet';
    //   link.href = `//maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css`;
    //   document.querySelector('head')?.appendChild(link);
    // }
  });

  if (
    window.releaseReactApp &&
    window.klarContext.data.pages[0]._id !== window.klarContext.currentPage._id
  ) {
    return null;
  }

  const primary_shades = data.theme.colors.primary_shades.colors;
  const neutral_shades = data.theme.colors.neutral_shades.colors;
  const primary_shades_rgb = data.theme.colors.primary_shades_rgb.colors;
  const neutral_shades_rgb = data.theme.colors.neutral_shades_rgb.colors;
  // console.log(
  //   `${primary_shades_rgb['50'].r} ${primary_shades_rgb['50'].g} ${primary_shades_rgb['50'].b}`,
  // );

  const pageStyle = `
  :root {
    /* font family */
    --font-display: ${data.theme.typography.font_display};
    --font-body: ${data.theme.typography.font_body};
    --font-logo: ${data.theme.typography.font_logo};
    
    /* primary */
    --primary-50: ${primary_shades['50']};
    --primary-100: ${primary_shades['100']};
    --primary-200: ${primary_shades['200']};
    --primary-300: ${primary_shades['300']};
    --primary-400: ${primary_shades['400']};
    --primary-500: ${primary_shades['500']};
    --primary-600: ${primary_shades['600']};
    --primary-700: ${primary_shades['700']};
    --primary-800: ${primary_shades['800']};
    --primary-900: ${primary_shades['900']};

    /* neutral */
    --neutral-50: ${neutral_shades['50']};
    --neutral-100: ${neutral_shades['100']};
    --neutral-200: ${neutral_shades['200']};
    --neutral-300: ${neutral_shades['300']};
    --neutral-400: ${neutral_shades['400']};
    --neutral-500: ${neutral_shades['500']};
    --neutral-600: ${neutral_shades['600']};
    --neutral-700: ${neutral_shades['700']};
    --neutral-800: ${neutral_shades['800']};
    --neutral-900: ${neutral_shades['900']};

    /* primary */
    --primary-50: ${primary_shades_rgb['50'].r} ${primary_shades_rgb['50'].g} ${primary_shades_rgb['50'].b};
    --primary-100: ${primary_shades_rgb['100'].r} ${primary_shades_rgb['100'].g} ${primary_shades_rgb['100'].b};
    --primary-200: ${primary_shades_rgb['200'].r} ${primary_shades_rgb['200'].g} ${primary_shades_rgb['200'].b};
    --primary-300: ${primary_shades_rgb['300'].r} ${primary_shades_rgb['300'].g} ${primary_shades_rgb['300'].b};
    --primary-400: ${primary_shades_rgb['400'].r} ${primary_shades_rgb['400'].g} ${primary_shades_rgb['400'].b};
    --primary-500: ${primary_shades_rgb['500'].r} ${primary_shades_rgb['500'].g} ${primary_shades_rgb['500'].b};
    --primary-600: ${primary_shades_rgb['600'].r} ${primary_shades_rgb['600'].g} ${primary_shades_rgb['600'].b};
    --primary-700: ${primary_shades_rgb['700'].r} ${primary_shades_rgb['700'].g} ${primary_shades_rgb['700'].b};
    --primary-800: ${primary_shades_rgb['800'].r} ${primary_shades_rgb['800'].g} ${primary_shades_rgb['800'].b};
    --primary-900: ${primary_shades_rgb['900'].r} ${primary_shades_rgb['900'].g} ${primary_shades_rgb['900'].b};

    /* neutral */
    --neutral-50: ${neutral_shades_rgb['50'].r} ${neutral_shades_rgb['50'].g} ${neutral_shades_rgb['50'].b};
    --neutral-100: ${neutral_shades_rgb['100'].r} ${neutral_shades_rgb['100'].g} ${neutral_shades_rgb['100'].b};
    --neutral-200: ${neutral_shades_rgb['200'].r} ${neutral_shades_rgb['200'].g} ${neutral_shades_rgb['200'].b};
    --neutral-300: ${neutral_shades_rgb['300'].r} ${neutral_shades_rgb['300'].g} ${neutral_shades_rgb['300'].b};
    --neutral-400: ${neutral_shades_rgb['400'].r} ${neutral_shades_rgb['400'].g} ${neutral_shades_rgb['400'].b};
    --neutral-500: ${neutral_shades_rgb['500'].r} ${neutral_shades_rgb['500'].g} ${neutral_shades_rgb['500'].b};
    --neutral-600: ${neutral_shades_rgb['600'].r} ${neutral_shades_rgb['600'].g} ${neutral_shades_rgb['600'].b};
    --neutral-700: ${neutral_shades_rgb['700'].r} ${neutral_shades_rgb['700'].g} ${neutral_shades_rgb['700'].b};
    --neutral-800: ${neutral_shades_rgb['800'].r} ${neutral_shades_rgb['800'].g} ${neutral_shades_rgb['800'].b};
    --neutral-900: ${neutral_shades_rgb['900'].r} ${neutral_shades_rgb['900'].g} ${neutral_shades_rgb['900'].b};

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

    --neutral-0: var(--neutral-50);
    --neutral-1: var(--neutral-100);
    --neutral-2: var(--neutral-200);
    --neutral-3: var(--neutral-300);
    --neutral-4: var(--neutral-400);
    --neutral-5: var(--neutral-500);
    --neutral-6: var(--neutral-600);
    --neutral-7: var(--neutral-700);
    --neutral-8: var(--neutral-800);
    --neutral-9: var(--neutral-900);
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

    --neutral-0: var(--neutral-900);
    --neutral-1: var(--neutral-800);
    --neutral-2: var(--neutral-700);
    --neutral-3: var(--neutral-600);
    --neutral-4: var(--neutral-500);
    --neutral-5: var(--neutral-400);
    --neutral-6: var(--neutral-300);
    --neutral-7: var(--neutral-200);
    --neutral-8: var(--neutral-100);
    --neutral-9: var(--neutral-50);
  }

  body {
    background-color: #fff;
    font-size: ${data.theme.typography.text_base_size}px;
  }

  h1, h2, h3, h4, h5, h6 {
    font-family: ${data.theme.typography.font_display}${fallbackFonts};
  }
  `;
  return <RenderStyle id="css-variables">{pageStyle}</RenderStyle>;
}

import { Helmet, HelmetProvider } from 'react-helmet-async';
import nunjucks from 'nunjucks';
import RenderScript from './RenderScript';

const htmlStrToReactComponent = (str: any, key: any) => {
  const dom = new DOMParser().parseFromString(str, 'text/html');
  const el: any = dom.documentElement.querySelector(
    ':not(html):not(head):not(body)',
  );
  const NodeName = el.nodeName.toLowerCase();
  const attributes = Object.fromEntries(
    [...el.attributes].map(({ name, value }) => [
      name,
      nunjucks.renderString(value, window.klarContext.currentPage),
    ]),
  );
  attributes.key = key;
  return <NodeName {...attributes} />;
};

export default function Layout(data: any) {
  nunjucks.configure({ autoescape: false });
  const googleEndpoint = 'https://fonts.googleapis.com/css?family=';
  const systemWebfonts = ['ui-sans-serif', 'Open Sans', 'Arial', 'sans-serif'];

  const fallbackFonts =
    ',ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"';
  const primary_shades_rgb = data.theme.colors.primary_shades_rgb.colors;
  const neutral_shades_rgb = data.theme.colors.neutral_shades_rgb.colors;

  const cssVariables = `
  :root {
    /* font family */
    --font-display: ${data.theme.typography.font_display};
    --font-body: ${data.theme.typography.font_body};
    --font-logo: ${data.theme.typography.font_logo};

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
  }

  body {
    background-color: ${data.theme.lightmode.bg_color};
    font-size: ${data.theme.typography.text_base_size}px;
  }
  
  .dark body {
    background-color: ${data.theme.darkmode.bg_color};
  }`;

  let headElementsArray: any = [];
  if (window.head_elements_array) {
    headElementsArray = window.head_elements_array;
  } else {
    let headElements: any = data.site.data.head.head_elements_array;
    if (headElements) {
      headElements.push('<meta name="title" content="{{_menu_item_name}}">');
      headElements.map((headElement: any, i: any) => {
        headElementsArray.push(
          htmlStrToReactComponent(headElement, `head-element-${i}`),
        );
      });
      window.head_elements_array = headElementsArray;
    }
  }
  // console.log(window.klarContext.currentPage);
  // console.log(window.head_elements_array);
  return (
    <>
      <Helmet>
        <title>
          {window.klarContext.currentPage &&
            window.klarContext.currentPage.settings.title}
        </title>
        <meta
          name="description"
          content={
            window.klarContext.currentPage &&
            window.klarContext.currentPage.settings.description
          }
        />
        {headElementsArray}
        <style>{cssVariables}</style>
        {!window.production && (
          <>
            <link rel="preconnect" href="https://fonts.googleapis.com" />
            <link
              rel="preconnect"
              href="https://fonts.gstatic.com"
              crossOrigin="true"
            />
          </>
        )}
        {!window.production &&
          !systemWebfonts.includes(data.theme.typography.font_display) && (
            <link
              rel="stylesheet"
              href={`${googleEndpoint}${data.theme.typography.font_display}:400,500,600,700`}
            />
          )}
        {!window.production &&
          !systemWebfonts.includes(data.theme.typography.font_body) && (
            <link
              rel="stylesheet"
              href={`${googleEndpoint}${data.theme.typography.font_body}:400,500,600,700`}
            />
          )}
        {!window.production &&
          !systemWebfonts.includes(data.theme.typography.font_logo) && (
            <link
              rel="stylesheet"
              href={`${googleEndpoint}${data.theme.typography.font_logo}:400,500,600,700`}
            />
          )}
        {!window.production && (
          <link
            rel="stylesheet"
            href={`//fonts.googleapis.com/css?family=Droid+Serif:400,700,400italic,700italic`}
          />
        )}
        {!window.production && (
          <link
            rel="stylesheet"
            href={`//maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css`}
          />
        )}
      </Helmet>
      {/* {data.site.data.head.head_elements_array && (
        <RenderScript>{data.site.data.head.inline_script}</RenderScript>
      )} */}
    </>
  );
}

// let headerBlock;
// let footerBlock;
// const blocksToRender: any = [];

// data.children.forEach((block: any) => {
//   // console.log(block)
//   // if (block.type.name === 'navigation') {
//   //   headerBlock = block.props;
//   //   console.log('hehehe', headerBlock)
//   //   return;
//   // }
//   // if (block.type.name === 'FooterReact') {
//   //   footerBlock = block.props;
//   //   return;
//   // }
//   blocksToRender.push(block);
// });
// const metaArr = [];
// metaArr.push({ name: 'og:title', content: 'En titel igen' });
// const metaTags = metaArr.map((m, i) => <meta {...m} key={`meta-${i}`} />);
// const linkArr = [];
// linkArr.push({
//   href: 'https://www.google.se',
//   crossOrigin: undefined,
//   rel: 'stylesheet',
//   type: 'text/css',
// });
// const linkTags = linkArr.map((l, i) => <link {...l} key={`link-${i}`} />);
// const scriptArr = [];
// scriptArr.push({
//   src: 'https://code.jquery.com/jquery-3.6.3.min.js',
//   rel: '',
//   type: 'text/javascript',
//   chilren: 'console.log("Gab)',
// });
// const scriptTags = scriptArr.map((s, i) => (
//   <script {...s} key={`script-${i}`} />
// ));

// {
//   metaTags;
// }
// {
//   linkTags;
// }
// {
//   scriptTags;
// }
// {
//   scriptEl;
// }
// <script>
//   {`
//     console.log('Gabiel');
//   `}
// </script>;

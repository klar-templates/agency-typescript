import { Helmet, HelmetProvider } from 'react-helmet-async';
import PageStyle from './PageStyle';
import PageScript from './PageScript';

export default function Layout(data: any) {
  const googleEndpoint = '//fonts.googleapis.com/css?family=';
  const systemWebfonts = ['ui-sans-serif', 'Open Sans', 'Arial', 'sans-serif'];
  let headerBlock;
  let footerBlock;
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

  return (
    <>
      <PageStyle theme={window.klarContext.data.theme} />
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
      {/* <Navigation {...headerBlock as any} /> */}
      {data.children}
      {/* {blocksToRender} */}
      {/* <FooterReact {...footerBlock} /> */}
      {/* <PageScript /> */}
    </>
  );
}

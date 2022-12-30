import { Helmet, HelmetProvider } from 'react-helmet-async';
import PageStyle from './PageStyle';
import PageScript from './PageScript';

export default function Layout(data: any) {
  const googleEndpoint = '//fonts.googleapis.com/css?family=';
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
        <link
          rel="stylesheet"
          href={`${googleEndpoint}${data.theme.typography.font_display}:400,500,600,700`}
        />
      </Helmet>
      {/* <Navigation {...headerBlock as any} /> */}
      {data.children}
      {/* {blocksToRender} */}
      {/* <FooterReact {...footerBlock} /> */}
      {/* <PageScript /> */}
    </>
  );
}

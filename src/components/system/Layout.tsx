import Head from './Head';
import PageStyle from './PageStyle';
import PageScript from './PageScript';

export default function Layout(data: any) {
  return (
    <>
      <PageStyle theme={window.klarContext.data.theme} />
      <Head {...data}></Head>
      {/* <Navigation {...headerBlock as any} /> */}
      {data.children}
      {/* {blocksToRender} */}
      {/* <FooterReact {...footerBlock} /> */}
      <PageScript />
    </>
  );
}

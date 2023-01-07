import Head from './Head';
import PageTransition from '../../hooks/PageTransition';
import TemplateScripts from '../../hooks/TemplateScripts';
import PageStyle from './PageStyle';
import PageScript from './PageScript';

export default function Layout(data: any) {
  return (
    <>
      <PageTransition />
      <TemplateScripts />
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

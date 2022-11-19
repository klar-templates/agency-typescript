import { Helmet, HelmetProvider } from "react-helmet-async";
import PageStyle from './PageStyle';

export default function Layout(data: any) {
  let headerBlock;
  let footerBlock;
  const blocksToRender: any = [];
  
  data.children.forEach((block: any) => {
    // console.log(block)
    // if (block.type.name === 'navigation') {
    //   headerBlock = block.props;
    //   console.log('hehehe', headerBlock)
    //   return;
    // }
    // if (block.type.name === 'FooterReact') {
    //   footerBlock = block.props;
    //   return;
    // }
    blocksToRender.push(block);
  });
  console.log(window.klarContext.data.theme)

  return (<>
    <PageStyle theme={window.klarContext.data.theme} />
    <Helmet>
      <title>{window.klarContext.currentPage.settings.title}</title>
      <meta name="description" content={window.klarContext.currentPage.settings.description} />
    </Helmet>
    {/* <Navigation {...headerBlock as any} /> */}
    {blocksToRender}
    {/* <FooterReact {...footerBlock} /> */}
  </>);
}


import { Helmet, HelmetProvider } from "react-helmet-async";

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

  return (<>
    <Helmet>
      <title>{window.klarContext.currentPage.settings.title}</title>
      <meta name="description" content={window.klarContext.currentPage.settings.description} />
    </Helmet>
    {/* <Navigation {...headerBlock as any} /> */}
    {blocksToRender}
    {/* <FooterReact {...footerBlock} /> */}
  </>);
}


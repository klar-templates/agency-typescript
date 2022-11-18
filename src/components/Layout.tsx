import { Helmet, HelmetProvider } from "react-helmet-async";
import IData from "../service/interface/IData";
import Navigation from './Navigation';

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

  const helmetContext = {
    title: window.klarContext.pageSettings.title,
    // description: data.context.pageSettings.description
  };

  return (<>
    <HelmetProvider context={helmetContext}>
      <title>{window.klarContext.pageSettings.title}</title>
      <meta name="description" content={window.klarContext.pageSettings.description} />
    </HelmetProvider>
    {/* <Navigation {...headerBlock as any} /> */}
    {blocksToRender}
    {/* <FooterReact {...footerBlock} /> */}
  </>);
}


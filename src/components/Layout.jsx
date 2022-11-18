import Navigation from './Navigation';

export default function Layout(data) {
  // head({title: klar.pageSettings.title, description: klar.pageSettings.description});
  
  let headerBlock;
  let footerBlock;
  const blocksToRender = [];
  console.log('data', data)
  data.children.forEach(block => {
    if (block.type.name === 'Navigation') {
      headerBlock = block.props;
      return;
    }
    // if (block.type.name === 'FooterReact') {
    //   footerBlock = block.props;
    //   return;
    // }
    blocksToRender.push(block);
  });
  return (<>
    <Navigation {...headerBlock} />
    {blocksToRender}
    {/* <FooterReact {...footerBlock} /> */}
  </>);
}


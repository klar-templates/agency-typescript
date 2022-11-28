import Layout from './Layout';
import Nunjucks from './blocks/bootstrap/Nunjucks';
import KlarEditBlock from './KlarEditBlock';
import { useEffect, useState } from 'react';

export default function Components(data: any) {
  const [config, setConfig] = useState(window.klarContext.isInKlar ? parent.frames.window.klar.config.data_default : undefined);
  useEffect(() => {
    if (window.klarContext.isInKlar) {
      // parent.frames.window.reactPageIsLoaded();
    } else {
      // Param: Site name in Klar
      // console.log('whhhhhhaaaat')
      getData('agency-typescript');
    }
    setTimeout(() => {
      const blocks = [document.querySelectorAll('.js-block')];
      let blocksHeight = 0;
      blocks.forEach((b: any) => {
        blocksHeight += b.offsetHeight;
      });
      blocksHeight = (blocksHeight * 0.80);
      const bodyHeight = document.body.offsetHeight;
      const newHeight = (bodyHeight - blocksHeight);
      document.body.style.paddingBottom = '15px';
      document.documentElement.style.maxHeight = '0px';
    }, 100);
    // return () => clearInterval(id);
  }, []);

  function getData(template: string) {
    const cacheKey = 'klar-config';
    let parsedData;
    if (!localStorage.getItem(cacheKey)) {
      async function requestData() {
        const response = await fetch(
          `https://raw.githubusercontent.com/klar-templates/${template}/main/config.json`);
        return response.json();
      }
      requestData()
        .then((config) => {
          // console.log(config);
          // localStorage.setItem(cacheKey, JSON.stringify(data));
          setConfig(config);
        });
      } else {
        const config = JSON.parse(localStorage.getItem(cacheKey) as string);
        setConfig(config);
      }
  }

  if (!config) {
    return null;
  }
  // console.log('tiiiiiiiime')

  const dataDefaults = config.data_defaults.blocks;
  const Components = data.components;
  // console.log('heloo', Components)
  // console.log('helooasdfas dfasdf asdfasdf asdf')
  const blockTypes = config.block_types;
  // console.log('blockTypes', blockTypes)
  const blockArray: any = [];
  blockTypes.forEach((blockType: any) => {
    // console.log(blockType)
    const block: any = dataDefaults[blockType.name];
    // This is going go be fixed. Only block needs to be forwarded in the future.
    const blockData: any = {
      block: {...block, _id: blockType.name, _type: blockType.name}
    };
    
    let componentName = blockType.name;
    componentName = componentName.charAt(0).toUpperCase() + componentName.slice(1);
    // console.log('componentName', componentName)
    const DynamicComponent = Components[componentName];
    if (DynamicComponent) {
      blockArray.push(<KlarEditBlock isInKlar key={blockData.block._id} id={blockData.block._id} type={blockData.block._type}><DynamicComponent {...blockData} /></KlarEditBlock>);
    }
    // else {
    //   blockArray.push(<KlarEditBlock key={blockData.block._id} id={blockData.block._id} type={blockData.block._type}><Nunjucks {...blockData} /></KlarEditBlock>);
    // }
  });

  return (
    <>
     <Layout {...data}>{blockArray}</Layout>
     <Style />
    </>
  );
}

function Style() {
  const style = `
  <style>
    body {
      transform: scale(0.20);
      transform-origin: right top;
      background-color: #303130 !important;
      margin: 10px 25px 0px 0px;
      overflow: overlay;
    }
    .js-klar-block {
      box-shadow: 0px 4px 5px 0px hsla(0,0%,0%,0.14),0px 1px 10px 0px hsla(0,0%,0%,0.12),0px 2px 4px -1px hsla(0,0%,0%,0.2);
      background-color: #fff;
      margin-bottom: 50px;
      border-radius: 20px;
    }
    [data-template-id="card"] {
      background-color: transparent !important;
      box-shadow: none;
    }
    [data-template-id="card"] section {
      box-shadow: 0px 4px 5px 0px hsla(0,0%,0%,0.14),0px 1px 10px 0px hsla(0,0%,0%,0.12),0px 2px 4px -1px hsla(0,0%,0%,0.2);
      border-radius: 20px;
    }
  </style>
  `;
  return <div dangerouslySetInnerHTML={{__html: style}} />;
}
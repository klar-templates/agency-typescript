import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import IData from '../../service/interface/IData';
import ComponentsBlock from '../pages/Components';
import Styleguide from '../pages/Styleguide';
import Layout from './Layout';
import Header2 from '../blocks/Header2';
import Header3 from '../blocks/Header3';
import Header4 from '../blocks/Header4';
import Hero1 from '../blocks/Hero1';
import Hero2 from '../blocks/Hero2';
import Hero3 from '../blocks/Hero3';
import Pricing from '../blocks/Pricing';
import Cards from '../blocks/Cards';
import Cards1 from '../blocks/Cards1';
import Team1 from '../blocks/Team1';
import Team2 from '../blocks/Team2';
import About1 from '../blocks/About1';
import Footer from '../blocks/Footer';
import Elements from '../blocks/Elements';
import Nunjucks from './Nunjucks';
import KlarEditBlock from './KlarEditBlock';
import Card from '../elements/layout/Card';
import Card1 from '../elements/layout/Card1';
// Elements
import Section from '../elements/layout/Section';
import Container from '../elements/layout/Container';
import Grid from '../elements/layout/Grid';
import Button from '../elements/Button';
import Link from '../system/Link';

let Components: any = {
  Header2: Header2,
  Header3: Header3,
  Header4: Header4,
  Hero1: Hero1,
  Hero2: Hero2,
  Hero3: Hero3,
  Pricing: Pricing,
  Cards: Cards,
  Cards1: Cards1,
  Team1: Team1,
  Team2: Team2,
  Card: Card,
  Card1: Card1,
  About1: About1,
  Footer: Footer,
  Elements: Elements,
};

let KlarComponents: any = {
  Section: Section,
  Container: Container,
  Grid: Grid,
  Button: Button,
  Link: Link,
};

window.React = React;
// window.KlarComponents = KlarComponents;
window.KlarLink = Link;
if (window.templateComponents) {
  Components = { ...Components, ...window.templateComponents };
}

// function sort(blocks: any) {
//   function compareFn(a: any, b: any) {
//     a = a._position;
//     b = b._position;
//     if (a < b) {
//       return -1;
//     }
//     if (a > b) {
//       return 1;
//     }
//     // a must be equal to b
//     return 0;
//   }
//   return blocks.sort(compareFn);
// }

export default function Page(data: IData) {
  createContext(data);
  if (window.klarContext.data.pages.length === 0) {
    // Tell the user that there are no pages yet.
    return null;
  }
  if (window.klarContext.pathname === '/components') {
    return (
      <ComponentsBlock
        {...data}
        components={Components}
        ui={KlarComponents}
        nly="elements"
      />
    );
  }
  if (window.klarContext.pathname === '/styleguide') {
    return <Styleguide {...data} />;
  }
  const blockArray: any = [];
  // const sortedBlocks = sort(window.klarContext.currentPage.blocks);
  window.klarContext.currentPage.blocks.map((block: any) => {
    // This is going go be fixed. Only block needs to be forwarded in the future.
    const blockData: any = {
      block: { ...block.data, _id: block._id, _type: block._type },
      ui: KlarComponents,
    };
    let componentName = block._type;
    componentName =
      componentName.charAt(0).toUpperCase() + componentName.slice(1);
    const DynamicComponent = Components[componentName];
    if (DynamicComponent) {
      blockArray.push(
        <KlarEditBlock key={block._id} id={block._id} type={block._type}>
          <DynamicComponent {...blockData} />
        </KlarEditBlock>,
      );
    } else {
      blockArray.push(
        <KlarEditBlock key={block._id} id={block._id} type={block._type}>
          <Nunjucks {...blockData} />
        </KlarEditBlock>,
      );
    }
  });

  return <Layout {...data}>{blockArray}</Layout>;
}

function createContext(data: IData) {
  const routeLocation = useLocation();
  const routeNavigate = useNavigate();
  if (window.initTemplate && !window.templateLoaded) {
    window.initTemplate({
      setData: window.initTemplateSetDataTemp,
      data: data,
      navigate: routeNavigate,
    });
    window.templateLoaded = true;
  }
  window.KlarNavigate = routeNavigate;
  // const pathname = '/startsida';
  const pathname = routeLocation.pathname;
  let currentPage;
  if (data.pages.length > 0) {
    if (pathname === window.siteConfig.publicPath) {
      // currentPage = data.pages.find(page => page.startpage === true);
      currentPage = data.pages[0];
    } else {
      currentPage = data.pages.find((page) => page._path === pathname);
    }
  }
  if (window.klarContext.isInKlar) {
    if (
      parent.frames.window.document.querySelector('.js-btn-preview-page')
        ?.innerHTML !== 'Redigera' &&
      !parent.frames.window.production
    ) {
      parent.frames.window.klar['navigate'] = routeNavigate;
    }
  }
  window.klarContext = {
    location: routeLocation,
    navigate: routeNavigate,
    pathname,
    data,
    currentPage,
    isInKlar: typeof parent.frames.window.klar !== 'undefined',
  };
}

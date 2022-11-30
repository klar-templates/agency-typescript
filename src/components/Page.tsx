import { useLocation, useNavigate } from 'react-router-dom';
import IData from '../service/interface/IData';
import ComponentsBlock from './Components';
import Layout from './Layout';
import Header from './blocks/Header';
import Header2 from './blocks/Header2';
import Header3 from './blocks/Header3';
import Hero from './blocks/Hero';
import Hero1 from './blocks/Hero1';
import Hero2 from './blocks/Hero2';
import Pricing from './blocks/Pricing';
import Cards from './blocks/Cards';
import Cards1 from './blocks/Cards1';
import Team1 from './blocks/Team1';
import Team2 from './blocks/Team2';
import Elements from './blocks/Elements';
import Nunjucks from './blocks/bootstrap/Nunjucks';
import KlarEditBlock from './KlarEditBlock';
// Elements
import Card from './elements/Card';
import Card1 from './elements/Card1';

const Components: any = {
  Header: Header,
  Header2: Header2,
  Header3: Header3,
  Hero: Hero,
  Hero1: Hero1,
  Hero2: Hero2,
  Pricing: Pricing,
  Cards: Cards,
  Cards1: Cards1,
  Team1: Team1,
  Team2: Team2,
  Card: Card,
  Card1: Card1,
  Elements: Elements,
};

export default function Page(data: IData) {
  createContext(data);
  if (window.klarContext.data.pages.length === 0) {
    // Tell the user that there are no pages yet.
    return null;
  }
  console.log('därför', data);
  if (window.klarContext.pathname === '/components') {
    return (
      <ComponentsBlock {...data} components={Components} only="elements" />
    );
  }
  const blockArray = [];
  for (const [key, value] of Object.entries(
    window.klarContext.currentPage.blocks,
  )) {
    const block: any = value;
    // This is going go be fixed. Only block needs to be forwarded in the future.
    const blockData: any = {
      block: { ...block.data, _id: block._id, _type: block._type },
    };
    let componentName = block.template_id;
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
  }

  return <Layout {...data}>{blockArray}</Layout>;
}

function createContext(data: IData) {
  const routeLocation = useLocation();
  const routeNavigate = useNavigate();
  // const pathname = '/startsida';
  const pathname = routeLocation.pathname;
  console.log('route pathname', pathname);
  let currentPage;
  console.log('is it this?', data.pages);
  if (data.pages.length > 0) {
    if (pathname === '/startsida') {
      // currentPage = data.pages.find(page => page.startpage === true);
      currentPage = data.pages[0];
    } else {
      currentPage = data.pages.find((page) => page._path === pathname);
    }
  }
  if (window.klarContext.isInKlar) {
    parent.frames.window.klar['navigate'] = routeNavigate;
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

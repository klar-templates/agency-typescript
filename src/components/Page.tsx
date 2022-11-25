import { useLocation, useNavigate } from 'react-router-dom';
import IData from '../service/interface/IData';
import Layout from './Layout';
import Navigation from './blocks/bootstrap/Navigation';
import Header from './blocks/bootstrap/Header';
import Hero from './blocks/Hero';
import Team from './blocks/bootstrap/Team';
import Footer from './blocks/bootstrap/Footer';
import Nunjucks from './blocks/bootstrap/Nunjucks';
import KlarEditBlock from './KlarEditBlock';

const Components: any = {
  Navigation: Navigation,
  Header: Header,
  Hero: Hero,
  Team: Team,
  Footer: Footer
}

export default function Page(data: IData) {
  createContext(data);
  if (window.klarContext.data.pages.length === 0) {
    // Tell the user that there are no pages yet.
    return null;
  }
  const blockArray = [];
  for (const [key, value] of Object.entries(window.klarContext.currentPage.blocks)) {
    const block: any = value;
    // This is going go be fixed. Only block needs to be forwarded in the future.
    const blockData: any = {
      block: {...block.data, _id: block._id, _type: block._type}
    };
    let componentName = block.template_id;
    componentName = componentName.charAt(0).toUpperCase() + componentName.slice(1);
    const DynamicComponent = Components[componentName];
    if (DynamicComponent) {
      blockArray.push(<KlarEditBlock key={block._id} id={block._id} type={block._type}><DynamicComponent {...blockData} /></KlarEditBlock>);
    } else {
      blockArray.push(<KlarEditBlock key={block._id} id={block._id} type={block._type}><Nunjucks {...blockData} /></KlarEditBlock>);
    }
  };

  return (
    <Layout {...data}>{blockArray}</Layout>
  );
}

function createContext(data: IData) {
  const routeLocation = useLocation();
  const routeNavigate = useNavigate();
  const pathname = '/startsida';
  let currentPage;
  if (data.pages.length > 0) {
    if (pathname === '/startsida') {
      // currentPage = data.pages.find(page => page.startpage === true);
      currentPage = data.pages[0];
    } else {
      currentPage = data.pages.find(page => page._path === pathname);
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
    isInKlar: typeof parent.frames.window.klar !== 'undefined'
  };
}
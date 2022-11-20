import { useLocation } from 'react-router-dom';
import IData from '../service/interface/IData';
import Layout from './Layout';
import Navigation from './blocks/Navigation';
import Header from './blocks/Header';
import Team from './blocks/Team';
import Footer from './blocks/Footer';
import Nunjucks from './blocks/Nunjucks';
import KlarEditBlock from './KlarEditBlock';

const Components: any = {
  Navigation: Navigation,
  Header: Header,
  Team: Team,
  Footer: Footer
}

export default function Page(data: IData) {
  createContext(data);
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
  const pathname = routeLocation.pathname;
  let currentPage;
  if (pathname === '/templates/page-react.html' || pathname === '/' || pathname === '/startsida') {
    currentPage = data.pages.find(page => page.startpage === true);
  } else {
    currentPage = data.pages.find(page => page._path === pathname);
  }
  window.klarContext = {
    location: routeLocation,
    pathname,
    data,
    currentPage,
    isInKlar: window.klar !== 'undefined'
  };
}
import { useLocation } from 'react-router-dom';
import IData from '../service/interface/IData';
import Layout from './Layout';
import Navigation from './Navigation';
import Team from './Team';

const Components: any = {
  Navigation: Navigation,
  // Header: HeaderReact,
  Team: Team,
  // Footer: FooterReact
}


export default function Page(data: IData) {
  createContext(data);
  const blockArray = [];
  for (const [key, value] of Object.entries(window.klarContext.currentPage.blocks)) {
    const block: any = value;
    let componentName = block.template_id;
    componentName = componentName.charAt(0).toUpperCase() + componentName.slice(1);
    const DynamicComponent = Components[componentName];
    if (DynamicComponent) {
      blockArray.push(<DynamicComponent key={block._id} {...block} />)
    }
  };
  
  return (
    <div className="container">
      <div className="content">
        <Layout {...data}>{blockArray}</Layout>
      </div>
    </div>
  );
}

function createContext(data: IData) {
  console.log(data)
  const routeLocation = useLocation();
  console.log(routeLocation);
  const pathname = routeLocation.pathname;
  let currentPage;
  if (pathname === '/templates/page-react.html' || pathname === '/' || pathname === '/startsida') {
    currentPage = data.pages.find(page => page.startpage === true);
  } else {
    currentPage = data.pages.find(page => page._path === pathname);
  }
  const pageSettings = currentPage.settings;
  const blocks = data.pages[0].blocks;
  window.klarContext = {
    location: routeLocation,
    data,
    pathname,
    currentPage,
    pageSettings,
    blocks
  };
}
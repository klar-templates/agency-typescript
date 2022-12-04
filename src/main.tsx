import React from 'react';
import ReactDOM from 'react-dom/client';
import ReactDOMServer from 'react-dom/server';
import App from './App';
import './index.css';

if (location.host.includes('.github.io') || window.prodConfig) {
  window.production = true;
  if (typeof window.siteConfig === 'undefined') {
    console.log('1');
    window.siteConfig = window.prodConfig.siteConfig;
  } else {
    console.log('2');
  }
} else {
  console.log('3');
  window.siteConfig = { publicPath: '/' };
}

if (window.releaseReactApp) {
  const tempCurrentPage = localStorage.getItem('current-page') as string;
  window.reactServerPages = {};
  if (parent.frames.window.klar) {
    const pages = [...parent.frames.window.klar.data.pages];
    if (pages.length > 0) {
      pages.forEach((page: any) => {
        localStorage.setItem('current-page', page._id) as unknown;
        const reactHtml = ReactDOMServer.renderToString(
          <React.StrictMode>
            <App />
          </React.StrictMode>,
        );
        window.reactServerPages[page._id] = '<!DOCTYPE html>' + reactHtml;
      });
    }
  }
  localStorage.setItem('current-page', tempCurrentPage) as unknown;
} else {
  ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
    <React.StrictMode>
      <App />
    </React.StrictMode>,
  );
}

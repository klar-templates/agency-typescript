import React from 'react';
import { StaticRouter } from 'react-router-dom/server';
import { BrowserRouter as Router } from 'react-router-dom';
import ReactDOM from 'react-dom';
import { HelmetProvider } from 'react-helmet-async';
import ReactDOMClient from 'react-dom/client';
import ReactDOMServer from 'react-dom/server';
import App from './App';
import './index.css';

if (location.host.includes('.github.io') || window.prodConfig) {
  window.production = true;
  if (typeof window.siteConfig === 'undefined') {
    window.siteConfig = window.prodConfig.siteConfig;
  } else {
  }
} else {
  window.siteConfig = { publicPath: '/' };
}

if (window.releaseReactApp) {
  const tempCurrentPage = localStorage.getItem('current-page') as string;
  window.reactServerPages = {};
  if (parent.frames.window.klar) {
    const pages = [...parent.frames.window.klar.data.pages];
    if (pages.length > 0) {
      pages.forEach((page: any) => {
        console.log('page._path', page._path);
        localStorage.setItem('current-page', page._id) as unknown;
        const reactHtml = ReactDOMServer.renderToString(
          <StaticRouter location={page._path}>
            <React.StrictMode>
              <HelmetProvider>
                <html lang="en">
                  <App />
                </html>
              </HelmetProvider>
            </React.StrictMode>
          </StaticRouter>,
        );
        window.reactServerPages[page._id] = '<!DOCTYPE html>' + reactHtml;
      });
    }
  }
  localStorage.setItem('current-page', tempCurrentPage) as unknown;
} else {
  // ReactDOM.hydrate(
  //   <React.StrictMode>
  //     <App />
  //   </React.StrictMode>,
  //   document.documentElement,
  // );
  if (window.production) {
    ReactDOMClient.hydrateRoot(
      document.documentElement,
      <Router>
        <React.StrictMode>
          <HelmetProvider>
            <App />
          </HelmetProvider>
        </React.StrictMode>
      </Router>,
    );
  } else {
    ReactDOMClient.createRoot(
      document.getElementById('root') as HTMLElement,
    ).render(
      <React.StrictMode>
        <App />
      </React.StrictMode>,
    );
  }
}

import React from 'react';
import ReactDOM from 'react-dom/client';
import ReactDOMServer from 'react-dom/server';
import App from './App';
import './index.css';

if (window.releaseReactApp) {
  window.reactServerPages = [];
  if (parent.frames.window.klar) {
    const pages = parent.frames.window.klar.data.pages;
    if (pages.length > 0) {
      pages.forEach((page: any) => {
        localStorage.setItem('current-page', page._id) as unknown;
        const reactHtml = ReactDOMServer.renderToString(
          <React.StrictMode>
            <App />
          </React.StrictMode>,
        );
        window.reactServerPages.push(reactHtml);
      });
    }
  }
} else {
  ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
    <React.StrictMode>
      <App />
    </React.StrictMode>,
  );
}

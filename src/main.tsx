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
        parent.frames.localStorage.setItem(
          'current-page',
          page._path,
        ) as unknown;
        window.reactServerPages.push(
          ReactDOMServer.renderToString(
            <React.StrictMode>
              <App />
            </React.StrictMode>,
          ),
        );
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

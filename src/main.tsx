import React from 'react';
import ReactDOM from 'react-dom/client';
import ReactDOMServer from 'react-dom/server';
import { StaticRouter } from 'react-router-dom/server';
import App from './App';
import './index.css';

if (window.releaseReactApp) {
  ReactDOMServer.renderToString(
    <StaticRouter location={localStorage.getItem('current-page') as string}>
      <App />
    </StaticRouter>,
  );
} else {
  ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
    <React.StrictMode>
      <App />
    </React.StrictMode>,
  );
}

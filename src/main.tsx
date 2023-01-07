import React from 'react';
import { StaticRouter } from 'react-router-dom/server';
import { BrowserRouter as Router } from 'react-router-dom';
import ReactDOM from 'react-dom';
import { HelmetProvider } from 'react-helmet-async';
import ReactDOMClient from 'react-dom/client';
import ReactDOMServer from 'react-dom/server';
import App from './App';
import './index.css';

if (!window.PubSub && !window.releaseReactApp) {
  /**
   * @fileOverview Publish and subscribe module
   * @author <a href="mailto:brianfegan@gmail.com">Brian Fegan</a>
   * @version 1.0
   */

  /**
   * @name PubSub
   * @namespace A module that provides a pub/sub pattern.
   * @description A module that provides a pub/sub pattern.
   */
  window.PubSub = (function (self, window, undefined) {
    let _publish;
    let _subscribe;
    let _unsubscribe;
    let _create: any;
    /**
     * @name PubSub-_publish
     * @exports PubSub-_publish as PubSub.publish
     * @function
     * @description Takes in a subscription type and notifies its subscribers.
     * @param {string} type The subscription type.
     * @param {object} [data] Any data to pass on to the subscribers.
     */
    (_publish = function (type: any, data: any) {
      if (typeof type == 'string' && self.subscribers[type]) {
        var subs = self.subscribers[type].subs,
          limit = subs.length,
          sub,
          i;
        for (i = 0; i < limit; i++) {
          sub = subs[i];
          if (sub.instance) {
            sub.fn.call(sub.instance, data);
          } else {
            sub.fn(data);
          }
        }
      }
    }),
      /**
       * @name PubSub-_create
       * @function
       * @description Adds a new subscription type to the self.subscribers object, with an empty subscribers array, and a uid counter.
       * @param {string} type
       */
      (_create = function (type: any) {
        self.subscribers[type] = {};
        self.subscribers[type].subs = [];
        self.subscribers[type].uid = 0;
      }),
      /**
       * @name PubSub-_subscribe
       * @exports PubSub-_subscribe as PubSub.subscribe
       * @function
       * @description Takes in a subscription type, a callback function, and an optional instance, adds the callback to a subscription array, and returns a UID associated with this subscription.
       * @param {string} type The subscroption type to subscribe to.
       * @param {function} fn The callback to execute on publish events.
       * @param {object} [instance] An instance we can reference as this in the callback.
       * @returns {number}
       */
      (_subscribe = function (type: any, fn: any, instance: any) {
        if (typeof type == 'string' && typeof fn === 'function') {
          if (!self.subscribers[type]) _create(type);
          self.subscribers[type].uid++;
          self.subscribers[type].subs.push({
            fn: fn,
            instance: instance,
            uid: self.subscribers[type].uid,
          });
          return self.subscribers[type].uid;
        }
      }),
      /**
       * @name PubSub-_unsubscribe
       * @exports PubSub-_unsubscribe as PubSub.unsubscribe
       * @function
       * @description Takes in a subscription type and a uid for that subscription, and removes that subscriber.
       * @param {string} type The type of subscription to unsubscribe from.
       * @param {number} uid The unique id of the subscriber we are removing.
       */
      (_unsubscribe = function (type: any, uid: any) {
        if (typeof type == 'string' && self.subscribers[type]) {
          var subs = self.subscribers[type].subs,
            limit = subs.length,
            i,
            newArr = [];
          for (i = 0; i < limit; i++) {
            if (subs[i].uid !== uid) {
              newArr.push(subs[i]);
            }
          }
          self.subscribers[type].subs = newArr;
        }
      });

    // set up empty subscribers obj
    self.subscribers = {};

    // PubSub public methods
    return {
      subscribe: _subscribe,
      unsubscribe: _unsubscribe,
      publish: _publish,
    };
  })(window.PubSub || {}, window, undefined);
}

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
  window.nunjucksTemplates = {};
  window.reactCss = '';
  window.reactJs = '';
  if (parent.frames.window.klar) {
    const pages = [...parent.frames.window.klar.data.pages];
    if (pages.length > 0) {
      pages.forEach((page: any) => {
        const currentPath = '/' + window.siteConfig.name + page._path;
        // console.log('currentPath', currentPath);
        localStorage.setItem('current-page', page._id) as unknown;
        const reactHtml = ReactDOMServer.renderToString(
          <StaticRouter location={currentPath}>
            <HelmetProvider>
              <html lang="en">
                <App />
              </html>
            </HelmetProvider>
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
  // if (window.production) {
  //   ReactDOMClient.hydrateRoot(
  //     document.documentElement,
  //     <Router>
  //       <React.StrictMode>
  //         <HelmetProvider>
  //           <App />
  //         </HelmetProvider>
  //       </React.StrictMode>
  //     </Router>,
  //   );
  // } else {
  // if (window.production) {
  //   ReactDOMClient.hydrateRoot(
  //     document.getElementById('root') as HTMLElement,
  //     <HelmetProvider>
  //       <App />
  //     </HelmetProvider>,
  //   );
  // } else {
  ReactDOMClient.createRoot(
    document.getElementById('root') as HTMLElement,
  ).render(
    <React.StrictMode>
      <HelmetProvider>
        <App />
      </HelmetProvider>
    </React.StrictMode>,
  );
  // }
}

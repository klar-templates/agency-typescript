import { useEffect, useState } from 'react';
import { StaticRouter } from 'react-router-dom/server';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import IData from './service/interface/IData';
import Page from './components/Page';

function App() {
  const [data, setData] = useState(
    typeof parent.frames.window.klar !== 'undefined'
      ? parent.frames.window.klar.data
      : undefined,
  );
  useEffect(() => {
    // if (location.pathname == '/sites/klar-sites/agency-typescript') {
    //   console.log('navigate')
    //   const routeNavigate = useNavigate();
    //   console.log('routeNavigate',routeNavigate);
    //   routeNavigate('/');
    // }
    // window.klar = {};
    // window.klar['setData'] = setData;
    if (typeof parent.frames.window.klar !== 'undefined') {
      // console.log(typeof window.klar !== 'undefined')
      parent.frames.window.klar['setData'] = setData;
      // setData(parent.frames.window.klar.data);
      parent.frames.window.reactPageIsLoaded();
      // const currentPage = parent.frames.window.klar.sdk.currentPage.get();
      // window.location.href = currentPage._path;
    } else {
      // Param: Site name in Klar
      getData('agency-typescript');
    }
    // return () => clearInterval(id);
  }, []);

  window.klarContext = {
    isInKlar: typeof parent.frames.window.klar !== 'undefined',
  };

  function getData(siteName: string) {
    const cacheKey = 'klar-data';
    let parsedData;
    if (!localStorage.getItem(cacheKey)) {
      async function requestData() {
        const response = await fetch(
          `https://raw.githubusercontent.com/klar-sites/${siteName}/main/data.json`,
        );
        return response.json();
      }
      requestData().then((data) => {
        console.log(data);
        // localStorage.setItem(cacheKey, JSON.stringify(data));
        setData(data);
      });
    } else {
      const data = JSON.parse(localStorage.getItem(cacheKey) as string);
      setData(data);
    }
  }

  if (!data) {
    return null;
  }

  const startpage = (data as IData).pages.find((p) => p.startpage);

  let currentPageInKlar: any;
  let currentPage;
  if (window.klarContext.isInKlar) {
    currentPage = parent.frames.window.klar.sdk.currentPage.get();
    if (currentPage) {
      currentPageInKlar = currentPage._path;
    }
  } else {
    startpage._path = '/';
  }
  // console.log('currentPageInKlar', currentPageInKlar);
  // console.log('window.klarContext.isInKlar', window.klarContext.isInKlar);
  // console.log('location.href', location.href);
  // console.log('location.pathname', location.pathname);
  // console.log('data', data);
  // console.log('pages.length', data.pages.length);

  if (window.releaseReactApp) {
    return (
      <HelmetProvider>
        <html lang="en">
          <head>
            <meta charSet="utf-8" />
            <meta http-equiv="X-UA-Compatible" content="IE=edge" />
            <link rel="icon" type="image/svg+xml" href="/vite.svg" />
            <meta
              name="viewport"
              content="width=device-width, initial-scale=1.0"
            />
            <title>{currentPage?.settings?.title}</title>
            <meta
              name="description"
              content={currentPage?.settings?.description}
            ></meta>
            {/* <script
              type="module"
              crossOrigin="true"
              src="/assets/index.3bbad176.js"
            ></script>
            <link rel="stylesheet" href="/assets/index.d855147e.css" /> */}
            <script
              type="module"
              crossOrigin="true"
              src="/assets/index.js"
            ></script>
            <link rel="stylesheet" href="/assets/index.css" />
          </head>
          <body className="bg-background">
            <StaticRouter location={currentPageInKlar}>
              <Routes>
                <>
                  {window.klarContext.isInKlar &&
                    data.pages.length > 0 &&
                    location.pathname.includes('/sites/klar-sites/') && (
                      <Route
                        path={location.pathname}
                        element={<Navigate replace to={currentPageInKlar} />}
                      />
                    )}
                  {window.klarContext.isInKlar &&
                    data.pages.length > 0 &&
                    currentPageInKlar !== '/' && (
                      <Route
                        path="/"
                        element={<Navigate replace to={currentPageInKlar} />}
                      />
                    )}
                  {(data as IData).pages.map((page) => {
                    // console.log('Route was added: ', page._path);
                    return (
                      <Route
                        path={page._path}
                        element={<Page {...(data as IData)} />}
                        key={page._id}
                      />
                    );
                  })}
                  {window.klarContext.isInKlar && data.pages.length === 0 && (
                    <Route
                      path="/"
                      element={<Page {...(data as IData)} />}
                      key="no-pages"
                    />
                  )}
                  <Route
                    path="/components"
                    element={<Page {...(data as IData)} />}
                  />
                </>
              </Routes>
            </StaticRouter>
          </body>
        </html>
      </HelmetProvider>
    );
  } else {
    return (
      <HelmetProvider>
        <Router>
          <Routes>
            <>
              {window.klarContext.isInKlar &&
                data.pages.length > 0 &&
                location.pathname.includes('/sites/klar-sites/') && (
                  <Route
                    path={location.pathname}
                    element={<Navigate replace to={currentPageInKlar} />}
                  />
                )}
              {window.klarContext.isInKlar &&
                data.pages.length > 0 &&
                currentPageInKlar !== '/' && (
                  <Route
                    path="/"
                    element={<Navigate replace to={currentPageInKlar} />}
                  />
                )}
              {(data as IData).pages.map((page) => {
                // console.log('Route was added: ', page._path);
                return (
                  <Route
                    path={page._path}
                    element={<Page {...(data as IData)} />}
                    key={page._id}
                  />
                );
              })}
              {window.klarContext.isInKlar && data.pages.length === 0 && (
                <Route
                  path="/"
                  element={<Page {...(data as IData)} />}
                  key="no-pages"
                />
              )}
              <Route
                path="/components"
                element={<Page {...(data as IData)} />}
              />
            </>
          </Routes>
        </Router>
      </HelmetProvider>
    );
  }
}

export default App;

import { useEffect, useState } from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from 'react-router-dom';
import IData from './service/interface/IData';
import Page from './components/Page';

function getInitData() {
  let data = undefined;
  if (window.prodConfig) {
    data = Object.assign({}, parent.frames.window.klar.data);
    data = JSON.stringify(data);
    data = data.replace(
      /"_path":"\//gm,
      '"_path":"/' + window.prodConfig.siteName + '/',
    );
    // console.log('siteName', window.prodConfig.siteName);
    data = JSON.parse(data);
    // console.log('Fixade urlar i function: ', data);
  } else if (typeof parent.frames.window.klar !== 'undefined') {
    // if (typeof parent.frames.window.klar !== 'undefined') {
    data = Object.assign({}, parent.frames.window.klar.data);
  }
  return data;
}

function fixUrlsForProd(data: any) {
  if (window.production) {
    data = JSON.stringify(data);
    data = data.replace(/"_path":"\//gm, '"_path":"/agency-typescript/');
    data = JSON.parse(data);
  }
  return data;
}

function App(): any {
  const [data, setData] = useState(getInitData());
  useEffect(() => {
    // if (location.pathname == '/sites/klar-sites/agency-typescript') {
    //   console.log('navigate')
    //   const routeNavigate = useNavigate();
    //   console.log('routeNavigate',routeNavigate);
    //   routeNavigate('/');
    // }
    // window.klar = {};
    // window.klar['setData'] = setData;
    if (window.production) {
      setData(window.hydratedData);
    } else if (typeof parent.frames.window.klar !== 'undefined') {
      // console.log(typeof window.klar !== 'undefined')

      if (
        parent.frames.window.document.querySelector('.js-btn-preview-page')
          ?.innerHTML !== 'Redigera' &&
        !parent.frames.window.production
      ) {
        parent.frames.window.klar['setData'] = setData;
      }
      // setData(parent.frames.window.klar.data);
      parent.frames.window.reactPageIsLoaded();
      // const currentPage = parent.frames.window.klar.sdk.currentPage.get();
      // window.location.href = currentPage._path;
    } else {
      // Param: Site name in Klar
      // if (window.prodConfig) {
      //   console.log('Här ska den inte gå in');
      //   setData(JSON.parse(window.hydratedData));
      // } else {
      getData('agency-typescript');
      // }
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
        data = fixUrlsForProd(data);
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

  let startpage = (data as IData).pages.find((p) => p.startpage);

  let currentPageInKlar: any;
  let currentPage: any;
  if (window.prodConfig) {
    currentPage = parent.frames.window.klar.sdk.currentPage.get();
    startpage = data.pages[0];
    currentPage = data.pages.find((p: any) => currentPage._id === p._id);
    if (currentPage) {
      // startpage._path = '/' + window.siteConfig.name + '/';
      currentPageInKlar = currentPage._path;
    }
  } else if (window.klarContext.isInKlar) {
    currentPage = parent.frames.window.klar.sdk.currentPage.get();
    if (currentPage) {
      currentPageInKlar = currentPage._path;
    }
  } else {
    if (window.production) {
      // startpage._path = '/' + window.siteConfig.name + '/';
    } else {
      // startpage._path = '/';
    }
  }
  // console.log('currentPageInKlar', currentPageInKlar);
  // console.log('window.klarContext.isInKlar', window.klarContext.isInKlar);
  // console.log('location.href', location.href);
  // console.log('location.pathname', location.pathname);
  // console.log('data', data);
  // console.log('pages.length', data.pages.length);

  const routes = (
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
        {/* {!window.klarContext.isInKlar && (
        <Route
          path={startpage._path}
          element={
            <Navigate replace to={window.siteConfig.publicPath} />
          }
          key="redirect-to-start-page"
        />
      )} */}
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
          path={window.siteConfig.publicPath}
          element={<Page {...(data as IData)} />}
          key="redirect-to-start-page"
        />
        {/* {location.pathname === '/agency-typescript/' && (
        <Route
          path={location.pathname}
          element={<Navigate replace to={currentPageInKlar} />}
        />
      )} */}

        <Route path="/components" element={<Page {...(data as IData)} />} />
        <Route path="/styleguide" element={<Page {...(data as IData)} />} />
      </>
    </Routes>
  );

  if (window.releaseReactApp) {
    return (
      <>
        <head>
          {/* <base href="/agency-typescript" /> */}
          <meta charSet="utf-8" />
          <meta http-equiv="X-UA-Compatible" content="IE=edge" />
          <link rel="icon" href="https://klar.website/assets/icon-16.png" />
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1.0"
          />
          <title>{currentPage?.settings?.title}</title>
          <meta
            name="description"
            content={currentPage?.settings?.description}
            data-rh="true"
          />
          {/* <script
              type="module"
              crossOrigin="true"
              src="/assets/index.3bbad176.js"
            ></script>
            <link rel="stylesheet" href="/assets/index.d855147e.css" /> */}
          {/* <link
              rel="stylesheet"
              href={`/${window.env.site.github_repo}/assets/index.css`}
            />
            <script
              type="module"
              crossOrigin="true"
              src={`/${window.env.site.github_repo}/assets/index.js`}
            ></script> */}
          <link
            rel="stylesheet"
            href={`https://fonts.googleapis.com/css?family=${data.theme.typography.font_display}:400,500,600,700`}
          />
          <link
            rel="stylesheet"
            href={`https://fonts.googleapis.com/css?family=${data.theme.typography.font_body}:400,500,600,700`}
          />
          <link
            rel="stylesheet"
            href={`https://fonts.googleapis.com/css?family=${data.theme.typography.font_logo}:400,500,600,700`}
          />
          <link
            href="https://fonts.googleapis.com/css?family=Droid+Serif:400,700,400italic,700italic"
            rel="stylesheet"
            type="text/css"
          />
          <link
            href="https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css"
            rel="stylesheet"
            type="text/css"
          />
          <link
            rel="stylesheet"
            href={`${window.siteConfig.publicPath}${window.siteConfig.cssFilepath}`}
          />
        </head>
        <body className="bg-background">
          <div id="root">{routes}</div>
          {/* {!window.releaseReactApp && <Router>{routes}</Router>} */}
          {window.releaseReactApp && (
            <>
              <script
                dangerouslySetInnerHTML={{
                  __html: `window.siteConfig = ${JSON.stringify(
                    window.prodConfig.siteConfig,
                  )}`,
                }}
              />
              <script
                dangerouslySetInnerHTML={{
                  __html: `window.hydratedData = ${JSON.stringify({
                    ...data,
                  })}`,
                }}
              />
            </>
          )}
          {!window.releaseReactApp && (
            <>
              <script
                dangerouslySetInnerHTML={{
                  __html: `window.siteConfig = ${JSON.stringify(
                    window.siteConfig,
                  )}`,
                }}
              />
              <script
                dangerouslySetInnerHTML={{
                  __html: `window.hydratedData = ${JSON.stringify({
                    pages: window.hydratedData.pages,
                  })}`,
                }}
              />
            </>
          )}
          <script
            type="module"
            crossOrigin="true"
            src={`${window.siteConfig.publicPath}${window.siteConfig.jsFilepath}`}
          ></script>
          <script src="https://mozilla.github.io/nunjucks/files/nunjucks.min.js"></script>
        </body>
      </>
    );
  } else {
    return <Router>{routes}</Router>;
  }
}

export default App;

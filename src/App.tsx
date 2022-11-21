import { useEffect, useState } from 'react'
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { HelmetProvider } from "react-helmet-async";
import IData from './service/interface/IData';
import Page from './components/Page';

function App() {
  window.klarContext = {
    isInKlar: typeof parent.frames.window.klar !== 'undefined'
  };
  const [data, setData] = useState(undefined);

  useEffect(() => {
    // window.klar = {};
    // window.klar['setData'] = setData;
    if (window.klarContext.isInKlar) {
      // console.log(typeof window.klar !== 'undefined')
      parent.frames.window.klar['setData'] = setData;
      setData(parent.frames.window.klar.data);
      // parent.frames.window.reactPageIsLoaded();
      // const currentPage = parent.frames.window.klar.sdk.currentPage.get();
      // window.location.href = currentPage._path;
    } else {
      // Param: Site name in Klar
      getData('agency');
    }
    // return () => clearInterval(id);
  }, []);

  function getData(siteName: string) {
    const cacheKey = 'klar-data';
    let parsedData;
    if (!localStorage.getItem(cacheKey)) {
      async function requestData() {
        const response = await fetch(
          `https://raw.githubusercontent.com/klar-sites/${siteName}/master/data.json`);
        return response.json();
      }
      requestData()
        .then((data) => {
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

  const startpage = (data as IData).pages.find(p => p.startpage)
  
  let currentPageInKlar;
  if (window.klarContext.isInKlar) {
    const currentPage = parent.frames.window.klar.sdk.currentPage.get();
    currentPageInKlar = currentPage._path;
  } else {
    startpage._path = '/';
  }
  
  return (
    <HelmetProvider>
      <Router>
        <Routes>
          <>
            {(data as IData).pages.map(page => {
              return <Route path={page._path} element={<Page {...(data as IData)} />} key={page._id}/>
            })}
            { window.klarContext.isInKlar &&
              <Route path="/" element={<Navigate replace to={currentPageInKlar} />} />}
          </>
        </Routes>
      </Router>
    </HelmetProvider>
  )
}

export default App

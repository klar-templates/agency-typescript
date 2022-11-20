import { useEffect, useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { HelmetProvider } from "react-helmet-async";
import IData from './service/interface/IData';
import Page from './components/Page';

function App() {
  window.klarContext = {
    isInKlar: window.klar !== 'undefined'
  };
  const [data, setData] = useState(undefined);

  useEffect(() => {
    // window.klar = {};
    // window.klar['setData'] = setData;
    if (window.klarContext.isInKlar) {
      parent.frames.window.klar['setData'] = setData;
      setData(parent.frames.window.klar.data);
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
          localStorage.setItem(cacheKey, JSON.stringify(data));
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
  startpage._path = '/';

  return (
    <HelmetProvider>
      <Router>
        <Routes>
        {(data as IData).pages.map(page => {
          return <Route path={page._path} element={<Page {...(data as IData)} />} key={page._id}/>
        })}
        </Routes>
      </Router>
    </HelmetProvider>
  )
}

export default App

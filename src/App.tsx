import { useEffect, useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Helmet, HelmetProvider } from "react-helmet-async";
import IData from './service/interface/IData';
import Page from './components/Page';
import './App.css'

function App() {
  window.klarContext = {
    isInKlar: parent.frames.length > 0
  };
  const [data, setData] = useState(undefined);

  useEffect(() => {
    // window.klar = {};
    // window.klar['setData'] = setData;
    if (window.klarContext.isInKlar) {
      window.klar['setData'] = setData;
      setData(window.klar.data)
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
          parsedData = data;
        });
      } else {
        const data = JSON.parse(localStorage.getItem(cacheKey) as string);
        parsedData = data;
      }
    setData(parsedData);
  }

  if (!data) {
    return null;
  }

  const startpage = (data as IData).pages.find(p => p.startpage)
  startpage._path = '/';

  return (
    <HelmetProvider>
      <div className="App">
        <header className="App-header"></header>
        <Router>
          <Routes>
          {(data as IData).pages.map(page => {
            return <Route path={page._path} element={<Page {...(data as IData)} />} key={page._id}/>
          })}
          </Routes>
        </Router>
      </div>
      </HelmetProvider>
  )
}

export default App

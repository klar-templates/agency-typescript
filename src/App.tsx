import { useEffect, useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Helmet, HelmetProvider } from "react-helmet-async";
import IData from './service/interface/IData';
import Page from './components/Page';
import Page1 from './components/Page1';
import './App.css'

function App() {
  const [data, setData] = useState(undefined);

  useEffect(() => {
    // This is for one page website
    // Param: Site name in Klar
    getData('agency');
    // return () => clearInterval(id);
  }, []);

  function getData(siteName: string) {
    const cacheKey = 'klar-data';
    if (!localStorage.getItem(cacheKey)) {
      async function data() {
        const response = await fetch(
          `https://raw.githubusercontent.com/klar-sites/${siteName}/master/data.json`);
        return response.json();
      }
      data()
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
    <>
      <div className="App">
        <header className="App-header"></header>
        <Router>
          <Routes>
          {(data as IData).pages.map(page => {
            return <Route path={page._path} element={<Page {...(data as IData)} />} key={page._id}/>
          })}
            <Route path="/sida-1" element={<Page1 />} />
          </Routes>
        </Router>
      </div>
    </>
  )
}

export default App

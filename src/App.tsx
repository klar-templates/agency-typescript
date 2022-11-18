import { useEffect, useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Page from './components/Page';
import Page1 from './components/Page1';
import reactLogo from './assets/react.svg'
import './App.css'

function App() {
  const [data, setData] = useState(undefined);
  
  useEffect(() => {
    function init(siteName: string) {
      if (!localStorage.getItem('data')) {
        async function data() {
          const response = await fetch(
            `https://raw.githubusercontent.com/klar-sites/${siteName}/master/data.json`);
          return response.json();
        }

        data()
          .then((data) => {
            localStorage.setItem('data', JSON.stringify(data));
            setData(data);
          });
        } else {
          const data = JSON.parse(localStorage.getItem('data') as string);
          setData(data);
        }
    }
    
    // This is for one page website
    // Param: Site name in Klar
    init('agency');
    // return () => clearInterval(id);
  }, []);
  
  if (!data) {
    return null;
  }

  console.log(data);

  return (
    <div className="App">
      <header className="App-header"></header>
      <Router>
        <Routes>
          <Route path="/" element={<Page />} />
          <Route path="/sida-1" element={<Page1 />} />
        </Routes>
      </Router>
    </div>
  )
}

export default App

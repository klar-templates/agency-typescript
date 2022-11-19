import { useEffect, useState } from 'react';
// import nunjucks from 'vite-plugin-nunjucks';

export default function Nunjucks(data: any) {
  const [template, setTemplate] = useState('');
  
  console.log(data)
  useEffect(() => {
    // Get Nunjucks template
    getTemplate(data._type);
    // return () => clearInterval(id);
  }, []);

  // This is when you're in this application, when in Klar get the template file from the Klar application.
  function getTemplate(templateName: string) {
    const cacheKey = 'klar-nunjucks-template';
    if (!localStorage.getItem(cacheKey)) {
      async function data() {
        const response = await fetch(
          `/nunjucks/${templateName}.html`);
        return response.text();
      }
      data()
        .then((data) => {
          // localStorage.setItem(cacheKey, JSON.stringify(data));
          setTemplate(data);
        });
      } else {
        const data = JSON.parse(localStorage.getItem(cacheKey) as string);
        setTemplate(data);
      }
  }

  const renderedTemplate = window.nunjucks.renderString(template, data);
  // console.log(renderedTemplate)

  if (!template) {
    return null;
  }

  return (
    <div className="container">
      <div className="content">
        <h1>Nunjucks</h1>
        <div
          dangerouslySetInnerHTML={{__html: renderedTemplate}}
        />
      </div>
    </div>
  );
}
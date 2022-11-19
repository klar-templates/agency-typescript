import { useEffect, useState } from 'react';
// import nunjucks from 'vite-plugin-nunjucks';

export default function Nunjucks(data: any) {
  const [template, setTemplate] = useState('');
  
  useEffect(() => {
    // Get Nunjucks template
    if (window.klarContext.isInKlar) {
      const templateStr = window.klar.templates.blocks[data._type].content
      setTemplate(templateStr);
    } else {
      getTemplate(data.block._type);
    }
    // return () => clearInterval(id);
  }, []);

  // This is when you're in this application, when in Klar get the template file from the Klar application.
  function getTemplate(templateName: string) {
    const cacheKey = 'klar-nunjucks-template';
    let data = '';
    if (!localStorage.getItem(cacheKey)) {
      async function requestData() {
        const response = await fetch(
          `/nunjucks/${templateName}.html`);
        return response.text();
      }
      requestData()
        .then((responseData) => {
          // localStorage.setItem(cacheKey, JSON.stringify(responseData));
          data = responseData;
          setTemplate(data);
        });
      } else {
        const data = JSON.parse(localStorage.getItem(cacheKey) as string);
        setTemplate(data);
      }
  }

  if (!template) {
    return null;
  }
  const renderedTemplate = window.nunjucks.renderString(template, data);
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
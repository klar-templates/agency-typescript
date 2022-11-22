import { useEffect, useState } from 'react';
// import nunjucks from 'vite-plugin-nunjucks';

export default function Nunjucks(data: any) {
  const [template, setTemplate] = useState('');
  
  useEffect(() => {
    // Get Nunjucks template
    if (window.klarContext.isInKlar) {
      const templateStr = parent.frames.window.klar.templates.blocks[data.block._type].content;
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
          `/blocks/${templateName}.html`);
        return response.text();
      }
      requestData()
        .then((data) => {
          // localStorage.setItem(cacheKey, data);
          setTemplate(data);
        });
      } else {
        const data = localStorage.getItem(cacheKey) as string;
        setTemplate(data);
      }
  }

  if (!template) {
    return null;
  }
  
  const renderedTemplate = window.nunjucks.renderString(template, data);
  
  return (
    <div
      dangerouslySetInnerHTML={{__html: renderedTemplate}}
    />
  );
}
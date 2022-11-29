import { useEffect, useState } from 'react';
// import nunjucks from 'vite-plugin-nunjucks';

export default function Nunjucks(data: any) {
  const [template, setTemplate] = useState('');
  const cacheKeyTemplate = `${data.block._id}`;
  let renderedTemplate = localStorage.getItem(cacheKeyTemplate) as string;

  useEffect(() => {
    window.nunjucks.configure({ autoescape: false });
    // Get Nunjucks template
    if (window.klarContext.isInKlar) {
      let template =
        parent.frames.window.klar.templates.blocks[data.block._type];
      if (template) {
        setTemplate(template.content);
      } else {
        console.log('No template content for this block:', data.block._type);
      }
    } else {
      if (!renderedTemplate) {
        getTemplate(data.block._type);
      }
    }
    // return () => clearInterval(id);
  }, []);

  // This is when you're in this application, when in Klar get the template file from the Klar application.
  function getTemplate(templateName: string) {
    const cacheKey = 'klar-nunjucks-template-' + templateName;
    let data = '';
    if (!localStorage.getItem(cacheKey)) {
      async function requestData() {
        const response = await fetch(`/blocks/${templateName}.html`);
        return response.text();
      }
      requestData().then((data) => {
        if (window.klarContext.isInKlar) {
          localStorage.setItem(cacheKey, data);
        }
        setTemplate(data);
      });
    } else {
      const data = localStorage.getItem(cacheKey) as string;
      setTemplate(data);
    }
  }

  // if (!renderedTemplate) {
  //   return null;
  // }

  if (!renderedTemplate) {
    renderedTemplate = window.nunjucks.renderString(template, data);
    if (window.klarContext.isInKlar) {
      localStorage.setItem(cacheKeyTemplate, renderedTemplate);
    }
  }

  return <div dangerouslySetInnerHTML={{ __html: renderedTemplate }} />;
}

import { useEffect, useState } from 'react';
// import nunjucks from 'vite-plugin-nunjucks';

function getTemplateOnInit(data: any) {
  if (window.klarContext.isInKlar) {
    window.nunjucks.configure({ autoescape: false });
    let template = parent.frames.window.klar.templates.blocks[data.block._type];
    if (template) {
      if (window.releaseReactApp) {
        window.nunjucksTemplates[data.block._type] = template.content;
      }
      return template.content;
    } else {
      console.log('No template content for this block:', data.block._type);
    }
  }
  if (location.host.includes('.github.io')) {
    return window.nunjucksTemplates[data.block._id];
  }
  return '';
}

export default function Nunjucks(data: any) {
  const [template, setTemplate] = useState(getTemplateOnInit(data));
  window.nunjucks.configure({ autoescape: false });
  const cacheKeyTemplate = `${data.block._id}`;
  let renderedTemplate = localStorage.getItem(cacheKeyTemplate) as string;

  useEffect(() => {
    // Get Nunjucks template
    if (!window.production) {
      // if (window.klarContext.isInKlar) {
      //   let template =
      //     parent.frames.window.klar.templates.blocks[data.block._type];
      //   if (template) {
      //     setTemplate(template.content);
      //   } else {
      //     console.log('No template content for this block:', data.block._type);
      //   }
      // } else {
      getTemplate(data.block._type);
      // }
      // return () => clearInterval(id);
    }
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

  if (!template) {
    return null;
  }

  // if (!renderedTemplate) {
  renderedTemplate = window.nunjucks.renderString(template, data);
  //   if (window.klarContext.isInKlar) {
  //     localStorage.setItem(cacheKeyTemplate, renderedTemplate);
  //   }
  //  }

  if (window.releaseReactApp) {
    return (
      <>
        <div
          dangerouslySetInnerHTML={{
            __html: renderedTemplate,
          }}
        />
        {/* <script
          dangerouslySetInnerHTML={{
            __html: `window.nunjucksTemplates['nunjucksTemplate${data.block._id}}'] = \`${renderedTemplate}\``,
          }}
        /> */}
      </>
    );
  }

  return <div dangerouslySetInnerHTML={{ __html: renderedTemplate }} />;
}

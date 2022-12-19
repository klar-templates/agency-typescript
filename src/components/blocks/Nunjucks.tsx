import { useEffect, useState, useRef } from 'react';
import RenderScript from '../RenderScript';
// import nunjucks from 'vite-plugin-nunjucks';

type scriptInline = {
  type: any;
  async: any;
  innerHTML: any;
};

function renderInlineScript(ref: any) {
  if (ref?.current) {
    const container: any = ref.current;
    const codeStr = container.querySelector('script')?.innerHTML;
    if (codeStr) {
      const s: Node & scriptInline = document.createElement('script');
      s.type = 'text/javascript';
      s.async = true;
      s.innerHTML = codeStr;
      document.body.appendChild(s);
    }
  }
}

function getTemplateOnInit(data: any) {
  if (window.klarContext.isInKlar) {
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
    return window.nunjucksTemplates[data.block._type];
  }
  return '';
}

export default function Nunjucks(data: any) {
  const [template, setTemplate] = useState(getTemplateOnInit(data));
  const containerRef = useRef(null);
  window.nunjucks.configure({ autoescape: false });
  const cacheKeyTemplate = `${data.block._id}`;
  let renderedTemplate = localStorage.getItem(cacheKeyTemplate) as string;

  useEffect(() => {
    // Get Nunjucks template
    if (window.production) {
      renderInlineScript(containerRef);
    } else if (window.klarContext.isInKlar) {
      renderInlineScript(containerRef);
      //   let template =
      //     parent.frames.window.klar.templates.blocks[data.block._type];
      //   if (template) {
      //     setTemplate(template.content);
      //   } else {
      //     console.log('No template content for this block:', data.block._type);
      //   }
    } else {
      getTemplate(data.block._type);
    }
    // return () => clearInterval(id);
    // }
  }, []);

  // This is when you're in this application, when in Klar get the template file from the Klar application.
  function getTemplate(templateName: string) {
    const cacheKey = 'klar-nunjucks-template-' + templateName;
    if (!localStorage.getItem(cacheKey)) {
      async function requestData() {
        const response = await fetch(`/blocks/${templateName}.html`);
        return response.text();
      }
      requestData().then((data) => {
        // localStorage.setItem(cacheKey, data);
        setTemplate(data);
        renderInlineScript(containerRef);
      });
    } else {
      const data = localStorage.getItem(cacheKey) as string;
      setTemplate(data);
      renderInlineScript(containerRef);
    }
  }

  if (!template) {
    return null;
  }

  renderedTemplate = window.nunjucks.renderString(template, data);

  return (
    <div
      ref={containerRef}
      dangerouslySetInnerHTML={{ __html: renderedTemplate }}
    />
  );
}

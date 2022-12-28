import { useEffect, useState, useRef } from 'react';
import nunjucks from 'nunjucks';
import herobook from '../blocks/nunjucks/hero-book.html?raw';
import styleguide from '../blocks/nunjucks/styleguide.html?raw';

const templates: any = {
  'hero-book': herobook,
  styleguide: styleguide,
};

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
  let template;
  if (window.klarContext.isInKlar) {
    // template = parent.frames.window.klar.templates.blocks[data.block._type];
    template = templates[data.block._type];
    if (template) {
      if (window.releaseReactApp) {
        let templateContent = template;
        let style: any =
          templateContent.match(/<style>(?:.|\n)*?<\/style>/gm) || '';
        if (style) {
          style = style[0];
          style = style.replace('<style>', '');
          style = style.replace('</style>', '');
          style = style.replace(/\n/gm, '');
        }
        let script: any =
          templateContent.match(/<script>(?:.|\n)*?<\/script>/gm) || '';
        if (script) {
          script = script[0];
          script = script.replace('<script>', '');
          script = script.replace('</script>', '');
          // script = script.replace(/\n/gm, '');
        }
        templateContent = templateContent.replace(
          /<style>(?:.|\n)*?<\/style>/gm,
          '',
        );
        templateContent = templateContent.replace(
          /<script>(?:.|\n)*?<\/script>/gm,
          '',
        );
        // console.log(style);
        // console.log(script);
        // console.log(templateContent);
        if (style) {
          window.reactCss += style;
        }
        if (script) {
          window.reactJs += script;
        }
        window.nunjucksTemplates[data.block._type] = templateContent;
        return templateContent;
      }
      // return template.content;
      //return template;
    }
    // else {
    //   console.log('No template content for this block:', data.block._type);
    // }
  } else if (location.host.includes('.github.io')) {
    template = window.nunjucksTemplates[data.block._type];
    // if (template) {
    //   return template;
    // } else {
    //   console.log('No template content for this block:', data.block._type);
    // }
  } else {
    template = templates[data.block._type];
  }
  if (template) {
    return template;
  } else {
    if (parent.frames && parent.frames.initTemplate) {
    } else {
      console.log('No template content for block:', data.block._type);
    }
  }
}

export default function Nunjucks(data: any) {
  const [template, setTemplate] = useState(getTemplateOnInit(data));
  const containerRef = useRef(null);
  nunjucks.configure({ autoescape: false });
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
      if (
        parent.frames &&
        parent.frames.initTemplate &&
        !templates[data.block._type]
      ) {
        getTemplate(data.block._type);
      } else {
        renderInlineScript(containerRef);
      }
    }
    // return () => clearInterval(id);
    // }
  }, []);

  // This is when you're in this application, when in Klar get the template file from the Klar application.
  function getTemplate(templateName: string) {
    const cacheKey = 'klar-nunjucks-template-' + templateName;
    if (!localStorage.getItem(cacheKey)) {
      async function requestData() {
        const response = await fetch(`/blocks/nunjucks/${templateName}.html`);
        return response.text();
      }
      requestData().then((data) => {
        // localStorage.setItem(cacheKey, data);
        // console.log(data);
        if (data && data.indexOf('<!DOCTYPE html>') === -1) {
          setTemplate(data);
          renderInlineScript(containerRef);
        } else {
          console.log('No template content for block:', templateName);
        }
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

  renderedTemplate = nunjucks.renderString(template, data);

  return (
    <div
      ref={containerRef}
      dangerouslySetInnerHTML={{ __html: renderedTemplate }}
    />
  );
}

import { Link as LinkOriginal } from 'react-router-dom';

export default function Link(data: any) {
  if (data.to === location.pathname) {
    console.log(location.pathname);
    console.log(data.to);
    const href = data.to;
    delete data.to;
    const newData = {
      ...data,
      href: href,
      onClick: {
        function(e: any) {
          e.preventDefault;
        },
      },
    };
    return <a {...newData}>{data.children}</a>;
  }
  return <LinkOriginal {...data}>{data.children}</LinkOriginal>;
}

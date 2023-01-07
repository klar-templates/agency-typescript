import { Link as LinkOriginal } from 'react-router-dom';

export default function Link(data: any) {
  console.log('agaaain');
  if (data.to === location.pathname) {
    console.log(location.pathname);
    console.log(data.to);
    const href = data.to;
    // delete data.to;
    const newData = {
      ...data,
      href: href,
      onClick: function (e: any) {
        console.log('nu');
        e.preventDefault();
        e.stopPropagation();
        return false;
      },
      onDoubleClick: function (e: any) {
        console.log('nu1 double');
        e.preventDefault();
        e.stopPropagation();
        return false;
      },
    };
    return <a {...newData}>{data.children}</a>;
  }
  console.log('nooooo');
  return <LinkOriginal {...data}>{data.children}</LinkOriginal>;
}

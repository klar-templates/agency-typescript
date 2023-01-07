import { Link as LinkOriginal } from 'react-router-dom';

export default function Link(data: any) {
  if (data.to === location.pathname) {
    console.log(location.pathname);
    console.log(data.to);
    data.href == data.to;
    return <a {...data}>{data.children}</a>;
  }
  return <LinkOriginal {...data}>{data.children}</LinkOriginal>;
}

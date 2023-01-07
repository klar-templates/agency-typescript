import { Link as LinkOriginal } from 'react-router-dom';

export default function Link(data: any) {
  console.log(location.pathname);
  console.log(data.href);
  if (data.href === location.pathname) {
    return <a {...data}>{data.children}</a>;
  }
  return <LinkOriginal {...data}>{data.children}</LinkOriginal>;
}

import { Link as LinkOriginal } from 'react-router-dom';
import { useRef } from 'react';

export default function Link(data: any) {
  const linkRef: any = useRef(null);
  console.log('agaaain');
  if (data.to === location.pathname) {
    // console.log(location.pathname);
    // console.log(data.to);
    // const href = data.to;
    // // delete data.to;
    // const newData = {
    //   ...data,
    //   href: href,
    //   onClick: function (e: any) {
    //     e.preventDefault();
    //   },
    // };
    if (linkRef.current) {
      const el = linkRef.current;
      el.addEventListener('click', function (e: any) {
        e.preventDefault();
        console.log('uuu');
      });
    }
    // return <a {...newData}>{data.children}</a>;
    // return (
    //   <a {...newData} style={{ pointerEvents: 'none', cursor: 'pointer' }}>
    //     {data.children}
    //   </a>
    // );
  }
  const linkData = { ...data, ref: linkRef };
  console.log('nooooo');
  return <LinkOriginal {...linkData}>{data.children}</LinkOriginal>;
}

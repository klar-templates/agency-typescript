import { Link as LinkOriginal } from 'react-router-dom';
import { useRef } from 'react';

export default function Link(data: any) {
  const linkRef: any = useRef(null);
  if (data.to === location.pathname) {
    if (linkRef.current) {
      const el = linkRef.current;
      el.addEventListener('click', function (e: any) {
        e.preventDefault();
        console.log('uuu');
      });
    }
  }
  const linkData = { ...data, ref: linkRef };
  console.log('Link loaded!');
  return <LinkOriginal {...linkData}>{data.children}</LinkOriginal>;
}

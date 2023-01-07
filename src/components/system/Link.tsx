import { Link as LinkOriginal } from 'react-router-dom';
import { useEffect, useRef } from 'react';

export default function Link(data: any) {
  const linkRef: any = useRef(null);
  useEffect(() => {
    function preventLink(e: any) {
      e.preventDefault();
      // console.log('uuu');
    }
    const el = linkRef?.current;
    if (el) {
      if (data.to === location.pathname) {
        if (linkRef.current) {
          el.addEventListener('click', preventLink);
        }
      }
    }
    return () => {
      if (el) {
        try {
          if (data.to === location.pathname) {
            // el.removeEventListener('click', preventLink);
            // console.log('tog bort event');
          }
        } catch (e) {
          console.log(e);
        }
      }
    };
  }, []);
  const linkData = { ...data, ref: linkRef };
  // console.log('Link loaded!');
  return <LinkOriginal {...linkData}>{data.children}</LinkOriginal>;
}

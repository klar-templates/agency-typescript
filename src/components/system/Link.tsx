import { Link as LinkOriginal } from 'react-router-dom';
import { useEffect, useState, useRef } from 'react';

export default function Link(data: any) {
  const linkRef: any = useRef(null);
  const [disable, setDisable] = useState(false);
  useEffect(() => {
    function preventLink(e: any) {
      e.preventDefault();
      // console.log('uuu');
    }
    const el = linkRef?.current;
    if (el) {
      // if (data.to === location.pathname) {
      if (disable) {
        console.log('disable');
        if (linkRef.current) {
          el.addEventListener('click', preventLink);
        }
      }
    }
    return () => {
      if (el) {
        try {
          // if (data.to === location.pathname) {
          if (disable) {
            setDisable(false);
            console.log('enable');
            el.removeEventListener('click', preventLink);
            // console.log('tog bort event');
          }
        } catch (e) {
          console.log(e);
        }
      }
    };
  }, [disable]);
  const linkData = { ...data, ref: linkRef };
  // console.log('Link loaded!');
  return (
    <LinkOriginal
      {...linkData}
      onClick={function () {
        setDisable(true);
      }}
    >
      {data.children}
    </LinkOriginal>
  );
}

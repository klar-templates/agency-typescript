import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

export default function PageTransition() {
  const routePath = useLocation();
  const goToTop = () => {
    console.log('Go to top!');
    window.scrollTo(0, 0);
  };
  useEffect(() => {
    goToTop();
    window.PubSub.publish('page-transition', {
      message: 'A page transition took place.',
    });
  }, [routePath]);
  return null;
}

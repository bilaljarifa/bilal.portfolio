import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const ScrollToTop = () => {
  const { pathname, search, hash } = useLocation();

  useEffect(() => {
    const target = hash && document.getElementById(hash.slice(1));
    if (target) {
      target.scrollIntoView({ block: 'start', behavior: 'instant' });
      return;
    }

    window.scrollTo({ top: 0, behavior: 'instant' });
  }, [pathname, search, hash]);

  return null;
};

export default ScrollToTop;

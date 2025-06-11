// useScript.js
import { useEffect } from 'react';

const useScript = (url) => {
  useEffect(() => {
    if (!url) return;
    const script = document.createElement('script');
    script.src = url;
    script.async = true;
    document.body.appendChild(script);
    return () => {
      document.body.removeChild(script);
    };
  }, [url]);
};

export default useScript;


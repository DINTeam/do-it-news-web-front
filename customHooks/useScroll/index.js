import { useEffect, useState } from 'react';

const useScroll = offsetHeight => {
  if (typeof window === 'undefined') return [];
  const [isEnd, setIsEnd] = useState(false);

  useEffect(() => {
    const checkIsEnd = () => {
      const {
        scrollHeight,
        scrollTop,
        clientHeight,
      } = document.documentElement;
      if (scrollTop + clientHeight >= scrollHeight - offsetHeight)
        setIsEnd(true);
      else setIsEnd(false);
    };

    window.addEventListener('scroll', checkIsEnd);

    return () => window.removeEventListener('scroll', checkIsEnd);
  });

  return [isEnd];
};

export default useScroll;

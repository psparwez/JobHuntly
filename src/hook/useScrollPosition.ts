import { useState, useEffect, useRef, useCallback } from 'react';

export default function useScrollPosition(threshold: number = 50) {
  const [scrolled, setScrolled] = useState(false);
  const scrolledRef = useRef(false);

  const handleScroll = useCallback(() => {
    const isScrolled = window.scrollY > +threshold;

    if (isScrolled !== scrolledRef.current) {
      scrolledRef.current = isScrolled;
      setScrolled(isScrolled);
    }
  }, [threshold]);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll, { passive: true });
    // eslint-disable-next-line react-hooks/set-state-in-effect
    handleScroll();
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [handleScroll]);

  return scrolled;
}

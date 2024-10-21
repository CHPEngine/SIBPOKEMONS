import { useCallback, useRef, useState } from 'react';

export const useInView = (options?: IntersectionObserverInit) => {
  const ref = useRef<$TSFixMe>(null);
  const [isInView, setInView] = useState(false);

  const setRef = useCallback((node: Element | null) => {
    if (!node) return;

    const observer = new IntersectionObserver(([entry]) => {
      setInView(entry.isIntersecting);
    }, options);

    ref.current = observer.observe(node);
  }, []);

  return { isInView, ref: setRef };
};

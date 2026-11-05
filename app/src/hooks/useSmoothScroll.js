import { useEffect } from 'react';
import Lenis from 'lenis';
import 'lenis/dist/lenis.css';

export function useSmoothScroll() {
  useEffect(() => {
    const header = document.querySelector('.site-header');
    const lenis = new Lenis({
      autoRaf: true,
      lerp: 0.09,
      anchors: { offset: -(header?.offsetHeight ?? 0) },
    });
    return () => lenis.destroy();
  }, []);
}

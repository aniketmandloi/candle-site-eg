import { useEffect } from 'react';
import Lenis from 'lenis';
import 'lenis/dist/lenis.css';

// Moves each [data-drift] picture by up to its value in px, opposite to the
// scroll, while its frame (overflow hidden) crosses the screen.
function driftPictures() {
  const pictures = [...document.querySelectorAll('[data-drift]')];
  const half = window.innerHeight / 2;
  pictures.forEach((picture) => {
    const frame = picture.parentElement.getBoundingClientRect();
    const reach = half + frame.height / 2;
    const progress = Math.max(-1, Math.min(1, (frame.top + frame.height / 2 - half) / reach));
    picture.style.translate = `0 ${(progress * Number(picture.dataset.drift)).toFixed(1)}px`;
  });
}

export function useSmoothScroll() {
  useEffect(() => {
    const header = document.querySelector('.site-header');
    const lenis = new Lenis({
      autoRaf: true,
      lerp: 0.09,
      anchors: { offset: -(header?.offsetHeight ?? 0) },
    });

    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      return () => lenis.destroy();
    }

    driftPictures();
    lenis.on('scroll', driftPictures);
    window.addEventListener('resize', driftPictures);
    return () => {
      window.removeEventListener('resize', driftPictures);
      lenis.destroy();
    };
  }, []);
}

import { useEffect } from 'react';

export function useReveal() {
  useEffect(() => {
    document.documentElement.classList.add('js');

    const targets = [...document.querySelectorAll('[data-reveal]')];
    targets.forEach((el) => {
      const position = Array.prototype.indexOf.call(el.parentNode.children, el);
      el.style.setProperty('--delay', `${Math.min(position, 4) * 80}ms`);
    });

    if (!('IntersectionObserver' in window)) {
      targets.forEach((el) => el.classList.add('is-in'));
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-in');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15 },
    );

    targets.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);
}

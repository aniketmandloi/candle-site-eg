import { useEffect, useLayoutEffect, useRef, useState } from 'react';

const links = [
  { id: 'scents', label: 'Scents' },
  { id: 'about', label: 'Our story' },
  { id: 'making', label: 'Making' },
  { id: 'gallery', label: 'Gallery' },
  { id: 'visit', label: 'Contact' },
];

function useSectionInView() {
  const [current, setCurrent] = useState(null);

  useEffect(() => {
    const showing = new Set();
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => (entry.isIntersecting ? showing.add(entry.target.id) : showing.delete(entry.target.id)));
        setCurrent(links.find((link) => showing.has(link.id))?.id ?? null);
      },
      { rootMargin: '-45% 0px -50% 0px' },
    );
    links.forEach((link) => {
      const section = document.getElementById(link.id);
      if (section) observer.observe(section);
    });
    return () => observer.disconnect();
  }, []);

  return current;
}

export default function Header({ bagCount, onOpenBag }) {
  const navRef = useRef(null);
  const current = useSectionInView();
  const [pointed, setPointed] = useState(null);
  const [pill, setPill] = useState(null);
  const target = pointed ?? current;

  useLayoutEffect(() => {
    const nav = navRef.current;
    const place = () => {
      const link = target && nav.querySelector(`[href="#${target}"]`);
      setPill((last) =>
        link
          ? { x: link.offsetLeft, width: link.offsetWidth, shown: true }
          : last && { ...last, shown: false },
      );
    };
    place();
    const observer = new ResizeObserver(place);
    observer.observe(nav);
    return () => observer.disconnect();
  }, [target]);

  return (
    <header className="site-header">
      <a className="wordmark" href="#top">Wick &amp; Hour</a>
      <nav ref={navRef} className="site-nav" aria-label="Primary" onMouseLeave={() => setPointed(null)}>
        {pill && (
          <span
            className={`nav-pill${pill.shown ? ' is-shown' : ''}`}
            aria-hidden="true"
            style={{ width: pill.width, transform: `translateX(${pill.x}px)` }}
          />
        )}
        {links.map((link) => (
          <a
            key={link.id}
            href={`#${link.id}`}
            aria-current={link.id === current ? 'location' : undefined}
            onMouseEnter={() => setPointed(link.id)}
            onFocus={() => setPointed(link.id)}
            onBlur={() => setPointed(null)}
          >
            {link.label}
          </a>
        ))}
      </nav>
      <div className="header-actions">
        <button className="bag-button" type="button" onClick={onOpenBag}>
          Bag <span>{bagCount}</span>
        </button>
      </div>
    </header>
  );
}

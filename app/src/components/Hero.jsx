import { useEffect, useLayoutEffect, useRef, useState } from 'react';
import photo from '../assets/photos/hero-scented-candles.webp';
import { scents } from '../data/scents.js';

const reducedMotion = () => window.matchMedia('(prefers-reduced-motion: reduce)').matches;

function useCountTo(target, duration = 650) {
  const [value, setValue] = useState(target);
  const current = useRef(target);

  useEffect(() => {
    const from = current.current;
    if (from === target || reducedMotion()) {
      current.current = target;
      setValue(target);
      return;
    }
    const start = performance.now();
    let frame;
    const tick = (now) => {
      const t = Math.min(1, (now - start) / duration);
      const eased = 1 - (1 - t) ** 3;
      current.current = Math.round(from + (target - from) * eased);
      setValue(current.current);
      if (t < 1) frame = requestAnimationFrame(tick);
    };
    frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
  }, [target, duration]);

  return value;
}

export default function Hero({ scent, onChoose }) {
  const pickerRef = useRef(null);
  const [pill, setPill] = useState(null);
  const hours = useCountTo(scent.hours);

  useLayoutEffect(() => {
    const picker = pickerRef.current;
    const place = () => {
      const chosen = picker.querySelector('[aria-pressed="true"]');
      setPill({ x: chosen.offsetLeft, y: chosen.offsetTop, width: chosen.offsetWidth, height: chosen.offsetHeight });
    };
    place();
    const observer = new ResizeObserver(place);
    observer.observe(picker);
    return () => observer.disconnect();
  }, [scent.id]);

  return (
    <section id="top" className="hero" aria-labelledby="hero-title">
      <img className="hero-photo" data-drift="-60" src={photo} alt="Tea lights and a candle in a glass burning beside white roses on a dark table" width="1920" height="1281" />
      <div className="hero-body">
        <h1 id="hero-title" className="hero-title" data-reveal>
          Burns for <span className="hero-hours">{hours}</span> hours.
        </h1>
        <p className="hero-lede" data-reveal>Small-batch candles, poured by hand and sold by how long they burn.</p>
        <div ref={pickerRef} className={`scent-picker${pill ? ' has-pill' : ''}`} data-reveal role="group" aria-label="Choose a scent">
          {pill && (
            <span
              className="scent-pill"
              aria-hidden="true"
              style={{ width: pill.width, height: pill.height, transform: `translate(${pill.x}px, ${pill.y}px)` }}
            />
          )}
          {scents.map((item) => (
            <button
              key={item.id}
              className="scent-chip"
              type="button"
              aria-pressed={item.id === scent.id}
              onClick={() => onChoose(item.id)}
            >
              {item.name}
            </button>
          ))}
        </div>
        <p className="scent-note" data-reveal aria-live="polite">
          <span key={scent.id} className="scent-note-text">
            {scent.name}: {scent.notes.toLowerCase()}. ${scent.price}.
          </span>
        </p>
        <a className="button button--light hero-action" data-reveal href="#scents">Shop the scents</a>
      </div>
    </section>
  );
}

import photo from '../assets/photos/hero-scented-candles.webp';
import { scents } from '../data/scents.js';

export default function Hero({ scent, onChoose }) {
  return (
    <section id="top" className="hero" aria-labelledby="hero-title">
      <img className="hero-photo" data-drift="-60" src={photo} alt="Tea lights and a candle in a glass burning beside white roses on a dark table" width="1920" height="1281" />
      <div className="hero-body">
        <h1 id="hero-title" className="hero-title" data-reveal>
          Burns for <span>{scent.hours}</span> hours.
        </h1>
        <p className="hero-lede" data-reveal>Small-batch candles, poured by hand and sold by how long they burn.</p>
        <div className="scent-picker" data-reveal role="group" aria-label="Choose a scent">
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
          {scent.name}: {scent.notes.toLowerCase()}. ${scent.price}.
        </p>
        <a className="button button--light hero-action" data-reveal href="#scents">Shop the scents</a>
      </div>
    </section>
  );
}

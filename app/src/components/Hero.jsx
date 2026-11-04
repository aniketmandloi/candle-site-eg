import flame from '../assets/photos/flame.jpg';
import { scents } from '../data/scents.js';

export default function Hero({ scent, onChoose }) {
  return (
    <section className="hero" aria-labelledby="hero-title">
      <h1 id="hero-title" className="hero-title">
        Burns{' '}
        <img className="hero-strip" src={flame} alt="a candle flame" width="1920" height="1277" />{' '}
        for <span>{scent.hours}</span> hours.
      </h1>
      <p className="hero-lede" data-reveal>Small-batch candles, poured by hand. Every one is sold by how long it burns.</p>
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
      <p className="scent-note" aria-live="polite">
        {scent.name}. {scent.notes}.
      </p>
      <a className="button hero-action" href="#scents">Shop the scents</a>
    </section>
  );
}

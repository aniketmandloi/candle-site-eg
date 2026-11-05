import soyGlass from '../assets/photos/soy-glass.webp';
import pillars from '../assets/photos/pillar-candles.webp';
import votives from '../assets/photos/votives.webp';
import tableCandles from '../assets/photos/table-candles.webp';

const shelves = [
  { href: '#scents', label: 'Scents', image: soyGlass, alt: 'A soy candle burning in a glass jar' },
  { href: '#about', label: 'Our story', image: tableCandles, alt: 'Three candles in carved holders on a table by a window' },
  { href: '#making', label: 'Making', image: pillars, alt: 'Tall pillar candles burning against a dark wall' },
  { href: '#gallery', label: 'Gallery', image: votives, alt: 'Rows of votive candles burning in glass holders' },
];

export default function Shelves() {
  return (
    <section className="shelves" aria-labelledby="shelves-title">
      <h2 id="shelves-title" className="shelves-title" data-reveal>Small batches, poured by hand, sold by the hour.</h2>
      <ul className="shelf-list">
        {shelves.map((shelf) => (
          <li key={shelf.href} data-reveal>
            <a className="shelf" href={shelf.href}>
              <img src={shelf.image} alt={shelf.alt} loading="lazy" data-drift="24" />
              <span className="shelf-label">{shelf.label}</span>
            </a>
          </li>
        ))}
      </ul>
    </section>
  );
}

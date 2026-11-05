import lantern from '../assets/photos/lantern-night.webp';
import threeFlames from '../assets/photos/three-flames.webp';
import diningTable from '../assets/photos/dining-table.webp';
import singleFlame from '../assets/photos/single-flame.webp';
import cellar from '../assets/photos/gallery-cellar.jpg';
import dinner from '../assets/photos/gallery-dinner.webp';

const pictures = [
  { image: lantern, alt: 'A candle burning inside a star-cut lantern on a table at night' },
  { image: threeFlames, alt: 'Three candle flames close up against a dark red background' },
  { image: diningTable, alt: 'A dining table set for dinner and lit by two candles' },
  { image: singleFlame, alt: 'A single candle burning in a glass bowl in the dark' },
  { image: cellar, alt: 'A candle on a table in a wine cellar' },
  { image: dinner, alt: 'A red candle burning on a festive dinner table' },
];

export default function Gallery() {
  return (
    <section id="gallery" className="gallery" aria-labelledby="gallery-title">
      <h2 id="gallery-title" className="section-title section-title--centre" data-reveal>Light, at the end of the day</h2>
      <ul className="gallery-grid">
        {pictures.map((picture) => (
          <li key={picture.alt} className="gallery-item" data-reveal>
            <img src={picture.image} alt={picture.alt} loading="lazy" data-drift="28" />
          </li>
        ))}
      </ul>
    </section>
  );
}

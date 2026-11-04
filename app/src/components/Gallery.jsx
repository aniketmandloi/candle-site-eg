import lantern from '../assets/photos/gallery-lantern.webp';
import dinner from '../assets/photos/gallery-dinner.webp';
import cellar from '../assets/photos/gallery-cellar.jpg';
import temple from '../assets/photos/gallery-temple.jpg';
import soy from '../assets/photos/gallery-soy.webp';

const pictures = [
  { image: lantern, alt: 'A candle burning inside a lantern', caption: 'A lantern, lit.', size: 'wide' },
  { image: dinner, alt: 'A dinner table set with burning candles', caption: 'A table set by candlelight.', size: 'narrow' },
  { image: cellar, alt: 'A candle on a table in a wine cellar', caption: 'A candle in a wine cellar.', size: 'narrow' },
  { image: temple, alt: 'Candles at the entrance of a temple at night', caption: 'Night at a temple entrance.', size: 'narrow' },
  { image: soy, alt: 'A homemade soy candle on a wooden table', caption: 'A soy candle on wood.', size: 'wide' },
];

export default function Gallery() {
  return (
    <section id="gallery" className="gallery" aria-labelledby="gallery-title">
      <h2 id="gallery-title" className="section-title" data-reveal>Light, at the end of the day</h2>
      <ul className="gallery-grid">
        {pictures.map((picture) => (
          <li key={picture.caption} className={`gallery-item gallery-item--${picture.size}`} data-reveal>
            <figure>
              <img src={picture.image} alt={picture.alt} loading="lazy" />
              <figcaption>{picture.caption}</figcaption>
            </figure>
          </li>
        ))}
      </ul>
    </section>
  );
}

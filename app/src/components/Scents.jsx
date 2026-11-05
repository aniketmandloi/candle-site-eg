import { scents } from '../data/scents.js';

export default function Scents({ onAdd }) {
  return (
    <section id="scents" className="scents" aria-labelledby="scents-title">
      <h2 id="scents-title" className="section-title section-title--centre" data-reveal>Our scents</h2>
      <ul className="product-grid">
        {scents.map((scent) => (
          <li key={scent.id} className="product" data-reveal>
            <img className="product-photo" src={scent.image} alt="" width="800" height="800" loading="lazy" />
            <h3 className="product-name">{scent.name}</h3>
            <p className="product-notes">{scent.notes}</p>
            <p className="product-price">
              <span>{scent.hours} hours</span>
              <span>${scent.price}</span>
            </p>
            <button className="add-button" type="button" onClick={() => onAdd(scent)}>
              Add to bag<span className="visually-hidden">: {scent.name}</span>
            </button>
          </li>
        ))}
      </ul>
    </section>
  );
}

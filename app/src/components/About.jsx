import mould from '../assets/photos/mould-1947.jpg';

export default function About() {
  return (
    <section id="about" className="about" aria-labelledby="about-title">
      <h2 id="about-title" className="section-title" data-reveal>About us</h2>
      <figure className="about-figure" data-reveal>
        <img src={mould} alt="A candle mould from a museum collection" width="1920" height="1280" loading="lazy" />
        <figcaption>A candle mould, 1947, from a museum collection.</figcaption>
      </figure>
      <div className="about-text" data-reveal>
        <p className="about-statement">Wick &amp; Hour started at a kitchen table, pouring small batches for friends.</p>
        <p>We still pour every batch by hand, in soy and beeswax, and keep batches small enough to check each candle before it is sold.</p>
        <p>Every label carries the burn time, because that is the honest measure of a candle: how long it lights a room.</p>
        <dl className="about-facts">
          <div>
            <dt>Waxes</dt>
            <dd>Soy and beeswax</dd>
          </div>
          <div>
            <dt>Batch size</dt>
            <dd>Under 40 candles</dd>
          </div>
          <div>
            <dt>Shipping</dt>
            <dd>Within 3 working days</dd>
          </div>
        </dl>
      </div>
    </section>
  );
}

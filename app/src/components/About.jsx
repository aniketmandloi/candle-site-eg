import bookCandle from '../assets/photos/book-candle.webp';

export default function About() {
  return (
    <section id="about" className="about" aria-labelledby="about-title">
      <div className="about-text" data-reveal>
        <h2 id="about-title" className="section-title">Our story</h2>
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
      <div className="about-photo" data-reveal>
        <img src={bookCandle} alt="A candle burning beside an open book and reading glasses" width="1024" height="683" loading="lazy" data-drift="36" />
      </div>
    </section>
  );
}

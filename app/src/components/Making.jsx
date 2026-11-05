import pouring from '../assets/photos/pouring.jpg';
import moulds from '../assets/photos/moulds.jpg';
import wax from '../assets/photos/wax.jpg';
import orbLight from '../assets/photos/orb-light.jpg';

const stages = [
  {
    verb: 'Pour',
    text: 'Wax goes into the mould while it is still warm, so the surface sets smooth.',
    image: pouring,
    alt: 'Candles being poured into moulds',
    width: 1920,
    height: 1440,
  },
  {
    verb: 'Trim',
    text: 'Each wick is cut to a fixed length before the first light, so every burn starts even.',
    image: moulds,
    alt: 'An engraved print of men working with candle moulds in a workshop',
    width: 1920,
    height: 1629,
  },
  {
    verb: 'Cure',
    text: 'Each candle rests for two weeks, so the scent settles into the wax before it is packed.',
    image: wax,
    alt: 'Wax being worked by hand',
    width: 1920,
    height: 1440,
  },
  {
    verb: 'Light',
    text: 'Let the first burn reach the edge of the jar. That keeps every burn after it even.',
    image: orbLight,
    alt: 'A candle flame projected through a glass orb onto a table',
    width: 1920,
    height: 1080,
  },
];

export default function Making() {
  return (
    <section id="making" className="making" aria-labelledby="making-title">
      <h2 id="making-title" className="section-title section-title--centre" data-reveal>How a candle is made</h2>
      <ol className="stage-row">
        {stages.map((stage) => (
          <li className="stage" key={stage.verb} data-reveal>
            <div className="stage-frame">
              <img className="stage-photo" src={stage.image} alt={stage.alt} width={stage.width} height={stage.height} loading="lazy" />
              <h3 className="stage-verb">{stage.verb}</h3>
            </div>
            <p className="stage-text">{stage.text}</p>
          </li>
        ))}
      </ol>
    </section>
  );
}

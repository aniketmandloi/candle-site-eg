import credits from '../assets/photos/credits.json';

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-top">
        <p className="invitation" data-reveal>Light one tonight.</p>
        <div className="footer-side" data-reveal>
          <a className="button" href="#scents">Shop the scents</a>
          <nav className="footer-links" aria-label="Footer">
            <a href="#scents">Scents</a>
            <a href="#making">Making</a>
            <a href="#gallery">Gallery</a>
            <a href="#about">About</a>
            <a href="#visit">Visit</a>
          </nav>
        </div>
      </div>
      <section className="credits" aria-label="Picture credits" data-reveal>
        <h2 className="credits-title">Pictures</h2>
        <ul>
          {credits.map((credit) => (
            <li key={credit.file}>
              <a href={credit.page}>{credit.title}</a>
              {credit.creator ? ` by ${credit.creator}` : ''}
              {', '}
              {credit.licenseUrl ? <a href={credit.licenseUrl}>{credit.license}</a> : credit.license}
              {`, via ${credit.via}.`}
            </li>
          ))}
        </ul>
      </section>
      <p className="footer-name" aria-hidden="true">Wick &amp; Hour</p>
    </footer>
  );
}

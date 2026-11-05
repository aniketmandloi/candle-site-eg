export default function Header({ bagCount, onOpenBag }) {
  return (
    <header className="site-header">
      <a className="wordmark" href="#top">Wick &amp; Hour</a>
      <nav className="site-nav" aria-label="Primary">
        <a href="#scents">Scents</a>
        <a href="#making">Making</a>
        <a href="#gallery">Gallery</a>
        <a href="#about">Our story</a>
        <a href="#visit">Contact</a>
      </nav>
      <div className="header-actions">
        <button className="bag-button" type="button" onClick={onOpenBag}>
          Bag <span>{bagCount}</span>
        </button>
      </div>
    </header>
  );
}

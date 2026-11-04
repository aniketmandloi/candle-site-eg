export default function Header({ theme, onToggleTheme, bagCount, onOpenBag }) {
  const next = theme === 'dark' ? 'light' : 'dark';

  return (
    <header className="site-header">
      <a className="wordmark" href="#top">Wick &amp; Hour</a>
      <nav className="site-nav" aria-label="Primary">
        <a href="#scents">Scents</a>
        <a href="#making">Making</a>
        <a href="#gallery">Gallery</a>
        <a href="#about">About</a>
        <a href="#visit">Visit</a>
      </nav>
      <div className="header-actions">
        <button className="theme-toggle" type="button" onClick={onToggleTheme} aria-label={`Switch to ${next} theme`}>
          {next === 'light' ? 'Light' : 'Dark'}
        </button>
        <button className="bag-button" type="button" onClick={onOpenBag}>
          Bag <span>{bagCount}</span>
        </button>
      </div>
    </header>
  );
}

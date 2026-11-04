import { useState } from 'react';
import BagDialog from './components/BagDialog.jsx';
import Header from './components/Header.jsx';
import Hero from './components/Hero.jsx';
import Gallery from './components/Gallery.jsx';
import Making from './components/Making.jsx';
import Scents from './components/Scents.jsx';
import { useBag } from './hooks/useBag.js';
import { useTheme } from './hooks/useTheme.js';
import { scents } from './data/scents.js';

export default function App() {
  const [theme, setTheme] = useTheme();
  const [scentId, setScentId] = useState(scents[0].id);
  const [bagOpen, setBagOpen] = useState(false);
  const bag = useBag();
  const scent = scents.find((item) => item.id === scentId);

  return (
    <>
      <a className="skip-link" href="#main">Skip to content</a>
      <Header
        theme={theme}
        onToggleTheme={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
        bagCount={bag.items.length}
        onOpenBag={() => setBagOpen(true)}
      />
      <main id="main">
        <Hero scent={scent} onChoose={setScentId} />
        <Scents onAdd={bag.add} />
        <Making />
        <Gallery />
      </main>
      <BagDialog open={bagOpen} items={bag.items} onClose={() => setBagOpen(false)} />
    </>
  );
}

import { useState } from 'react';
import About from './components/About.jsx';
import BagDialog from './components/BagDialog.jsx';
import Header from './components/Header.jsx';
import Hero from './components/Hero.jsx';
import Footer from './components/Footer.jsx';
import Gallery from './components/Gallery.jsx';
import Making from './components/Making.jsx';
import Scents from './components/Scents.jsx';
import Visit from './components/Visit.jsx';
import { useBag } from './hooks/useBag.js';
import { useReveal } from './hooks/useReveal.js';
import { scents } from './data/scents.js';

export default function App() {
  const [scentId, setScentId] = useState(scents[0].id);
  const [bagOpen, setBagOpen] = useState(false);
  const bag = useBag();
  useReveal();
  const scent = scents.find((item) => item.id === scentId);

  return (
    <>
      <a className="skip-link" href="#main">Skip to content</a>
      <Header bagCount={bag.items.length} onOpenBag={() => setBagOpen(true)} />
      <main id="main">
        <Hero scent={scent} onChoose={setScentId} />
        <Scents onAdd={bag.add} />
        <Making />
        <Gallery />
        <About />
        <Visit />
      </main>
      <Footer />
      <BagDialog open={bagOpen} items={bag.items} onClose={() => setBagOpen(false)} />
    </>
  );
}

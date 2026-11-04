import { useState } from 'react';
import Header from './components/Header.jsx';
import Hero from './components/Hero.jsx';
import { useTheme } from './hooks/useTheme.js';
import { scents } from './data/scents.js';

export default function App() {
  const [theme, setTheme] = useTheme();
  const [scentId, setScentId] = useState(scents[0].id);
  const scent = scents.find((item) => item.id === scentId);

  return (
    <>
      <a className="skip-link" href="#main">Skip to content</a>
      <Header theme={theme} onToggleTheme={() => setTheme(theme === 'dark' ? 'light' : 'dark')} />
      <main id="main">
        <Hero scent={scent} onChoose={setScentId} />
      </main>
    </>
  );
}

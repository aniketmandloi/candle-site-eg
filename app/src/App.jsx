import Header from './components/Header.jsx';
import { useTheme } from './hooks/useTheme.js';

export default function App() {
  const [theme, setTheme] = useTheme();

  return (
    <>
      <a className="skip-link" href="#main">Skip to content</a>
      <Header theme={theme} onToggleTheme={() => setTheme(theme === 'dark' ? 'light' : 'dark')} />
      <main id="main" />
    </>
  );
}

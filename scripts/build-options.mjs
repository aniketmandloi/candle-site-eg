import { mkdirSync, readFileSync, writeFileSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

// Generated from index.html. Edit index.html, then run this script again.
const root = join(dirname(fileURLToPath(import.meta.url)), '..');
const source = readFileSync(join(root, 'index.html'), 'utf8');

const options = [
  { folder: '1', theme: null },
  { folder: '2', theme: 'blush' },
  { folder: '3', theme: 'cute' },
  { folder: '4', theme: 'candlelit' },
  { folder: '5', theme: 'grid' },
];

const stylesheet = '<link rel="stylesheet" href="styles.css">';
const script = '<script src="main.js" defer></script>';

for (const { folder, theme } of options) {
  const themeLink = theme ? `\n<link rel="stylesheet" href="../themes/${theme}.css">` : '';
  const page = source
    .replace(stylesheet, `<link rel="stylesheet" href="../styles.css">${themeLink}`)
    .replace(script, '<script src="../main.js" defer></script>')
    .replaceAll('src="assets/', 'src="../assets/');

  if (!page.includes('href="../styles.css"') || !page.includes('src="../main.js"')) {
    throw new Error(`option ${folder}: asset paths were not rewritten`);
  }

  mkdirSync(join(root, folder), { recursive: true });
  writeFileSync(join(root, folder, 'index.html'), page);
}

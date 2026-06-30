import { defineConfig } from 'vite';
import { resolve } from 'path';
import fs from 'fs';

// Auto-discover all HTML files recursively
function getHtmlEntries(dir, base = '') {
  const entries = {};
  const items = fs.readdirSync(dir);
  for (const item of items) {
    const fullPath = resolve(dir, item);
    const relativePath = base ? `${base}/${item}` : item;
    if (fs.statSync(fullPath).isDirectory()) {
      if (item === 'node_modules' || item === 'dist' || item === '.git') continue;
      Object.assign(entries, getHtmlEntries(fullPath, relativePath));
    } else if (item.endsWith('.html')) {
      const name = relativePath.replace(/\.html$/, '').replace(/\//g, '_');
      entries[name] = fullPath;
    }
  }
  return entries;
}

export default defineConfig({
  build: {
    rollupOptions: {
      input: getHtmlEntries(resolve(__dirname)),
    },
  },
  server: {
    port: 3000,
    open: true,
  },
});

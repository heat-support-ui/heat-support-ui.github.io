import path from 'path';
import react from '@vitejs/plugin-react';

const SRC_DIR = path.resolve(__dirname, './src');
const PUBLIC_DIR = path.resolve(__dirname, './public');
const BUILD_DIR = path.resolve(__dirname, './docs'); // Changed to 'docs'

export default async () => {
  return {
    plugins: [react()],
    root: SRC_DIR,
    base: '/', // Set base to '/' for GitHub Pages
    publicDir: PUBLIC_DIR,
    build: {
      outDir: BUILD_DIR, // Output to 'docs' folder
      assetsInlineLimit: 0,
      emptyOutDir: true,
      rollupOptions: {
        treeshake: false,
      },
    },
    resolve: {
      alias: {
        '@': SRC_DIR,
      },
    },
    server: {
      host: true,
    },
  };
};

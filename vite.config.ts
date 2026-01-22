import path from 'path';
import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react';
import fs from 'fs';

export default defineConfig(({ mode }) => {
    const env = loadEnv(mode, '.', '');
    return {
      base: '/matreshki_last/',
      server: {
        port: 3000,
        host: '0.0.0.0',
      },
      plugins: [
        react(),
        {
          name: 'remove-crossorigin-and-move-script',
          closeBundle() {
            // Удаляем crossorigin и перемещаем скрипт в body
            const htmlPath = path.resolve(__dirname, 'dist/index.html');
            if (fs.existsSync(htmlPath)) {
              let html = fs.readFileSync(htmlPath, 'utf-8');
              // Удаляем crossorigin
              html = html.replace(/\s+crossorigin/g, '');
              // Находим скрипт модуля в head
              const scriptMatch = html.match(/<script type="module"[^>]*src="([^"]+)"[^>]*><\/script>/);
              if (scriptMatch) {
                const scriptSrc = scriptMatch[1];
                // Удаляем скрипт из head
                html = html.replace(/<script type="module"[^>]*src="[^"]+"[^>]*><\/script>\s*/g, '');
                // Добавляем скрипт перед закрывающим тегом body
                html = html.replace('</body>', `<script type="module" src="${scriptSrc}"></script>\n</body>`);
              }
              fs.writeFileSync(htmlPath, html, 'utf-8');
            }
          }
        }
      ],
      build: {
        rollupOptions: {
          output: {
            entryFileNames: 'assets/[name]-[hash].js',
            chunkFileNames: 'assets/[name]-[hash].js',
            assetFileNames: 'assets/[name]-[hash][extname]',
          }
        }
      },
      define: {
        'process.env.API_KEY': JSON.stringify(env.GEMINI_API_KEY),
        'process.env.GEMINI_API_KEY': JSON.stringify(env.GEMINI_API_KEY)
      },
      resolve: {
        alias: {
          '@': path.resolve(__dirname, '.'),
        }
      }
    };
});

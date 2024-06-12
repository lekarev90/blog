import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import svgr from 'vite-plugin-svgr';

export default defineConfig({
  plugins: [react(), svgr({
    include: '**/*.svg',
    exclude: /node_modules/,
    svgrOptions: {
      plugins: ['@svgr/plugin-svgo', '@svgr/plugin-jsx'],
      icon: true,
      svgoConfig: {
        plugins: [
          {
            name: 'preset-default',
            params: {
              overrides: {
                convertColors: {
                  currentColor: true,
                },
              },
            },
          },
        ],
      },
    },
  })],
  resolve: {
    alias: [
      { find: '@', replacement: '/src' },
    ],
  },
  define: {
    __IS_DEV__: JSON.stringify(true),
    __API__: JSON.stringify('http://localhost:8000'),
  },
});

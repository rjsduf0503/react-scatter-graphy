import path from 'node:path';

import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';
import dts from 'vite-plugin-dts';

export default defineConfig({
  publicDir: false,
  plugins: [
    react(),
    dts({
      insertTypesEntry: true,
    }),
  ],
  build: {
    lib: {
      entry: path.resolve(__dirname, 'lib/index.ts'),
      name: 'ReactScatterGraphy',
      formats: ['es', 'umd'],
      fileName: (format) => `react-scatter-graphy.${format}.js`,
    },
    rollupOptions: {
      external: ['react', 'react-dom', '@emotion/react', '@emotion/styled'],
      output: {
        globals: {
          react: 'React',
          'react-dom': 'ReactDOM',
          '@emotion/react': '@emotion/react',
          '@emotion/styled': '@emotion/styled',
        },
      },
    },
  },
  resolve: {
    alias: [{ find: '@', replacement: '/lib' }],
  },
});

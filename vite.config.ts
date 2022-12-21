import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
});

// export default defineConfig({
//   plugins: [react()],
//   build: {
//     outDir: 'dist',
//   },
// });

// export default defineConfig({
//   plugins: [react()],
//   build: {
//     lib: {
//       // Could also be a dictionary or array of multiple entry points
//       entry: './src/main.tsx',
//       name: 'MyLib',
//       // the proper extensions will be added
//       fileName: 'my-lib',
//     },
//   },
// });

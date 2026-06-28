// ✅ NEW vite.config.js (How it should look)
import { defineConfig } from 'vite'
import reactOxc from '@vitejs/plugin-react-oxc' // NEW PLUGIN

export default defineConfig({
  plugins: [reactOxc()],
  
  // REMOVE the 'esbuild' block completely. 
  // Oxc handles JSX automatically now.
  
  optimizeDeps: {
    // Change 'rollupOptions' to 'rolldownOptions'
    rolldownOptions: { 
      // ... keep any existing config you had here
    }
  }
})
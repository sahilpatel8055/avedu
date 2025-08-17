import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";
import { ssr } from "vite-plugin-ssr/plugin";

// https://vitejs.dev/config/
export default defineConfig(({ mode, command }) => ({
  server: {
    host: "::",
    port: 8080,
  },
  plugins: [
    react(),
    mode === 'development' && componentTagger(),
    ssr({
      prerender: {
        partial: true,
        noExtraDir: true,
      }
    }),
  ].filter(Boolean),
  resolve: {
    alias: {
      "~/": path.resolve(__dirname, "./src/"),
      "@": path.resolve(__dirname, "./src"),
    },
  },
  build: {
    rollupOptions: {
      output: {
        // Only use manual chunks for client builds, not SSR
        ...(command === 'build' && !process.env.SSR && {
          manualChunks: {
            vendor: ['react', 'react-dom'],
            router: ['react-router-dom'],
          },
        }),
      },
    },
  },
  ssr: {
    noExternal: ['react-router-dom'],
  },
}));

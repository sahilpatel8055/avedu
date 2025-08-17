# Build Scripts for SSR

Add these scripts to your package.json:

```json
{
  "scripts": {
    "dev": "vite",
    "build": "npm run build:client && npm run build:server",
    "build:client": "vite build --ssrManifest --outDir dist/client",
    "build:server": "vite build --ssr src/entry-server.tsx --outDir dist/server",
    "preview": "node server.js",
    "prerender": "npm run build && node prerender.js"
  }
}
```

## How it improves SEO and Crawlability:

1. **Server-Side Rendering**: Pages are rendered on the server with full HTML content
2. **Hydration**: Client-side React takes over seamlessly after initial load
3. **Pre-rendering**: Critical pages are pre-generated as static HTML
4. **Faster Load Times**: Initial page paint is much faster
5. **Better Crawling**: Search engines see fully rendered HTML content immediately
6. **SEO Benefits**: All meta tags, structured data, and content are available to crawlers

## Usage:
- Development: `npm run dev` (standard Vite dev server)
- Production Build: `npm run build` (builds both client and server)
- Preview SSR: `npm run preview` (runs the SSR server)
- Pre-render: `npm run prerender` (generates static HTML for key pages)

This implementation provides the SEO benefits of SSR frameworks like Next.js while maintaining your existing React codebase.
import fs from 'node:fs/promises'
import path from 'node:path'
import { fileURLToPath } from 'node:url'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const toAbsolute = (p) => path.resolve(__dirname, p)

const template = await fs.readFile(toAbsolute('dist/client/index.html'), 'utf-8')
const { render } = await import('./dist/server/entry-server.js')

// Pre-render important routes for SEO
const routesToPrerender = [
  '/',
  '/universities',
  '/university/ignou',
  '/university/manipal', 
  '/university/amity',
  '/university/lpu',
  '/university/uttaranchal',
  '/university/vgu',
  '/university/smu',
  '/university/mangalyatan',
  '/university/du-sol',
  '/courses/mba',
  '/courses/bba',
  '/courses/engineering',
  '/courses/commerce',
  '/courses/arts',
  '/blog',
  '/disclaimer',
  '/privacy-policy',
  '/terms-conditions'
]

for (const url of routesToPrerender) {
  const rendered = await render(url)
  const html = template
    .replace(`<!--app-head-->`, rendered.head ?? '')
    .replace(`<!--app-html-->`, rendered.html ?? '')
  
  const filePath = `dist/client${url === '/' ? '/index' : url}.html`
  const dir = path.dirname(filePath)
  
  await fs.mkdir(dir, { recursive: true })
  await fs.writeFile(filePath, html)
  console.log('pre-rendered:', filePath)
}
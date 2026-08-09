import fs from 'fs'
import path from 'path'
import https from 'https'

const domain = 'https://www.prescron.com'

const baseRoutes = [
  '/',
  '/features',
  '/privacy',
  '/how-it-works',
  '/screenshots',
  '/faq',
  '/blog'
]

// Dynamically generate blog post routes
const blogDir = path.join(process.cwd(), 'public', 'blog')
let blogRoutes = []
if (fs.existsSync(blogDir)) {
  const files = fs.readdirSync(blogDir).filter(f => f.endsWith('.md'))
  blogRoutes = files.map(file => '/blog/' + file.replace('.md', ''))
}

const routes = [...baseRoutes, ...blogRoutes]

const today = new Date().toISOString().split('T')[0]

const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  ${routes.map(route => `
  <url>
    <loc>${domain}${route}</loc>
    <lastmod>${today}</lastmod>
    <changefreq>${route === '/' ? 'daily' : 'weekly'}</changefreq>
    <priority>${route === '/' ? '1.0' : '0.8'}</priority>
  </url>
  `).join('')}
</urlset>
`

const destPath = path.join(process.cwd(), 'dist', 'sitemap.xml')

// Ensure dist directory exists
if (!fs.existsSync(path.join(process.cwd(), 'dist'))) {
  fs.mkdirSync(path.join(process.cwd(), 'dist'))
}

fs.writeFileSync(destPath, sitemap.trim())
console.log(`✅ Sitemap successfully generated at ${destPath}`)

// Removed deprecated search engine pinging to prevent Vercel build hangs


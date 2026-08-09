import fs from 'fs'
import path from 'path'
import https from 'https'

const domain = 'https://www.prescron.com'

const routes = [
  '/',
  '/features',
  '/privacy',
  '/how-it-works',
  '/screenshots',
  '/faq',
  '/blog',
  '/blog/on-device-ai-future-of-privacy',
  '/blog/introducing-prescron-llm',
  '/blog/danger-of-cloud-document-processing'
]

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

// Ping search engines
const pingEngine = (engineUrl) => {
  https.get(engineUrl, (res) => {
    console.log(`✅ Pushed to ${engineUrl}: Status ${res.statusCode}`)
  }).on('error', (err) => {
    console.error(`❌ Failed to push to ${engineUrl}: ${err.message}`)
  })
}

// Automatically ping Google and Bing
pingEngine(`https://www.google.com/ping?sitemap=${domain}/sitemap.xml`)
pingEngine(`https://www.bing.com/ping?sitemap=${domain}/sitemap.xml`)

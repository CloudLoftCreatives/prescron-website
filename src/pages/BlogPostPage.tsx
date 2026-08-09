import { useEffect, useState } from 'react'
import { useParams, Link } from 'react-router-dom'
import Markdown from 'react-markdown'

const postMeta: Record<string, { title: string; date: string }> = {
  'on-device-ai-future-of-privacy': {
    title: 'Why On-Device AI is the Future of Privacy',
    date: 'August 9, 2026'
  },
  'introducing-prescron-llm': {
    title: 'Introducing Prescron LLM: Our Custom Mobile Intelligence',
    date: 'August 1, 2026'
  },
  'danger-of-cloud-document-processing': {
    title: 'The Danger of Cloud Document Processing',
    date: 'July 15, 2026'
  },
  'quantization-edge-computing': {
    title: 'How Quantization Makes Edge Computing Possible',
    date: 'July 10, 2026'
  },
  'end-of-data-mining': {
    title: 'The End of Data Mining: A New Era for Consumers',
    date: 'July 5, 2026'
  },
  'why-we-chose-local-vector-dbs': {
    title: 'Why We Chose Local Vector Databases over Cloud Vectors',
    date: 'June 28, 2026'
  },
  'mobile-npus-explained': {
    title: 'Mobile NPUs Explained: The Silicon Revolution',
    date: 'June 20, 2026'
  },
  'securing-your-digital-vault': {
    title: 'Securing Your Digital Vault: AES-256 on Mobile',
    date: 'June 12, 2026'
  },
  'ai-without-internet': {
    title: 'AI Without the Internet: Designing for the Dead Zone',
    date: 'June 5, 2026'
  },
  'future-of-personal-intelligence': {
    title: 'The Future of Personal Intelligence',
    date: 'May 30, 2026'
  }
}

export default function BlogPostPage() {
  const { slug } = useParams<{ slug: string }>()
  const [content, setContent] = useState<string>('')
  const [loading, setLoading] = useState(true)

  const meta = slug ? postMeta[slug] : null

  useEffect(() => {
    window.scrollTo(0, 0)
    if (slug) {
      // In production, these markdown files will be in the public/blog/ folder
      fetch(`/blog/${slug}.md`)
        .then(res => {
          if (!res.ok) throw new Error('Post not found')
          return res.text()
        })
        .then(text => {
          setContent(text)
          setLoading(false)
        })
        .catch(() => {
          setContent('# Post not found\n\nThe requested article could not be located.')
          setLoading(false)
        })
    }
  }, [slug])

  if (!meta) {
    return (
      <div className="pt-32 pb-32 bg-white min-h-screen flex items-center justify-center text-slate-900">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">Post not found</h1>
          <Link to="/blog" className="text-[#20C997] hover:underline">Return to Blog</Link>
        </div>
      </div>
    )
  }

  return (
    <article className="pt-32 pb-32 bg-white min-h-screen text-slate-900">
      <div className="max-w-3xl mx-auto px-6 lg:px-8">
        
        <Link to="/blog" className="inline-flex items-center gap-2 text-[#20C997] font-semibold text-sm uppercase tracking-wider mb-12 hover:opacity-80 transition-opacity">
          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
          </svg>
          Back to all posts
        </Link>

        <header className="mb-16">
          <time className="text-sm font-medium tracking-wider text-slate-500 uppercase mb-6 block">{meta.date}</time>
          <h1 className="font-display font-bold text-slate-900 tracking-tight leading-[1.05] mb-8" style={{ fontSize: 'clamp(36px, 5vw, 64px)' }}>
            {meta.title}
          </h1>
        </header>

        {loading ? (
          <div className="flex justify-center py-20">
            <div className="w-8 h-8 border-2 border-[#20C997] border-t-transparent rounded-full animate-spin"></div>
          </div>
        ) : (
          <div className="prose prose-slate prose-lg max-w-none prose-headings:font-display prose-headings:tracking-tight prose-h2:mt-12 prose-h2:mb-6 prose-h3:mt-10 prose-h3:mb-4 prose-p:mb-8 prose-p:leading-relaxed prose-li:mb-2 prose-a:text-[#20C997] prose-a:no-underline hover:prose-a:underline prose-img:rounded-2xl">
            <Markdown>{content}</Markdown>
          </div>
        )}

      </div>
    </article>
  )
}

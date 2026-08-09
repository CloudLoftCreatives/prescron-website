import { useEffect } from 'react'
import { Link } from 'react-router-dom'

const posts = [
  {
    title: 'Why On-Device AI is the Future of Privacy',
    date: 'August 9, 2026',
    excerpt: 'Explore how moving computation from the cloud to the edge protects your sensitive data from breaches and unauthorized access.',
    slug: 'on-device-ai-future-of-privacy'
  },
  {
    title: 'Introducing Prescron LLM: Our Custom Mobile Intelligence',
    date: 'August 1, 2026',
    excerpt: 'A deep dive into how we quantized a massive neural network to run natively on mobile silicon without sacrificing reasoning capability.',
    slug: 'introducing-prescron-llm'
  },
  {
    title: 'The Danger of Cloud Document Processing',
    date: 'July 15, 2026',
    excerpt: 'When you upload a document to a cloud AI, who really owns that data? Understanding the hidden terms of service in modern tech.',
    slug: 'danger-of-cloud-document-processing'
  }
]

export default function BlogPage() {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <div className="pt-32 pb-32 bg-[#080c14] min-h-screen text-white">
      <div className="max-w-4xl mx-auto px-6 lg:px-8">
        <div className="mb-16 reveal">
          <p className="text-[12px] font-semibold tracking-[0.2em] uppercase text-[#20C997] mb-6">Updates & Insights</p>
          <h1 className="font-display font-bold text-white tracking-tight leading-[1.05] mb-8" style={{ fontSize: 'clamp(40px, 6vw, 72px)' }}>
            The Prescron Blog
          </h1>
          <p className="text-white/60 text-xl leading-relaxed font-light max-w-2xl">
            Thoughts on privacy, edge computing, and the future of local-first artificial intelligence.
          </p>
        </div>

        <div className="space-y-12">
          {posts.map((post, index) => (
            <article key={post.slug} className={`group reveal reveal-delay-${index + 1} border-b border-white/10 pb-12 last:border-0`}>
              <div className="flex flex-col items-start">
                <time className="text-sm font-medium tracking-wider text-[#20C997] uppercase mb-4">{post.date}</time>
                <Link to={`/blog/${post.slug}`} className="block">
                  <h2 className="text-3xl font-display font-bold mb-4 text-white group-hover:text-white/80 transition-colors">
                    {post.title}
                  </h2>
                </Link>
                <p className="text-white/60 text-lg leading-relaxed mb-6">
                  {post.excerpt}
                </p>
                <Link to={`/blog/${post.slug}`} className="inline-flex items-center gap-2 text-sm font-semibold tracking-wider text-white uppercase hover:text-[#20C997] transition-colors">
                  Read Article
                  <svg className="w-4 h-4 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </Link>
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  )
}

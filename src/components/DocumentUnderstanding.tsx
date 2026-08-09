import PhoneFrame from './PhoneFrame'

const capabilities = [
  'Document summaries', 'Searchable information', 'Important dates & deadlines',
  'Structured data extraction', 'Key facts', 'Document organization',
  'Semantic search', 'Question answering',
]

export default function DocumentUnderstanding() {
  return (
    <section className="py-24 lg:py-32 bg-white" aria-label="Document understanding feature">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          {/* Left: Screenshot */}
          <div className="order-2 lg:order-1 reveal">
            <div className="relative">
              <div className="absolute -inset-12 rounded-3xl opacity-20 blur-3xl pointer-events-none"
                   style={{ background: 'radial-gradient(ellipse, #20C997 0%, transparent 70%)' }}
                   aria-hidden="true" />
              <PhoneFrame className="max-w-[460px] lg:max-w-[520px]">
                <img
                  src="/assets/chatgpt.png"
                  alt="Prescron deep understanding"
                  className="w-full block"
                  loading="lazy"
                />
              </PhoneFrame>
            </div>
          </div>

          {/* Right: Content */}
          <div className="order-1 lg:order-2 space-y-7 reveal reveal-delay-2">
            <div>
              <p className="text-[11px] font-semibold tracking-[0.2em] uppercase text-[#20C997] mb-4">Document Intelligence</p>
              <h2 className="font-display font-bold tracking-tight text-[#111827] mb-5"
                  style={{ fontSize: 'clamp(32px, 4.5vw, 52px)', lineHeight: '1.1' }}>
                Your documents become<br />searchable knowledge.
              </h2>
              <p className="text-[#475569] text-lg leading-relaxed">
                Prescron processes your documents and creates structured intelligence from them.
                Everything stays on your device. Designed to help you find and understand information faster.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-2">
              {capabilities.map((cap) => (
                <div key={cap} className="flex items-center gap-2.5 py-2.5 px-3 rounded-lg bg-[#F7F9FC] border border-[#E2E8F4]">
                  <svg className="w-3.5 h-3.5 text-[#20C997] flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5} aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-[13px] text-[#475569] font-medium">{cap}</span>
                </div>
              ))}
            </div>

            <p className="text-xs text-[#8898aa] italic">
              AI results may vary. Always verify critical information against the original document.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

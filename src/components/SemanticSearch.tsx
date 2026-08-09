import PhoneFrame from './PhoneFrame'

export default function SemanticSearch() {
  return (
    <section className="py-24 lg:py-32 bg-[#F7F9FC]" aria-label="Semantic search feature">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          {/* Left: Content */}
          <div className="space-y-7 reveal">
            <div>
              <p className="text-[11px] font-semibold tracking-[0.2em] uppercase text-[#2563EB] mb-4">Semantic Search</p>
              <h2 className="font-display font-bold tracking-tight text-[#111827] mb-5"
                  style={{ fontSize: 'clamp(32px, 4.5vw, 52px)', lineHeight: '1.1' }}>
                Search by meaning,<br />not just keywords.
              </h2>
              <p className="text-[#475569] text-lg leading-relaxed">
                Can't remember the exact phrase? Prescron uses local vector search to find documents based on what you mean, not just the exact words you typed.
              </p>
            </div>

            <div className="space-y-4">
              <div className="p-5 rounded-2xl bg-white border border-[#E2E8F4] hover:border-[#2563EB]/40 transition-colors group">
                <p className="text-xs font-semibold uppercase tracking-wider text-[#8898aa] mb-2">You search for:</p>
                <div className="flex items-center gap-3 bg-[#F7F9FC] p-3 rounded-lg border border-[#E2E8F4]">
                  <svg className="w-4 h-4 text-[#475569]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                  </svg>
                  <span className="text-[#111827] font-medium text-sm">When does my passport expire?</span>
                </div>
              </div>
              
              <div className="p-5 rounded-2xl bg-[#2563EB]/5 border border-[#2563EB]/20 hover:border-[#2563EB]/40 transition-colors">
                <p className="text-xs font-semibold uppercase tracking-wider text-[#2563EB] mb-2">Prescron finds:</p>
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded bg-[#2563EB]/10 flex items-center justify-center flex-shrink-0 text-[#2563EB]">
                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                    </svg>
                  </div>
                  <div>
                    <p className="font-semibold text-[#111827] text-sm mb-1">passport_scan.pdf</p>
                    <p className="text-xs text-[#475569] bg-white p-2 border border-[#E2E8F4] rounded">
                      ... Date of Expiry: <span className="font-bold text-[#2563EB] bg-[#2563EB]/10 px-1 rounded">04 Nov 2031</span> ...
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right: Mock Search UI replacing PhoneFrame if no good asset, wait we don't have a search specific one but sel2 has a search bar. We'll use sel2 inside PhoneFrame. */}
          <div className="reveal reveal-delay-2">
            <div className="relative">
              <div className="absolute -inset-12 rounded-3xl opacity-20 blur-3xl pointer-events-none"
                   style={{ background: 'radial-gradient(ellipse, #2563EB 0%, transparent 70%)' }}
                   aria-hidden="true" />
              <PhoneFrame>
                <img
                  src="/assets/sel2.png"
                  alt="Prescron home dashboard showing search bar"
                  className="w-full block"
                  loading="lazy"
                />
              </PhoneFrame>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

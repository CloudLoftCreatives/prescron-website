const steps = [
  { num: '01', title: 'Import', desc: 'Add a PDF, image, or scanned document to your private vault.', icon: <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12" /></svg> },
  { num: '02', title: 'Understand', desc: 'Prescron processes the document on your device - extracting information, building a searchable index, and identifying important dates.', icon: <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" /></svg> },
  { num: '03', title: 'Ask', desc: 'Ask questions in plain language. Get answers pulled directly from inside your document.', icon: <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" /></svg> },
  { num: '04', title: 'Find', desc: 'Search your vault by meaning, topic, or question - across all your documents.', icon: <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg> },
]

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="py-24 lg:py-32 bg-white" aria-label="How Prescron works">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Heading */}
        <div className="mb-16 reveal">
          <p className="text-[11px] font-semibold tracking-[0.2em] uppercase text-[#2563EB] mb-4">The Process</p>
          <h2 className="font-display font-bold tracking-tight text-[#111827]"
              style={{ fontSize: 'clamp(32px, 4.5vw, 52px)', lineHeight: '1.1' }}>
            From document<br />to answer in seconds.
          </h2>
        </div>

        {/* Steps - editorial horizontal layout */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-6">
          {steps.map((step, i) => (
            <div key={step.num} className={`reveal reveal-delay-${i + 1}`}>
              <div className="flex items-start gap-4 mb-4">
                <span className="text-[11px] font-bold tracking-[0.1em] uppercase text-[#8898aa] pt-0.5">{step.num}</span>
                <div
                  className="w-px self-stretch"
                  style={{
                    background: `linear-gradient(180deg, #2563EB 0%, #20C997 100%)`,
                    opacity: 0.4,
                    marginTop: '2px',
                  }}
                  aria-hidden="true"
                />
              </div>
              <div className="mb-4 text-[#2563EB]">{step.icon}</div>
              <h3 className="font-display font-bold text-[#111827] text-lg mb-2">{step.title}</h3>
              <p className="text-[#475569] text-sm leading-relaxed">{step.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

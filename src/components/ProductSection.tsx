const workflow = [
  { step: 'Import', icon: <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12" /></svg>, desc: 'Add any PDF, image, or document to your personal vault.' },
  { step: 'Understand', icon: <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>, desc: 'Prescron processes and indexes the document locally on your device.' },
  { step: 'Search', icon: <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>, desc: 'Find information by meaning, not just keywords.' },
  { step: 'Ask', icon: <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" /></svg>, desc: 'Ask natural-language questions and get document-grounded answers.' },
  { step: 'Organize', icon: <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z" /></svg>, desc: 'Categorize documents into your private, structured vault.' },
  { step: 'Remember', icon: <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" /></svg>, desc: 'Never miss key dates - expiry, renewals, deadlines.' },
]

export default function ProductSection() {
  return (
    <section id="features" className="py-24 lg:py-32 bg-white" aria-label="Product features overview">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Heading */}
        <div className="max-w-2xl mb-16 reveal">
          <p className="text-[11px] font-semibold tracking-[0.2em] uppercase text-[#20C997] mb-4">What Prescron Does</p>
          <h2 className="font-display font-bold tracking-tight text-[#111827] mb-5"
              style={{ fontSize: 'clamp(32px, 4.5vw, 52px)', lineHeight: '1.1' }}>
            More than a<br />document folder.
          </h2>
          <p className="text-[#475569] text-lg leading-relaxed">
            Prescron turns your documents into a private, searchable knowledge vault. Import, understand, find, and ask - all on your device.
          </p>
        </div>

        {/* Workflow grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-6">
          {workflow.map((item, i) => (
            <div key={item.step} className={`reveal reveal-delay-${(i % 5) + 1}`}>
              <div className="mb-4 text-[#20C997]">
                {item.icon}
              </div>
              <div className="text-[10px] font-bold tracking-[0.15em] uppercase text-[#8898aa] mb-1">
                0{i + 1}
              </div>
              <h3 className="font-display font-bold text-[#111827] text-sm mb-1.5">{item.step}</h3>
              <p className="text-[#475569] text-xs leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

const useCases = [
  { title: 'Passports & IDs', desc: 'Keep identity documents organized and searchable. Know your expiry dates before you need them.' },
  { title: 'Insurance', desc: 'Find policy information, coverage details, and important dates without sifting through pages.' },
  { title: 'Medical Documents', desc: 'Quickly locate information inside reports, prescriptions, and health records.' },
  { title: 'Financial Documents', desc: 'Search receipts, statements, invoices, and records without leaving the app.' },
  { title: 'Legal Documents', desc: 'Find clauses, dates, names, and relevant information inside contracts and agreements.' },
  { title: 'Personal Records', desc: 'Keep important personal documents accessible and organized in your private vault.' },
]

export default function UseCases() {
  return (
    <section className="py-24 lg:py-32 bg-white" aria-label="Use cases">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Heading */}
        <div className="max-w-2xl mb-16 reveal">
          <p className="text-[11px] font-semibold tracking-[0.2em] uppercase text-[#2563EB] mb-4">Use Cases</p>
          <h2 className="font-display font-bold tracking-tight text-[#111827] mb-5"
              style={{ fontSize: 'clamp(32px, 4.5vw, 52px)', lineHeight: '1.1' }}>
            One vault.<br />Many important documents.
          </h2>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {useCases.map((uc, i) => (
            <div key={uc.title}
                 className={`p-8 rounded-2xl bg-[#F7F9FC] border border-[#E2E8F4] hover:border-[#2563EB]/30 hover:shadow-[0_8px_24px_rgba(37,99,235,0.08)] transition-all duration-300 reveal reveal-delay-${(i % 5) + 1}`}>
              <h3 className="font-display font-bold text-[#111827] text-[17px] mb-3">{uc.title}</h3>
              <p className="text-[#475569] text-sm leading-relaxed">{uc.desc}</p>
            </div>
          ))}
        </div>

        {/* Disclaimer */}
        <div className="mt-16 reveal">
          <p className="text-xs text-[#8898aa] max-w-2xl">
            Prescron helps you find and understand information. It does not replace professional
            legal, financial, or medical advice.
          </p>
        </div>
      </div>
    </section>
  )
}

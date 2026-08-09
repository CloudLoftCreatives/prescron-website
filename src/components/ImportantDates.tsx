import PhoneFrame from './PhoneFrame'

const dateCards = [
  { doc: 'Passport', type: 'Government ID', date: 'Expires Nov 04, 2031', label: '5 years', status: 'good' },
  { doc: "Driver's Licence", type: 'Government ID', date: 'Expires Nov 21, 2042', label: '17 years', status: 'good' },
  { doc: 'Health Insurance', type: 'Insurance', date: 'Renews Soon', label: 'Upcoming', status: 'warning' },
  { doc: 'Vehicle Insurance', type: 'Insurance', date: 'Expired Jan 2026', label: 'Expired', status: 'expired' },
]

const statusColors: Record<string, string> = {
  good: 'text-[#20C997] bg-emerald-50',
  warning: 'text-amber-600 bg-amber-50',
  expired: 'text-red-600 bg-red-50',
}

const statusBorder: Record<string, string> = {
  good: 'border-emerald-500',
  warning: 'border-amber-500',
  expired: 'border-red-500',
}

export default function ImportantDates() {
  return (
    <section className="py-24 lg:py-32 bg-white" aria-label="Important document dates feature">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          {/* Left: Screenshot */}
          <div className="reveal">
            <div className="relative">
              <div className="absolute -inset-12 rounded-3xl opacity-20 blur-3xl pointer-events-none"
                   style={{ background: 'radial-gradient(ellipse, #f59e0b 0%, transparent 70%)' }}
                   aria-hidden="true" />
              <PhoneFrame className="max-w-[460px] lg:max-w-[520px]">
                <img
                  src="/assets/6.png"
                  alt="Prescron home dashboard showing Upcoming Important Dates"
                  className="w-full block"
                  loading="lazy"
                />
              </PhoneFrame>
            </div>
          </div>

          {/* Right: Content + date cards */}
          <div className="space-y-7 reveal reveal-delay-2">
            <div>
              <p className="text-[11px] font-semibold tracking-[0.2em] uppercase text-amber-600 mb-4">Important Dates</p>
              <h2 className="font-display font-bold tracking-tight text-[#111827] mb-5"
                  style={{ fontSize: 'clamp(32px, 4.5vw, 52px)', lineHeight: '1.1' }}>
                Never miss an<br />important date.
              </h2>
              <p className="text-[#475569] text-lg leading-relaxed">
                Prescron surfaces key dates from your documents automatically - expiry dates, renewals,
                deadlines - so you always know what's coming up.
              </p>
            </div>

            {/* Date cards */}
            <div className="space-y-2.5">
              {dateCards.map((card) => (
                <div key={card.doc}
                     className={`flex items-center gap-4 p-4 rounded-xl bg-[#F7F9FC] border-l-4 border-y border-r border-[#E2E8F4] hover:shadow-sm transition-all ${statusBorder[card.status]}`}>
                  <div className="flex-1 min-w-0">
                    <p className="font-semibold text-sm text-[#111827] truncate">{card.doc}</p>
                    <p className="text-xs text-[#8898aa]">{card.type} • {card.date}</p>
                  </div>
                  <span className={`text-xs font-semibold px-2.5 py-1 rounded-full flex-shrink-0 ${statusColors[card.status]}`}>
                    {card.label}
                  </span>
                </div>
              ))}
            </div>

            <p className="text-xs text-[#8898aa] italic">
              Date detection may not identify every date in every document. Always verify deadlines against the original.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

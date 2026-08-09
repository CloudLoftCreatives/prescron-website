const trustItems = [
  {
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 10.5V6.75a4.5 4.5 0 10-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 002.25-2.25v-6.75a2.25 2.25 0 00-2.25-2.25H6.75a2.25 2.25 0 00-2.25 2.25v6.75a2.25 2.25 0 002.25 2.25z" />
      </svg>
    ),
    title: 'Private by Design',
    description: 'Your documents stay under your control.',
    accent: '#2563EB',
    bg: '#EFF6FF',
  },
  {
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 1.5H8.25A2.25 2.25 0 006 3.75v16.5a2.25 2.25 0 002.25 2.25h7.5A2.25 2.25 0 0018 20.25V3.75a2.25 2.25 0 00-2.25-2.25H13.5m-3 0V3h3V1.5m-3 0h3m-3 8.25h3m-3 3h3m-3 3h3" />
      </svg>
    ),
    title: 'On-Device',
    description: 'Core document intelligence runs locally on the device.',
    accent: '#20C997',
    bg: '#F0FDF9',
  },
  {
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M18.364 5.636a9 9 0 010 12.728M5.636 5.636a9 9 0 000 12.728M12 12h.01" />
        <line x1="4" y1="4" x2="20" y2="20" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" />
      </svg>
    ),
    title: 'Works Offline',
    description: 'Access your vault without depending on an internet connection.',
    accent: '#7C3AED',
    bg: '#F5F3FF',
  },
  {
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09z" />
      </svg>
    ),
    title: 'AI-Powered',
    description: 'Understand documents using local AI and intelligent search.',
    accent: '#D97706',
    bg: '#FFFBEB',
  },
]

export default function TrustBar() {
  return (
    <section className="py-16 bg-white border-b border-[#E2E8F4]" aria-label="Key product values">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-px bg-[#E2E8F4] rounded-2xl overflow-hidden border border-[#E2E8F4]">
          {trustItems.map((item, i) => (
            <div
              key={item.title}
              className={`bg-white p-6 lg:p-8 reveal reveal-delay-${i + 1}`}
            >
              <div className="w-10 h-10 rounded-xl flex items-center justify-center mb-4 flex-shrink-0"
                   style={{ background: item.bg, color: item.accent }}>
                {item.icon}
              </div>
              <h3 className="font-display font-semibold text-[#111827] text-sm mb-1.5">{item.title}</h3>
              <p className="text-[#475569] text-xs leading-relaxed">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

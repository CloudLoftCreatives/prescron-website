const aiFlowSteps = [
  { label: 'Your Document', desc: 'PDF, image, or scan' },
  { label: 'On-Device Processing', desc: 'AI runs locally' },
  { label: 'Local Knowledge', desc: 'Indexed on your device' },
  { label: 'Your Answer', desc: 'Private, grounded response' },
]

export default function AISection() {
  return (
    <section className="py-24 lg:py-32 bg-white" aria-label="Local AI processing">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="max-w-3xl mb-16 reveal">
          <p className="text-[11px] font-semibold tracking-[0.2em] uppercase text-[#2563EB] mb-4">On-Device AI</p>
          <h2 className="font-display font-bold tracking-tight text-[#111827] mb-5"
              style={{ fontSize: 'clamp(32px, 4.5vw, 52px)', lineHeight: '1.1' }}>
            Private AI, running<br />where your data lives.
          </h2>
          <p className="text-[#475569] text-lg leading-relaxed max-w-2xl">
            Unlike cloud AI services that process your documents on remote servers,
            Prescron is designed to bring AI processing directly to your device.
          </p>
        </div>

        {/* Flow visualization */}
        <div className="reveal reveal-delay-2">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 sm:gap-4 p-8 sm:p-10 rounded-3xl bg-[#F7F9FC] border border-[#E2E8F4]">
            {aiFlowSteps.map((step, i) => (
              <div key={step.label} className="flex flex-row sm:flex-col items-center sm:items-start gap-4 sm:gap-5 w-full sm:w-auto relative">
                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-white border border-[#E2E8F4] flex items-center justify-center shadow-sm z-10 relative">
                  <span className="text-xs font-bold text-[#111827]" aria-hidden="true">{i + 1}</span>
                </div>
                
                {/* Horizontal line connector for desktop */}
                {i < aiFlowSteps.length - 1 && (
                  <div className="hidden sm:block absolute top-4 left-8 w-[calc(100%+32px)] h-px border-t-2 border-dashed border-[#cbd5e1] -z-0" aria-hidden="true" />
                )}
                
                {/* Vertical line connector for mobile */}
                {i < aiFlowSteps.length - 1 && (
                  <div className="sm:hidden absolute top-8 left-4 w-px h-6 border-l-2 border-dashed border-[#cbd5e1] -z-0" aria-hidden="true" />
                )}

                <div className="text-left">
                  <p className="font-display font-bold text-[#111827] text-[15px] mb-1">{step.label}</p>
                  <p className="text-[#8898aa] text-xs">{step.desc}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Highlight card */}
          <div className="mt-8 p-8 rounded-2xl bg-[#0B1220] border border-[#1e293b]">
            <div className="flex flex-col sm:flex-row items-start gap-6">
              <div className="w-12 h-12 rounded-xl bg-[#20C997]/10 flex items-center justify-center flex-shrink-0">
                <svg className="w-6 h-6 text-[#20C997]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5} aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
                </svg>
              </div>
              <div>
                <h3 className="font-display font-bold text-white text-[17px] mb-2">The privacy advantage of on-device AI</h3>
                <p className="text-white/60 text-[15px] leading-relaxed max-w-3xl">
                  When AI runs on your device, your documents never need to be transmitted to a remote AI service for core
                  document intelligence. This means your sensitive identity documents, medical records, financial data,
                  and legal documents can be processed privately.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

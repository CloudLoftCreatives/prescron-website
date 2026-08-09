import PhoneFrame from './PhoneFrame'

export default function SecuritySection() {
  return (
    <section className="py-24 lg:py-32 bg-[#F7F9FC]" aria-label="Security features">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          {/* Left: Content */}
          <div className="space-y-7 reveal">
            <div>
              <p className="text-[11px] font-semibold tracking-[0.2em] uppercase text-[#2563EB] mb-4">Security</p>
              <h2 className="font-display font-bold tracking-tight text-[#111827] mb-5"
                  style={{ fontSize: 'clamp(32px, 4.5vw, 52px)', lineHeight: '1.1' }}>
                Built for documents<br />you don't want exposed.
              </h2>
              <p className="text-[#475569] text-lg leading-relaxed">
                Prescron includes App Lock an extra protection layer that requires your
                device authentication before the app can be opened.
              </p>
            </div>

            {/* App Lock card */}
            <div className="p-6 rounded-2xl border border-[#E2E8F4] bg-white space-y-5">
              <div className="flex items-center gap-3">
                <div className="w-11 h-11 rounded-xl bg-[#0B1220] flex items-center justify-center">
                  <svg className="w-5 h-5 text-[#20C997]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5} aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 10.5V6.75a4.5 4.5 0 10-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 002.25-2.25v-6.75a2.25 2.25 0 00-2.25-2.25H6.75a2.25 2.25 0 00-2.25 2.25v6.75a2.25 2.25 0 002.25 2.25z" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-display font-bold text-[#111827] text-[15px]">App Lock</h3>
                  <p className="text-[#8898aa] text-xs">Require device authentication to open Prescron</p>
                </div>
              </div>

              <div className="grid grid-cols-3 gap-2.5">
                {[{ label: 'Fingerprint' }, { label: 'Face Auth' }, { label: 'Device PIN' }].map((method) => (
                  <div key={method.label}
                       className="flex flex-col items-center justify-center h-12 rounded-xl bg-[#F7F9FC] border border-[#E2E8F4] text-center">
                    <span className="text-xs font-semibold text-[#475569]">{method.label}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="space-y-3">
              {[
                'Documents stay in the app sandbox on your device',
                'Android platform security and app sandboxing',
                'No unnecessary external data transmission for core features',
              ].map((point) => (
                <div key={point} className="flex items-start gap-3">
                  <svg className="w-4 h-4 text-[#20C997] mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5} aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
                  </svg>
                  <span className="text-sm text-[#475569]">{point}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right: About screen screenshot */}
          <div className="reveal reveal-delay-2">
            <div className="relative">
              <div className="absolute -inset-12 rounded-3xl opacity-20 blur-3xl pointer-events-none"
                   style={{ background: 'radial-gradient(ellipse, #0B1220 0%, transparent 70%)' }}
                   aria-hidden="true" />
              <PhoneFrame>
                <img
                  src="/assets/sel1.png"
                  alt="Prescron About screen"
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

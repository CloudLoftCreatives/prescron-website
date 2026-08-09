const privacyCards = [
  {
    icon: <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" /></svg>,
    title: 'LOCAL PROCESSING',
    body: 'Core document intelligence is designed to run on the device - not on a remote AI server. Your documents are processed where they live.',
  },
  {
    icon: <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4" /></svg>,
    title: 'LOCAL STORAGE',
    body: 'Your vault is stored locally. Your documents are not intended to be uploaded to Prescron-operated servers for core functionality.',
  },
  {
    icon: <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 11c0 3.517-1.009 6.799-2.753 9.571m-3.44-2.04l.054-.09A13.916 13.916 0 008 11a4 4 0 118 0c0 1.017-.07 2.019-.203 3m-2.118 6.844A21.88 21.88 0 0015.171 17m3.839 1.132c.645-2.266.99-4.659.99-7.132A8 8 0 008 4.07M3 15.364c.64-1.319 1-2.8 1-4.364 0-1.457.39-2.823 1.07-4" /></svg>,
    title: 'NO ACCOUNT REQUIRED',
    body: 'No sign-up. No profile. No account required to use Prescron\'s core document functionality. Just install and start.',
  },
]

export default function PrivacySection() {
  return (
    <section id="privacy" className="py-24 lg:py-32 bg-[#080c14]" aria-label="Privacy by design">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-start mb-16">
          {/* Left: Heading */}
          <div className="reveal">
            <p className="text-[11px] font-semibold tracking-[0.2em] uppercase text-[#20C997] mb-5">Privacy First</p>
            <h2 className="font-display font-bold text-white tracking-tight mb-6"
                style={{ fontSize: 'clamp(36px, 5vw, 64px)', lineHeight: '1.05' }}>
              Private<br />by design.
            </h2>
            <p className="text-white/40 text-sm leading-relaxed uppercase tracking-widest font-medium">
              Your sensitive documents shouldn't<br />need a trip to the cloud.
            </p>
          </div>

          {/* Right: Body */}
          <div className="reveal reveal-delay-2 pt-0 lg:pt-14">
            <p className="text-white/60 text-lg leading-relaxed mb-6">
              Prescron is designed around local-first document processing. Your documents
              and document-derived information are processed and stored on your device for
              the app's core functionality.
            </p>
            <div className="inline-flex items-center gap-2.5 text-sm text-white/40">
              <svg className="w-4 h-4 text-[#20C997]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
              </svg>
              No advertising. No selling your data.
            </div>
          </div>
        </div>

        {/* Privacy cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {privacyCards.map((card, i) => (
            <div key={card.title}
                 className={`p-7 rounded-2xl border border-white/8 bg-white/[0.03] hover:bg-white/[0.06] transition-all duration-300 reveal reveal-delay-${i + 1}`}>
              <div className="mb-5 text-[#20C997]">{card.icon}</div>
              <h3 className="font-display font-bold text-[10px] tracking-[0.18em] uppercase text-[#20C997] mb-3">{card.title}</h3>
              <p className="text-white/50 text-sm leading-relaxed">{card.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

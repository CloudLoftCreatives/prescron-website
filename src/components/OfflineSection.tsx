export default function OfflineSection() {
  return (
    <section className="py-24 lg:py-32 bg-[#080c14] relative overflow-hidden" aria-label="Offline functionality">
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] opacity-10 blur-3xl rounded-full"
             style={{ background: 'radial-gradient(ellipse, #20C997 0%, transparent 70%)' }} />
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          {/* Left: Content */}
          <div className="space-y-7 reveal">
            <div>
              <p className="text-[11px] font-semibold tracking-[0.2em] uppercase text-[#20C997] mb-5">Always Available</p>
              <h2 className="font-display font-bold text-white tracking-tight mb-6"
                  style={{ fontSize: 'clamp(36px, 5vw, 60px)', lineHeight: '1.05' }}>
                Your vault doesn't<br />need the internet.
              </h2>
              <p className="text-white/55 text-lg leading-relaxed">
                Core document processing, searching, and question-answering are designed
                to work directly on your device - even when you're offline.
              </p>
            </div>

            <p className="text-white/35 text-sm leading-relaxed">
              Core document intelligence works on-device. Downloading the app and updates requires internet access.
            </p>
          </div>

          {/* Right: Cloud vs Device visual */}
          <div className="reveal reveal-delay-2">
            <div className="grid grid-cols-2 gap-4">
              {/* Cloud - crossed */}
              <div className="p-6 rounded-2xl bg-white/[0.03] border border-white/8 flex flex-col items-center gap-4 opacity-35">
                <div className="relative">
                  <svg className="w-12 h-12 text-slate-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5} aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 15a4.5 4.5 0 004.5 4.5H18a3.75 3.75 0 001.332-7.257 3 3 0 00-3.758-3.848 5.25 5.25 0 00-10.233 2.33A4.502 4.502 0 002.25 15z" />
                  </svg>
                  <svg className="w-16 h-16 text-red-500 absolute -inset-2" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </div>
                <div className="text-center">
                  <p className="text-white/60 text-xs font-semibold uppercase tracking-wide">Cloud AI</p>
                  <p className="text-white/30 text-[10px] mt-1">Documents leave your device</p>
                </div>
              </div>

              {/* Device - highlighted */}
              <div className="p-6 rounded-2xl bg-[#20C997]/10 border border-[#20C997]/30 flex flex-col items-center gap-4">
                <svg className="w-12 h-12 text-[#20C997]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5} aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 1.5H8.25A2.25 2.25 0 006 3.75v16.5a2.25 2.25 0 002.25 2.25h7.5A2.25 2.25 0 0018 20.25V3.75a2.25 2.25 0 00-2.25-2.25H13.5m-3 0V3h3V1.5m-3 0h3m-3 8.25h3m-3 3h3m-3 3h3" />
                </svg>
                <div className="text-center">
                  <p className="text-[#20C997] text-xs font-semibold uppercase tracking-wide">Your Device</p>
                  <p className="text-white/50 text-[10px] mt-1">AI runs locally, privately</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

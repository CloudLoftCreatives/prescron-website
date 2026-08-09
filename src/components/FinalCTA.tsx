const GOOGLE_PLAY_URL = '/early-access'

export default function FinalCTA() {
  return (
    <section className="py-24 lg:py-36 bg-[#080c14] relative overflow-hidden" aria-label="Final call to action">
      {/* Background glow */}
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        <div className="absolute bottom-0 left-0 w-[600px] h-[400px] opacity-20 blur-[120px] rounded-full"
             style={{ background: 'radial-gradient(ellipse, #2563EB 0%, transparent 60%)' }} />
        <div className="absolute top-0 right-0 w-[400px] h-[300px] opacity-15 blur-[100px] rounded-full"
             style={{ background: 'radial-gradient(ellipse, #20C997 0%, transparent 60%)' }} />
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-[11px] font-semibold tracking-[0.2em] uppercase text-[#20C997] mb-6">Get Started</p>
          <h2 className="font-display font-bold text-white tracking-tight leading-[1.02] mb-8"
              style={{ fontSize: 'clamp(40px, 7vw, 80px)' }}>
            Your documents<br />
            deserve a private home.
          </h2>
          <p className="text-white/50 text-lg leading-relaxed mb-10 max-w-xl mx-auto">
            Store them. Understand them. Ask them. Keep them with you.
          </p>

          <div className="flex flex-wrap justify-center gap-4 items-center">
            <a
              href={GOOGLE_PLAY_URL}
              id="final-get-prescron-cta"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3.5 bg-white hover:bg-white/90 text-[#111827] font-semibold px-6 py-3.5 rounded-xl transition-all duration-200 hover:shadow-xl hover:-translate-y-0.5"
            >
              {/* Play Store icon */}
              <svg viewBox="0 0 24 24" className="w-5 h-5 flex-shrink-0" aria-hidden="true">
                <defs>
                  <linearGradient id="fgp1" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#00C6FF"/><stop offset="100%" stopColor="#0072FF"/>
                  </linearGradient>
                  <linearGradient id="fgp2" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#FF3F6C"/><stop offset="100%" stopColor="#FF8C00"/>
                  </linearGradient>
                  <linearGradient id="fgp3" x1="0%" y1="100%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="#00E676"/><stop offset="100%" stopColor="#69F0AE"/>
                  </linearGradient>
                  <linearGradient id="fgp4" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#FFD740"/><stop offset="100%" stopColor="#FF6D00"/>
                  </linearGradient>
                </defs>
                <path fill="url(#fgp1)" d="M3.18 1.64A2 2 0 002 3.5v17a2 2 0 001.18 1.86l.06.03 9.53-9.53v-.22L3.24 3.61l-.06.03z"/>
                <path fill="url(#fgp4)" d="M15.92 15.97l-3.15-3.15v-.23l3.15-3.15.07.04 3.73 2.12c1.07.6 1.07 1.59 0 2.2l-3.73 2.12-.07.05z"/>
                <path fill="url(#fgp2)" d="M15.99 15.92l-3.22-3.22-9.59 9.59A2.24 2.24 0 004.8 22c.6 0 1.2-.23 1.65-.67l9.54-5.41z"/>
                <path fill="url(#fgp3)" d="M15.99 8.08L6.45 2.67A2.27 2.27 0 004.8 2c-.62 0-1.2.23-1.62.66l9.59 9.6 3.22-3.18z"/>
              </svg>
              <div className="flex flex-col items-start leading-none -mt-0.5">
                <span className="text-[10px] uppercase font-bold tracking-wider opacity-80">Get it on</span>
                <span className="text-[15px] font-bold">Google Play</span>
              </div>
            </a>

            <a
              href="#privacy"
              id="final-learn-privacy-cta"
              className="inline-flex items-center gap-2 text-white/50 hover:text-white/80 text-sm transition-colors"
              onClick={(e) => {
                e.preventDefault()
                document.querySelector('#privacy')?.scrollIntoView({ behavior: 'smooth' })
              }}
            >
              Privacy model
              <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
              </svg>
            </a>
          </div>
        </div>


      </div>
    </section>
  )
}

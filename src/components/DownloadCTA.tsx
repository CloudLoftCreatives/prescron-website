const GOOGLE_PLAY_URL = 'GOOGLE_PLAY_URL'

function GooglePlayBadgeLarge() {
  return (
    <a
      href={GOOGLE_PLAY_URL}
      id="google-play-badge-link"
      target="_blank"
      rel="noopener noreferrer"
      className="inline-flex items-center gap-4 bg-[#0d0d0d] hover:bg-[#1a1a1a] text-white px-7 py-4 rounded-2xl transition-all duration-200 hover:shadow-2xl hover:-translate-y-0.5"
      aria-label="Get Prescron on Google Play"
    >
      <svg viewBox="0 0 24 24" className="w-8 h-8 flex-shrink-0" aria-hidden="true">
        <defs>
          <linearGradient id="dlgp1" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#00C6FF"/><stop offset="100%" stopColor="#0072FF"/>
          </linearGradient>
          <linearGradient id="dlgp2" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#FF3F6C"/><stop offset="100%" stopColor="#FF8C00"/>
          </linearGradient>
          <linearGradient id="dlgp3" x1="0%" y1="100%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#00E676"/><stop offset="100%" stopColor="#69F0AE"/>
          </linearGradient>
          <linearGradient id="dlgp4" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#FFD740"/><stop offset="100%" stopColor="#FF6D00"/>
          </linearGradient>
        </defs>
        <path fill="url(#dlgp1)" d="M3.18 1.64A2 2 0 002 3.5v17a2 2 0 001.18 1.86l.06.03 9.53-9.53v-.22L3.24 3.61l-.06.03z"/>
        <path fill="url(#dlgp4)" d="M15.92 15.97l-3.15-3.15v-.23l3.15-3.15.07.04 3.73 2.12c1.07.6 1.07 1.59 0 2.2l-3.73 2.12-.07.05z"/>
        <path fill="url(#dlgp2)" d="M15.99 15.92l-3.22-3.22-9.59 9.59A2.24 2.24 0 004.8 22c.6 0 1.2-.23 1.65-.67l9.54-5.41z"/>
        <path fill="url(#dlgp3)" d="M15.99 8.08L6.45 2.67A2.27 2.27 0 004.8 2c-.62 0-1.2.23-1.62.66l9.59 9.6 3.22-3.18z"/>
      </svg>
      <div className="flex flex-col items-start justify-center ml-1">
        <div className="text-[10px] text-white/70 leading-none uppercase tracking-[0.12em] mb-[3px]">Get it on</div>
        <div className="text-xl font-semibold tracking-tight leading-none">Google Play</div>
      </div>
    </a>
  )
}

export default function DownloadCTA() {
  return (
    <section id="google-play" className="py-24 lg:py-32 bg-white" aria-label="Download Prescron">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="max-w-xl reveal">
          <p className="text-[11px] font-semibold tracking-[0.2em] uppercase text-[#2563EB] mb-5">Get the App</p>
          <h2 className="font-display font-bold tracking-tight text-[#111827] mb-5"
              style={{ fontSize: 'clamp(32px, 4.5vw, 52px)', lineHeight: '1.1' }}>
            Get Prescron<br />on Android.
          </h2>
          <p className="text-[#475569] text-lg leading-relaxed mb-8">
            Free to download. Private by design. Android-first.
          </p>
          <GooglePlayBadgeLarge />
        </div>
      </div>
    </section>
  )
}

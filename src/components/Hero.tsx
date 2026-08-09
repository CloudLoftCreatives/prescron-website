import { useRef, useEffect } from 'react'

const GOOGLE_PLAY_URL = 'GOOGLE_PLAY_URL'

function GooglePlayBadge({ className = '' }: { className?: string }) {
  return (
    <a
      href={GOOGLE_PLAY_URL}
      className={`inline-flex items-center gap-3.5 bg-[#0d0d0d] hover:bg-[#1a1a1a] text-white px-5 py-3 rounded-xl transition-all duration-200 hover:shadow-xl hover:-translate-y-0.5 ${className}`}
      aria-label="Get Prescron on Google Play"
    >
      {/* Official Play Store triangle icon */}
      <svg viewBox="0 0 24 24" className="w-6 h-6 flex-shrink-0" aria-hidden="true">
        <defs>
          <linearGradient id="gp1" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#00C6FF"/>
            <stop offset="100%" stopColor="#0072FF"/>
          </linearGradient>
          <linearGradient id="gp2" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#FF3F6C"/>
            <stop offset="100%" stopColor="#FF8C00"/>
          </linearGradient>
          <linearGradient id="gp3" x1="0%" y1="100%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#00E676"/>
            <stop offset="100%" stopColor="#69F0AE"/>
          </linearGradient>
          <linearGradient id="gp4" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#FFD740"/>
            <stop offset="100%" stopColor="#FF6D00"/>
          </linearGradient>
        </defs>
        <path fill="url(#gp1)" d="M3.18 1.64A2 2 0 002 3.5v17a2 2 0 001.18 1.86l.06.03 9.53-9.53v-.22L3.24 3.61l-.06.03z"/>
        <path fill="url(#gp4)" d="M15.92 15.97l-3.15-3.15v-.23l3.15-3.15.07.04 3.73 2.12c1.07.6 1.07 1.59 0 2.2l-3.73 2.12-.07.05z"/>
        <path fill="url(#gp2)" d="M15.99 15.92l-3.22-3.22-9.59 9.59A2.24 2.24 0 004.8 22c.6 0 1.2-.23 1.65-.67l9.54-5.41z"/>
        <path fill="url(#gp3)" d="M15.99 8.08L6.45 2.67A2.27 2.27 0 004.8 2c-.62 0-1.2.23-1.62.66l9.59 9.6 3.22-3.18z"/>
      </svg>
      <div className="flex flex-col items-start justify-center ml-0.5">
        <div className="text-[9px] text-white/70 leading-none uppercase tracking-[0.1em] mb-[3px]">Get it on</div>
        <div className="text-[16px] font-semibold leading-none tracking-tight">Google Play</div>
      </div>
    </a>
  )
}

export default function Hero() {
  const videoRef = useRef<HTMLVideoElement>(null)

  useEffect(() => {
    const video = videoRef.current
    if (!video) return
    video.play().catch(() => {})
  }, [])

  const scrollToHowItWorks = () => {
    document.querySelector('#how-it-works')?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center overflow-hidden bg-[#080c14]"
      aria-label="Hero section"
    >
      {/* === FULLSCREEN BACKGROUND VIDEO === */}
      <div className="absolute inset-0 z-0" aria-hidden="true">
        <video
          ref={videoRef}
          id="hero-commercial-video"
          className="absolute inset-0 w-full h-full object-cover"
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
          poster="/assets/prescron-icon.png"
          aria-label="Prescron product commercial video"
        >
          <source src="/assets/prescron-commercial.mp4" type="video/mp4" />
        </video>
        {/* Dark overlay for text legibility */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#080c14]/95 via-[#080c14]/70 to-[#080c14]/20" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#080c14]/80 via-transparent to-[#080c14]/30" />
      </div>

      {/* === HERO CONTENT === */}
      <div className="relative z-10 w-full pt-24 pb-20">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="max-w-2xl">
            {/* Eyebrow */}
            <div className="inline-flex items-center gap-2 mb-8">
              <div className="flex items-center gap-1.5 bg-white/10 backdrop-blur-sm border border-white/15 rounded-full px-4 py-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-[#20C997]" aria-hidden="true" />
                <span className="text-[11px] font-semibold tracking-[0.2em] uppercase text-white/80">Private AI · On-Device</span>
              </div>
            </div>

            {/* Main headline */}
            <h1 className="font-display font-bold text-white leading-[1.02] tracking-[-0.03em] mb-6"
                style={{ fontSize: 'clamp(48px, 7vw, 88px)' }}>
              Your documents.<br />
              <span style={{
                background: 'linear-gradient(135deg, #60a5fa 0%, #34d9ac 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
              }}>
                Your device.
              </span><br />
              Your privacy.
            </h1>

            {/* Subheading */}
            <p className="text-white/65 text-lg lg:text-xl leading-relaxed mb-10 max-w-lg font-light">
              AI that understands your documents. Without sending them to the cloud.
            </p>

            {/* CTAs */}
            <div className="flex flex-wrap items-center gap-4 mb-10">
              <GooglePlayBadge />
              <button
                id="hero-see-how-it-works"
                onClick={scrollToHowItWorks}
                className="inline-flex items-center gap-2 text-white/75 hover:text-white text-sm font-medium transition-colors"
              >
                See how it works
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                </svg>
              </button>
            </div>

            {/* Trust indicators */}
            <div className="flex flex-wrap gap-5">
              {[
                '100% Offline Core Processing',
                'No Cloud AI Required',
                'Encrypted Local Vault',
              ].map((item) => (
                <div key={item} className="flex items-center gap-2 text-sm text-white/50">
                  <svg className="w-3.5 h-3.5 text-[#20C997]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5} aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  {item}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>


    </section>
  )
}

export { GooglePlayBadge }

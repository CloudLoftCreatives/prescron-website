import { Link } from 'react-router-dom'

const GOOGLE_PLAY_URL = 'GOOGLE_PLAY_URL'

export default function Footer() {
  const handleClick = (href: string) => {
    if (href.startsWith('#')) {
      document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <footer className="bg-[#080c14] border-t border-white/6 text-white/40" role="contentinfo">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-14">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-10 mb-14">
          {/* Brand */}
          <div className="lg:col-span-1 xl:col-span-2">
            <Link to="/" onClick={(e) => { e.preventDefault(); handleClick('#root'); }} aria-label="Prescron home" className="block relative h-[86px] w-[340px] mb-8">
              <img src="/assets/prescron-white.png" alt="Prescron" className="absolute inset-0 w-full h-full object-contain object-left opacity-90" />
            </Link>
            <p className="text-white/30 text-xs leading-relaxed max-w-[220px]">
              Your personal, private AI document vault. Understand, search, and ask questions
              about your documents - directly on your device.
            </p>
          </div>

          {/* Product */}
          <div>
            <h3 className="text-white/60 font-semibold text-[10px] uppercase tracking-[0.15em] mb-4">Product</h3>
            <ul className="space-y-2.5">
              {[
                { href: '/features', label: 'Features' },
                { href: '/privacy', label: 'Privacy Model' },
                { href: '/how-it-works', label: 'How It Works' },
                { href: '/screenshots', label: 'Screenshots' },
              ].map((link) => (
                <li key={link.label}>
                  <Link
                    to={link.href}
                    className="text-white/35 hover:text-white/70 transition-colors text-sm"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Support */}
          <div>
            <h3 className="text-white/60 font-semibold text-[10px] uppercase tracking-[0.15em] mb-4">Support</h3>
            <ul className="space-y-2.5">
              <li>
                <Link
                  to="/faq"
                  className="text-white/35 hover:text-white/70 transition-colors text-sm"
                >
                  FAQ
                </Link>
              </li>
              <li>
                <a href="mailto:cloudloftcreatives@gmail.com"
                   className="text-white/35 hover:text-white/70 transition-colors text-sm">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="text-white/60 font-semibold text-[10px] uppercase tracking-[0.15em] mb-4">Legal</h3>
            <ul className="space-y-2.5">
              <li>
                <Link to="/privacy" className="text-white/35 hover:text-white/70 transition-colors text-sm">
                  Privacy Policy
                </Link>
              </li>
            </ul>
            <div className="mt-6">
              <a
                href={GOOGLE_PLAY_URL}
                className="inline-flex items-center gap-2 bg-white/8 hover:bg-white/12 border border-white/10 text-white/60 hover:text-white/80 px-3 py-2 rounded-lg text-xs transition-all"
                target="_blank"
                rel="noopener noreferrer"
              >
                <svg viewBox="0 0 24 24" className="w-3.5 h-3.5" aria-hidden="true">
                  <defs>
                    <linearGradient id="ftgp1" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="#00C6FF"/><stop offset="100%" stopColor="#0072FF"/>
                    </linearGradient>
                    <linearGradient id="ftgp2" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="#FF3F6C"/><stop offset="100%" stopColor="#FF8C00"/>
                    </linearGradient>
                    <linearGradient id="ftgp3" x1="0%" y1="100%" x2="100%" y2="0%">
                      <stop offset="0%" stopColor="#00E676"/><stop offset="100%" stopColor="#69F0AE"/>
                    </linearGradient>
                    <linearGradient id="ftgp4" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="#FFD740"/><stop offset="100%" stopColor="#FF6D00"/>
                    </linearGradient>
                  </defs>
                  <path fill="url(#ftgp1)" d="M3.18 1.64A2 2 0 002 3.5v17a2 2 0 001.18 1.86l.06.03 9.53-9.53v-.22L3.24 3.61l-.06.03z"/>
                  <path fill="url(#ftgp4)" d="M15.92 15.97l-3.15-3.15v-.23l3.15-3.15.07.04 3.73 2.12c1.07.6 1.07 1.59 0 2.2l-3.73 2.12-.07.05z"/>
                  <path fill="url(#ftgp2)" d="M15.99 15.92l-3.22-3.22-9.59 9.59A2.24 2.24 0 004.8 22c.6 0 1.2-.23 1.65-.67l9.54-5.41z"/>
                  <path fill="url(#ftgp3)" d="M15.99 8.08L6.45 2.67A2.27 2.27 0 004.8 2c-.62 0-1.2.23-1.62.66l9.59 9.6 3.22-3.18z"/>
                </svg>
                <div className="flex flex-col items-start leading-none">
                  <span className="text-[8px] uppercase font-bold tracking-wider opacity-80">Get it on</span>
                  <span className="text-[12px] font-bold">Google Play</span>
                </div>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-white/6 pt-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
          <p className="text-white/20 text-xs">© 2026 Prescron. All rights reserved.</p>
          <p className="text-white/15 text-xs tracking-widest uppercase">Private AI · On-Device · Android</p>
        </div>
      </div>
    </footer>
  )
}

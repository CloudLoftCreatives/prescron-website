import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'

const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/features', label: 'Features' },
  { href: '/privacy', label: 'Privacy' },
  { href: '/how-it-works', label: 'How It Works' },
  { href: '/screenshots', label: 'Screenshots' },
  { href: '/blog', label: 'Blog' },
  { href: '/faq', label: 'FAQ' },
]

const GOOGLE_PLAY_URL = '/early-access'

function PlayIcon() {
  return (
    <svg viewBox="0 0 24 24" className="w-4 h-4 flex-shrink-0" aria-hidden="true">
      <defs>
        <linearGradient id="npgp1" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#00C6FF"/><stop offset="100%" stopColor="#0072FF"/>
        </linearGradient>
        <linearGradient id="npgp2" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#FF3F6C"/><stop offset="100%" stopColor="#FF8C00"/>
        </linearGradient>
        <linearGradient id="npgp3" x1="0%" y1="100%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#00E676"/><stop offset="100%" stopColor="#69F0AE"/>
        </linearGradient>
        <linearGradient id="npgp4" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#FFD740"/><stop offset="100%" stopColor="#FF6D00"/>
        </linearGradient>
      </defs>
      <path fill="url(#npgp1)" d="M3.18 1.64A2 2 0 002 3.5v17a2 2 0 001.18 1.86l.06.03 9.53-9.53v-.22L3.24 3.61l-.06.03z"/>
      <path fill="url(#npgp4)" d="M15.92 15.97l-3.15-3.15v-.23l3.15-3.15.07.04 3.73 2.12c1.07.6 1.07 1.59 0 2.2l-3.73 2.12-.07.05z"/>
      <path fill="url(#npgp2)" d="M15.99 15.92l-3.22-3.22-9.59 9.59A2.24 2.24 0 004.8 22c.6 0 1.2-.23 1.65-.67l9.54-5.41z"/>
      <path fill="url(#npgp3)" d="M15.99 8.08L6.45 2.67A2.27 2.27 0 004.8 2c-.62 0-1.2.23-1.62.66l9.59 9.6 3.22-3.18z"/>
    </svg>
  )
}

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const location = useLocation()
  
  // Use light text only if we're exactly on the home page and not scrolled
  // Other pages might have white backgrounds immediately.
  // We will assume other pages have standard white backgrounds.
  const isHome = location.pathname === '/'
  const useDarkText = scrolled || !isHome

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', handleScroll, { passive: true })
    
    // Check initial scroll
    handleScroll()
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Auto-close menu on route change
  useEffect(() => {
    setMenuOpen(false)
    window.scrollTo(0, 0)
  }, [location.pathname])

  return (
    <nav
      role="navigation"
      aria-label="Main navigation"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-400 ${
        useDarkText
          ? 'bg-white/95 backdrop-blur-xl border-b border-black/6 shadow-sm'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-[76px]">
          {/* Logo */}
          <Link to="/" aria-label="Prescron home" className="flex-shrink-0 relative flex items-center h-[86px] w-[340px]">
            <img
              src="/assets/prescron-black.png"
              alt="Prescron"
              className={`object-contain object-left absolute inset-0 w-full h-full transition-all duration-300 ${useDarkText ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}
            />
            {/* White version for dark hero (only on home) */}
            <img
              src="/assets/prescron-white.png"
              alt="Prescron"
              className={`object-contain object-left absolute inset-0 w-full h-full transition-all duration-300 ${useDarkText ? 'opacity-0 pointer-events-none' : 'opacity-100'}`}
            />
          </Link>

          {/* Desktop nav links */}
          <div className="hidden lg:flex items-center gap-1 ml-auto mr-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                to={link.href}
                className={`px-4 py-2 text-sm font-semibold transition-colors rounded-lg ${
                  useDarkText
                    ? 'text-[#475569] hover:text-[#111827] hover:bg-black/5'
                    : 'text-white/80 hover:text-white hover:bg-white/10'
                } ${location.pathname === link.href ? (useDarkText ? 'text-[#111827] bg-black/5' : 'text-white bg-white/10') : ''}`}
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Desktop CTA */}
          <div className="hidden lg:flex items-center">
            <a
              href={GOOGLE_PLAY_URL}
              id="nav-get-prescron-cta"
              target="_blank"
              rel="noopener noreferrer"
              className={`inline-flex items-center gap-2.5 px-4 py-2.5 rounded-lg text-sm font-semibold transition-all duration-200 hover:-translate-y-0.5 ${
                useDarkText
                  ? 'bg-[#111827] text-white hover:bg-[#1f2937] hover:shadow-lg'
                  : 'bg-white/20 backdrop-blur-sm text-white border border-white/30 hover:bg-white/30 hover:shadow-lg'
              }`}
            >
              <PlayIcon />
              <div className="flex flex-col items-start leading-none -mt-0.5">
                <span className="text-[9px] uppercase font-bold tracking-wider opacity-80">Get it on</span>
                <span className="text-[13px] font-bold">Google Play</span>
              </div>
            </a>
          </div>

          {/* Mobile hamburger */}
          <button
            className={`lg:hidden p-2 rounded-lg transition-colors ${
              useDarkText
                ? 'text-[#475569] hover:text-[#111827] hover:bg-black/5'
                : 'text-white hover:bg-white/10'
            }`}
            onClick={() => setMenuOpen(!menuOpen)}
            aria-expanded={menuOpen}
            aria-label="Toggle navigation menu"
          >
            <div className="w-5 flex flex-col gap-[5px]">
              <span className={`block h-[1.5px] bg-current transition-all duration-200 ${menuOpen ? 'rotate-45 translate-y-[6.5px]' : ''}`} />
              <span className={`block h-[1.5px] bg-current transition-all duration-200 ${menuOpen ? 'opacity-0' : ''}`} />
              <span className={`block h-[1.5px] bg-current transition-all duration-200 ${menuOpen ? '-rotate-45 -translate-y-[6.5px]' : ''}`} />
            </div>
          </button>
        </div>

        {/* Mobile menu */}
        {menuOpen && (
          <div className="lg:hidden bg-white border-t border-black/6 py-3 px-2 shadow-xl absolute left-0 right-0 top-full">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                to={link.href}
                className={`block w-full text-left px-4 py-3 text-sm font-bold rounded-xl transition-colors ${
                  location.pathname === link.href ? 'text-[#111827] bg-[#F7F9FC]' : 'text-[#475569] hover:text-[#111827] hover:bg-[#F7F9FC]'
                }`}
              >
                {link.label}
              </Link>
            ))}
            <a
              href={GOOGLE_PLAY_URL}
              id="mobile-get-prescron-cta"
              className="flex items-center justify-center gap-2.5 mt-4 mx-2 bg-[#111827] text-white px-4 py-3.5 rounded-xl text-sm font-semibold"
            >
              <PlayIcon />
              <div className="flex flex-col items-start leading-none -mt-0.5">
                <span className="text-[9px] uppercase font-bold tracking-wider opacity-80">Get it on</span>
                <span className="text-[14px] font-bold">Google Play</span>
              </div>
            </a>
          </div>
        )}
      </div>
    </nav>
  )
}

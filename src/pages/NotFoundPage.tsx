import { Link } from 'react-router-dom'

export default function NotFoundPage() {
  return (
    <div className="min-h-screen bg-[#080c14] flex items-center justify-center px-6 py-24">
      <div className="max-w-xl mx-auto text-center">
        <div className="w-24 h-24 bg-[#20C997]/10 rounded-3xl flex items-center justify-center mx-auto mb-8 border border-[#20C997]/20 shadow-[0_0_40px_rgba(32,201,151,0.15)]">
          <svg className="w-10 h-10 text-[#20C997]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
        </div>
        
        <h1 className="text-6xl md:text-8xl font-display font-bold text-white tracking-tight mb-6">
          404
        </h1>
        <h2 className="text-2xl md:text-3xl font-display font-semibold text-white/90 mb-4">
          Page Not Found
        </h2>
        <p className="text-white/60 text-lg mb-10 max-w-md mx-auto">
          The page you are looking for doesn't exist or has been moved to another location within the vault.
        </p>
        
        <Link 
          to="/" 
          className="inline-flex items-center gap-2 bg-[#20C997] hover:bg-[#1bb386] text-black px-6 py-3 rounded-full font-semibold transition-all hover:scale-105 active:scale-95"
        >
          <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M10 19l-7-7m0 0l7-7m-7 7h18" />
          </svg>
          Return to Vault
        </Link>
      </div>
    </div>
  )
}

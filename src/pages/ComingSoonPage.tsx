import { Link } from 'react-router-dom'

export default function ComingSoonPage() {
  return (
    <div className="min-h-screen bg-[#080c14] flex items-center justify-center px-6 py-24 relative overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#20C997]/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-2xl mx-auto text-center relative z-10">
        <div className="w-20 h-20 bg-[#20C997]/10 rounded-2xl flex items-center justify-center mx-auto mb-8 border border-[#20C997]/20 shadow-[0_0_30px_rgba(32,201,151,0.15)]">
          <svg className="w-10 h-10 text-[#20C997]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
          </svg>
        </div>
        
        <h1 className="text-5xl md:text-7xl font-display font-bold text-white tracking-tight mb-6">
          Releasing Soon
        </h1>
        <h2 className="text-xl md:text-2xl font-display font-medium text-[#20C997] mb-6">
          The ultimate offline AI vault is almost ready.
        </h2>
        <p className="text-white/60 text-lg mb-10 max-w-lg mx-auto leading-relaxed">
          We are currently fine-tuning the on-device AI models and putting the final polish on the Android application. 
          Prescron will be available on the Google Play Store shortly.
        </p>
        
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link 
            to="/" 
            className="inline-flex items-center gap-2 bg-white/5 hover:bg-white/10 text-white border border-white/10 px-6 py-3 rounded-full font-semibold transition-all"
          >
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
            Back to Home
          </Link>
        </div>
      </div>
    </div>
  )
}

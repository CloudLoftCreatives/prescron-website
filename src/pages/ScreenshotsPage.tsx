import { useEffect } from 'react'
import PhoneFrame from '../components/PhoneFrame'
import { useScrollReveal } from '../hooks/useScrollReveal'

const screenshots = [
  {
    src: '/assets/ss_gallery_1.png',
    title: 'Organized Document Vault',
    desc: 'Instantly view all your categorized documents in one secure, localized hub.'
  },
  {
    src: '/assets/ss_gallery_2.png',
    title: 'Smart Categorization',
    desc: 'Auto-detecting document types and extracting critical metadata instantly.'
  },
  {
    src: '/assets/ss_gallery_3.png',
    title: 'Deep Contextual Q&A',
    desc: 'Ask questions and get answers grounded entirely in your specific document.'
  }
]

export default function ScreenshotsPage() {
  useScrollReveal()

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <div className="pt-24 pb-32 bg-[#080c14] min-h-screen text-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center mb-24 reveal">
          <p className="text-[12px] font-semibold tracking-[0.2em] uppercase text-[#20C997] mb-6">In Action</p>
          <h1 className="font-display font-bold text-white tracking-tight leading-[1.05] mb-8" style={{ fontSize: 'clamp(40px, 6vw, 72px)' }}>
            Real Screenshots
          </h1>
          <p className="text-white/60 text-xl leading-relaxed font-light max-w-2xl mx-auto">
            Take a look inside the Prescron app. No mockups, no fabricated features. Just pure, on-device document intelligence.
          </p>
        </div>

        {/* Gallery */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-16 lg:gap-8 items-start">
          {screenshots.map((ss, i) => (
            <div key={ss.title} className={`flex flex-col items-center text-center reveal reveal-delay-${i + 1}`}>
              <div className="relative mb-10 w-full max-w-[340px] mx-auto">
                {/* Glowing effect */}
                <div className="absolute -inset-8 rounded-3xl opacity-20 blur-2xl pointer-events-none"
                     style={{ background: 'radial-gradient(ellipse, #20C997 0%, transparent 70%)' }}
                     aria-hidden="true" />
                <PhoneFrame>
                  <img src={ss.src} alt={ss.title} className="w-full h-full object-cover" />
                </PhoneFrame>
              </div>
              <h3 className="text-2xl font-display font-bold text-white mb-3">{ss.title}</h3>
              <p className="text-white/60 text-base leading-relaxed max-w-sm mx-auto">{ss.desc}</p>
            </div>
          ))}
        </div>

      </div>
    </div>
  )
}

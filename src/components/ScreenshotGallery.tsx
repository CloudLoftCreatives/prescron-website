import PhoneFrame from './PhoneFrame'

const gallery = [
  {
    src: '/assets/1.png',
    alt: 'Prescron Dashboard',
    title: 'Your Private Vault',
    desc: 'Everything organized automatically by category.'
  },
  {
    src: '/assets/2.png',
    alt: 'Prescron Document View',
    title: 'Instant Intelligence',
    desc: 'Key facts extracted the moment you import.'
  },
  {
    src: '/assets/3.png',
    alt: 'Prescron Ask',
    title: 'Ask Questions',
    desc: 'Get answers grounded in your exact document.'
  },
  {
    src: '/assets/4.png',
    alt: 'Prescron Search',
    title: 'Semantic Search',
    desc: 'Find what you need by meaning, not just keywords.'
  },
  {
    src: '/assets/5.png',
    alt: 'Prescron Offline',
    title: '100% Offline',
    desc: 'Your documents never leave your device.'
  }
]

export default function ScreenshotGallery() {
  return (
    <section className="py-24 lg:py-32 bg-[#F7F9FC]" aria-label="Product screenshots">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        
        {/* Heading */}
        <div className="text-center max-w-3xl mx-auto mb-20 reveal">
          <p className="text-[11px] font-bold tracking-[0.2em] uppercase text-[#2563EB] mb-6">Real Screenshots</p>
          <h2 className="font-display font-extrabold tracking-tight text-[#111827] mb-6"
              style={{ fontFamily: "'Manrope', sans-serif", fontSize: 'clamp(40px, 6vw, 64px)', lineHeight: '1.05' }}>
            See Prescron in action.
          </h2>
          <p className="text-[#475569] text-xl leading-relaxed font-medium">
            Actual screenshots from the app. No fabricated UIs, no mockups. Just clean, on-device document intelligence.
          </p>
        </div>

        {/* Flex layout for phone frames */}
        <div className="flex flex-wrap justify-center gap-12 lg:gap-16">
          {gallery.map((item, i) => (
            <div key={item.src} className={`flex flex-col items-center gap-6 reveal reveal-delay-${(i % 4) + 1} max-w-[340px] w-full`}>
              <PhoneFrame>
                <img
                  src={item.src}
                  alt={item.alt}
                  className="w-full h-auto object-cover transform transition-transform duration-700 hover:scale-[1.02]"
                  loading="lazy"
                />
              </PhoneFrame>
              <div className="text-center px-4">
                <h3 className="font-display font-bold text-[#111827] text-lg mb-1">{item.title}</h3>
                <p className="text-[#475569] text-sm">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}

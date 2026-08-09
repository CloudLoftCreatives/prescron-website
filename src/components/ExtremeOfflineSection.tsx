const extremeLocations = [
  {
    src: '/assets/prescroncom.png',
    alt: 'Prescron working in Deep Space',
    title: 'Deep Space',
    desc: 'Zero gravity. Zero signal.'
  },
  {
    src: '/assets/prescroncom1.png',
    alt: 'Prescron working in the Mountains',
    title: 'High Altitude',
    desc: 'Above the clouds. No coverage.'
  },
  {
    src: '/assets/prescroncom2.png',
    alt: 'Prescron working on Voyager Satellite',
    title: 'Voyager Orbit',
    desc: 'Outside the solar system.'
  },
  {
    src: '/assets/prescroncom3.png',
    alt: 'Prescron working Underwater',
    title: 'Deep Ocean',
    desc: 'Extreme pressure. No signal.'
  },
  {
    src: '/assets/prescroncom4.png',
    alt: 'Prescron working in the Desert',
    title: 'The Desert',
    desc: 'Vast dunes. No towers.'
  },
  {
    src: '/assets/prescroncom5.png',
    alt: 'Prescron working in Snow',
    title: 'Arctic Snow',
    desc: 'Freezing temperatures. True isolation.'
  }
]

export default function ExtremeOfflineSection() {
  return (
    <section className="py-24 lg:py-36 bg-[#040810] relative overflow-hidden" aria-label="Extreme Offline Capability">
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-emerald-500/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        
        {/* Heading */}
        <div className="text-center max-w-4xl mx-auto mb-24 reveal">
          <p className="text-[11px] font-bold tracking-[0.2em] uppercase text-emerald-400 mb-6">100% Offline Core Processing</p>
          <h2 className="font-display font-bold tracking-tight text-white mb-6"
              style={{ fontSize: 'clamp(40px, 6vw, 72px)', lineHeight: '1.05' }}>
            Works anywhere.<br />Literally anywhere.
          </h2>
          <p className="text-white/60 text-xl leading-relaxed font-light max-w-2xl mx-auto">
            No cloud means no connectivity required. Whether you're in a dead zone, on a flight, or in the most remote corners of the Earth - your document intelligence is always online.
            <br /><br />
            <span className="text-white font-medium">If your phone works, Prescron works.</span>
          </p>
        </div>

        {/* Cinematic Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {extremeLocations.map((loc, i) => (
            <div key={loc.title} className={`group relative rounded-[32px] overflow-hidden bg-[#0A101C] border border-white/10 aspect-[4/5] reveal reveal-delay-${i + 1}`}>
              <img
                src={loc.src}
                alt={loc.alt}
                className="absolute inset-0 w-full h-full object-cover opacity-80 transition-transform duration-1000 group-hover:scale-105 group-hover:opacity-100"
                loading="lazy"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent" />
              
              <div className="absolute bottom-0 left-0 right-0 p-8">
                <h3 className="font-display font-bold text-white text-3xl mb-2">{loc.title}</h3>
                <p className="text-white/60 text-sm">{loc.desc}</p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}

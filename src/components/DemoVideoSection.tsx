export default function DemoVideoSection() {
  return (
    <section className="py-24 lg:py-32 bg-[#080c14] relative overflow-hidden" aria-labelledby="demo-video-heading">
      {/* Subtle Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[600px] opacity-10 blur-[150px] rounded-full pointer-events-none"
           style={{ background: 'radial-gradient(circle, #20C997 0%, transparent 70%)' }} />

      <div className="max-w-6xl mx-auto px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 id="demo-video-heading" className="text-3xl md:text-5xl font-display font-bold text-white tracking-tight mb-6">
            See Prescron in Action
          </h2>
          <p className="text-white/60 text-lg leading-relaxed">
            Watch a quick demonstration of how Prescron securely stores, analyzes, and answers questions about your documents entirely offline.
          </p>
        </div>

        {/* Video Player Container */}
        <div className="relative mx-auto w-full max-w-4xl aspect-video rounded-3xl overflow-hidden shadow-[0_0_50px_rgba(32,201,151,0.1)] border border-white/5 ring-1 ring-white/10 group">
          <iframe
            className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-[1.02]"
            src="https://www.youtube.com/embed/xD3NDcGc9V4?rel=0&showinfo=0&modestbranding=1"
            title="Prescron Product Demonstration"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        </div>
      </div>
    </section>
  )
}

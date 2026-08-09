import { useEffect } from 'react'
import { useScrollReveal } from '../hooks/useScrollReveal'

export default function HowItWorksPage() {
  useScrollReveal()

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <div className="pt-24 pb-32 bg-[#080c14] min-h-screen text-white overflow-hidden">
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center mb-20 reveal">
          <p className="text-[12px] font-semibold tracking-[0.2em] uppercase text-[#20C997] mb-6">Local Processing Architecture</p>
          <h1 className="font-display font-bold text-white tracking-tight leading-[1.05] mb-8" style={{ fontSize: 'clamp(40px, 6vw, 72px)' }}>
            How Prescron Works
          </h1>
          <p className="text-white/60 text-xl leading-relaxed font-light max-w-2xl mx-auto">
            All of these processes happen <strong className="text-white">entirely on your device</strong>. Zero cloud telemetry.
          </p>
        </div>

        {/* Taglines */}
        <div className="text-center mb-32 reveal reveal-delay-1 space-y-4">
          <h2 className="text-3xl md:text-5xl font-display font-bold">
            Prescron is not "<span className="text-white/50">think faster.</span>"<br/>
            Prescron is about <span className="text-[#20C997]">think ahead.</span>
          </h2>
          <p className="text-[#20C997]/80 uppercase tracking-widest text-sm font-bold pt-6">Privacy is Prescron's Priority</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-8">
          
          {/* Left Column: Linear Timeline */}
          <div className="lg:col-span-4 reveal">
            <div className="bg-[#0f1829] border border-white/5 rounded-3xl p-8 relative">
              <div className="absolute top-0 right-0 w-32 h-32 bg-[#20C997]/10 blur-[50px] rounded-full pointer-events-none" />
              <h3 className="text-xl font-display font-bold mb-8">The Intake Pipeline</h3>
              
              <div className="relative border-l-2 border-white/10 ml-3 space-y-8 pb-4">
                {[
                  { label: 'Upload', color: 'text-white/70' },
                  { label: 'OCR', color: 'text-white/70' },
                  { label: 'Basic fields', color: 'text-white/70' },
                  { label: 'Document available', color: 'text-white', highlight: true },
                  { label: 'Background AI enrichment', color: 'text-[#20C997]' },
                  { label: 'Knowledge graph', color: 'text-[#20C997]' },
                  { label: 'Q&A', color: 'text-[#20C997]' },
                  { label: 'Indexes', color: 'text-[#20C997]' },
                ].map((step, i) => (
                  <div key={i} className="relative pl-6">
                    <div className={`absolute -left-[5px] top-1.5 w-2 h-2 rounded-full ${step.highlight ? 'bg-white shadow-[0_0_10px_white]' : step.color.includes('20C997') ? 'bg-[#20C997] shadow-[0_0_10px_#20C997]' : 'bg-white/20'}`} />
                    <p className={`font-semibold text-sm uppercase tracking-wider ${step.color}`}>{step.label}</p>
                  </div>
                ))}
                <div className="relative pl-6 pt-4">
                  <div className="absolute -left-[9px] top-5 w-4 h-4 rounded-full bg-[#20C997] flex items-center justify-center shadow-[0_0_15px_#20C997]">
                    <div className="w-1.5 h-1.5 bg-white rounded-full animate-pulse" />
                  </div>
                  <p className="font-bold text-lg text-white">Prescron AI Enhanced ✓</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Complex Architecture Diagram */}
          <div className="lg:col-span-8 reveal reveal-delay-1">
            <div className="bg-[#0A101C] border border-white/5 rounded-3xl p-6 md:p-12 overflow-x-auto">
              <h3 className="text-xl font-display font-bold mb-12 text-center">Core Neural Architecture</h3>
              
              <div className="min-w-[600px] flex flex-col items-center text-xs sm:text-sm font-semibold tracking-wider uppercase text-white/80">
                
                {/* Stage 1 */}
                <div className="bg-white/10 px-6 py-3 rounded-lg border border-white/20 shadow-lg relative z-10">Document</div>
                <div className="w-px h-8 bg-white/20" />
                <div className="bg-[#20C997]/20 text-[#20C997] px-6 py-3 rounded-lg border border-[#20C997]/50 shadow-[0_0_15px_rgba(32,201,151,0.2)] relative z-10">OCR / Extraction</div>
                <div className="w-px h-8 bg-white/20" />

                {/* Stage 2: Split */}
                <div className="w-full max-w-md relative flex justify-between px-16">
                  {/* Top horizontal connection line */}
                  <div className="absolute top-0 left-[20%] right-[20%] h-px bg-white/20" />
                  
                  {/* Left branch */}
                  <div className="flex flex-col items-center">
                    <div className="w-px h-8 bg-white/20" />
                    <div className="bg-white/5 px-4 py-3 rounded-lg border border-white/10 text-center w-40">Deterministic<br/>Extraction</div>
                    <div className="w-px h-[400px] bg-white/20" />
                  </div>

                  {/* Right branch */}
                  <div className="flex flex-col items-center">
                    <div className="w-px h-8 bg-white/20" />
                    <div className="bg-blue-500/20 text-blue-400 px-4 py-3 rounded-lg border border-blue-500/50 w-48 text-center shadow-[0_0_15px_rgba(59,130,246,0.2)] relative z-10">AI Enrichment</div>
                    <div className="w-px h-6 bg-white/20" />
                    <div className="bg-blue-500/10 px-4 py-2 rounded border border-blue-500/30 text-blue-300 w-44 text-center">Overlapping Windows</div>
                    <div className="w-px h-6 bg-white/20" />
                    <div className="bg-blue-500/10 px-4 py-2 rounded border border-blue-500/30 text-blue-300 w-44 text-center">Fact Extraction</div>
                    <div className="w-px h-6 bg-white/20" />
                    <div className="bg-blue-500/10 px-4 py-2 rounded border border-blue-500/30 text-blue-300 w-44 text-center">Entity Extraction</div>
                    <div className="w-px h-6 bg-white/20" />
                    <div className="bg-blue-500/10 px-4 py-2 rounded border border-blue-500/30 text-blue-300 w-44 text-center">Relationships</div>
                    <div className="w-px h-6 bg-white/20" />
                    <div className="bg-blue-500/10 px-4 py-2 rounded border border-blue-500/30 text-blue-300 w-44 text-center">Timeline / Events</div>
                    <div className="w-px h-6 bg-white/20" />
                    <div className="bg-blue-500/10 px-4 py-2 rounded border border-blue-500/30 text-blue-300 w-44 text-center">Precomputed Q&A</div>
                    <div className="w-px h-8 bg-white/20" />
                  </div>
                </div>

                {/* Stage 3: Merge back to Knowledge Graph */}
                <div className="w-full max-w-md relative flex justify-center">
                  <div className="absolute top-0 left-[20%] right-[20%] h-px bg-white/20" />
                  <div className="w-px h-8 bg-white/20" />
                </div>
                
                <div className="bg-purple-500/20 text-purple-400 px-8 py-3 rounded-lg border border-purple-500/50 shadow-[0_0_15px_rgba(168,85,247,0.2)] relative z-10 text-center">Knowledge Graph</div>
                <div className="w-px h-8 bg-white/20" />

                {/* Stage 4: 3-way Split */}
                <div className="w-full max-w-lg relative flex justify-between px-10">
                  <div className="absolute top-0 left-[15%] right-[15%] h-px bg-white/20" />
                  
                  <div className="flex flex-col items-center">
                    <div className="w-px h-6 bg-white/20" />
                    <div className="bg-white/5 px-6 py-2 rounded-lg border border-white/10 w-28 text-center">SQLite</div>
                    <div className="w-px h-6 bg-white/20" />
                  </div>
                  
                  <div className="flex flex-col items-center">
                    <div className="w-px h-6 bg-white/20" />
                    <div className="bg-white/5 px-6 py-2 rounded-lg border border-white/10 w-28 text-center">FTS5</div>
                    <div className="w-px h-6 bg-white/20" />
                  </div>

                  <div className="flex flex-col items-center">
                    <div className="w-px h-6 bg-white/20" />
                    <div className="bg-white/5 px-6 py-2 rounded-lg border border-white/10 w-28 text-center">Embeddings</div>
                    <div className="w-px h-6 bg-white/20" />
                  </div>
                </div>

                {/* Merge back to Router */}
                <div className="w-full max-w-lg relative flex justify-center">
                  <div className="absolute top-0 left-[15%] right-[15%] h-px bg-white/20" />
                  <div className="w-px h-8 bg-white/20" />
                </div>

                <div className="bg-[#20C997]/20 text-[#20C997] px-8 py-3 rounded-lg border border-[#20C997]/50 shadow-[0_0_15px_rgba(32,201,151,0.2)] relative z-10">Query Router</div>
                <div className="w-px h-8 bg-white/20" />

                {/* 3-way Split Query Strategy */}
                <div className="w-full max-w-lg relative flex justify-between px-8">
                  <div className="absolute top-0 left-[15%] right-[15%] h-px bg-white/20" />
                  
                  <div className="flex flex-col items-center">
                    <div className="w-px h-6 bg-white/20" />
                    <div className="bg-white/5 px-4 py-3 rounded-lg border border-white/10 w-32 text-center">
                      <div className="text-white/90">Exact Fact</div>
                      <div className="text-[10px] text-white/40 mt-1 normal-case">&lt;100ms</div>
                    </div>
                    <div className="w-px h-6 bg-white/20" />
                  </div>
                  
                  <div className="flex flex-col items-center">
                    <div className="w-px h-6 bg-white/20" />
                    <div className="bg-white/5 px-4 py-3 rounded-lg border border-white/10 w-32 text-center">
                      <div className="text-white/90">Cache</div>
                      <div className="text-[10px] text-white/40 mt-1 normal-case">&lt;50ms</div>
                    </div>
                    <div className="w-px h-6 bg-white/20" />
                  </div>

                  <div className="flex flex-col items-center">
                    <div className="w-px h-6 bg-white/20" />
                    <div className="bg-white/5 px-4 py-3 rounded-lg border border-white/10 w-32 text-center">
                      <div className="text-white/90">Retrieval</div>
                      <div className="text-[10px] text-white/40 mt-1 normal-case">100–500ms</div>
                    </div>
                    <div className="w-px h-6 bg-white/20" />
                  </div>
                </div>

                {/* Final Merge */}
                <div className="w-full max-w-lg relative flex justify-center">
                  <div className="absolute top-0 left-[15%] right-[15%] h-px bg-white/20" />
                  <div className="w-px h-8 bg-white/20" />
                </div>

                <div className="bg-pink-500/20 text-pink-400 px-8 py-3 rounded-lg border border-pink-500/50 shadow-[0_0_15px_rgba(236,72,153,0.2)] relative z-10 text-center">
                  LLM ONLY WHEN<br/>REASONING NEEDED
                </div>
                <div className="w-px h-8 bg-white/20" />

                <div className="bg-gradient-to-r from-[#20C997] to-[#109871] text-white px-10 py-4 rounded-xl shadow-[0_0_30px_rgba(32,201,151,0.4)] relative z-10 text-center font-bold">
                  VERIFIED ANSWER<br/>
                  <span className="text-[10px] opacity-80 mt-1 block">+ SOURCE + CONFIDENCE</span>
                </div>
                
              </div>
            </div>
          </div>
          
        </div>

      </div>
    </div>
  )
}

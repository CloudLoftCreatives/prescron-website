import { useEffect, useState } from 'react'
import { useScrollReveal } from '../hooks/useScrollReveal'

const pipelineSteps = [
  { title: 'Upload', desc: 'Securely transfer the document into the local encrypted vault.' },
  { title: 'OCR', desc: 'Optical Character Recognition extracts raw text from images and PDFs natively.' },
  { title: 'Basic fields', desc: 'Extracts standard metadata like dates, amounts, and authors.' },
  { title: 'Document available', desc: 'The document is immediately ready for standard viewing and search.' },
  { title: 'Background AI enrichment', desc: 'Prescron silently analyzes the document semantics in the background.' },
  { title: 'Knowledge graph', desc: 'Constructs complex relationship nodes connecting entities within the text.' },
  { title: 'Q&A', desc: 'Pre-computes anticipated questions and their corresponding answers.' },
  { title: 'Indexes', desc: 'Builds massive vector indexes for instantaneous semantic retrieval.' }
]

export default function HowItWorksPage() {
  useScrollReveal()
  const [activeStep, setActiveStep] = useState(0)

  const getArchStyle = (stepIndices: number[]) => {
    const isActive = stepIndices.includes(activeStep)
    return `transition-all duration-500 ${isActive ? 'ring-2 ring-white scale-110 opacity-100 z-20' : 'opacity-30 grayscale-[50%] scale-100 z-10'}`
  }

  useEffect(() => {
    window.scrollTo(0, 0)
    
    // Auto-play the pipeline animation
    const interval = setInterval(() => {
      setActiveStep((prev) => (prev + 1) % (pipelineSteps.length + 1))
    }, 2500)
    
    return () => clearInterval(interval)
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
                {pipelineSteps.map((step, i) => {
                  const isActive = i === activeStep
                  const isPast = i < activeStep
                  
                  return (
                    <div 
                      key={i} 
                      className={`relative pl-6 transition-all duration-500 cursor-pointer group`}
                      onClick={() => setActiveStep(i)}
                    >
                      <div className={`absolute -left-[5px] top-1.5 w-2 h-2 rounded-full transition-all duration-500 ${
                        isActive ? 'bg-white shadow-[0_0_15px_white] scale-150' : 
                        isPast ? 'bg-[#20C997] shadow-[0_0_10px_#20C997]' : 'bg-white/20'
                      }`} />
                      <p className={`font-semibold text-sm uppercase tracking-wider transition-colors duration-500 group-hover:translate-x-1 ${
                        isActive ? 'text-white' : 
                        isPast ? 'text-[#20C997]' : 'text-white/40'
                      }`}>
                        {step.title}
                      </p>
                      
                      {/* Interactive Description */}
                      <div className={`overflow-hidden transition-all duration-500 ${isActive ? 'max-h-24 opacity-100 mt-2' : 'max-h-0 opacity-0'}`}>
                        <p className="text-xs text-white/60 leading-relaxed max-w-[250px]">{step.desc}</p>
                      </div>
                    </div>
                  )
                })}
                
                {/* Final Step */}
                <div 
                  className="relative pl-6 pt-4 cursor-pointer group"
                  onClick={() => setActiveStep(pipelineSteps.length)}
                >
                  <div className={`absolute -left-[9px] top-5 w-4 h-4 rounded-full flex items-center justify-center transition-all duration-500 ${
                    activeStep === pipelineSteps.length ? 'bg-[#20C997] shadow-[0_0_20px_#20C997] scale-125' : 
                    activeStep > pipelineSteps.length ? 'bg-[#20C997] shadow-[0_0_15px_#20C997]' : 'bg-white/10'
                  }`}>
                    <div className={`w-1.5 h-1.5 rounded-full transition-colors duration-500 ${activeStep === pipelineSteps.length ? 'bg-white animate-pulse' : 'bg-[#20C997]'}`} />
                  </div>
                  <p className={`font-bold text-lg transition-colors duration-500 group-hover:translate-x-1 inline-block ${activeStep === pipelineSteps.length ? 'text-white' : 'text-white/40'}`}>
                    Prescron AI Enhanced ✓
                  </p>
                  <div className={`overflow-hidden transition-all duration-500 ${activeStep === pipelineSteps.length ? 'max-h-24 opacity-100 mt-2' : 'max-h-0 opacity-0'}`}>
                    <p className="text-xs text-[#20C997]/80 leading-relaxed max-w-[250px]">Fully optimized for complex queries.</p>
                  </div>
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
                <div className={`bg-white/10 px-6 py-3 rounded-lg border border-white/20 shadow-lg relative ${getArchStyle([0, 3])}`}>Document</div>
                <div className="w-px h-8 bg-white/20" />
                <div className={`bg-[#20C997]/20 text-[#20C997] px-6 py-3 rounded-lg border border-[#20C997]/50 shadow-[0_0_15px_rgba(32,201,151,0.2)] relative ${getArchStyle([1])}`}>OCR / Extraction</div>
                <div className="w-px h-8 bg-white/20" />

                {/* Stage 2: Split */}
                <div className="w-full max-w-md relative flex justify-between px-16">
                  {/* Top horizontal connection line */}
                  <div className="absolute top-0 left-[20%] right-[20%] h-px bg-white/20" />
                  
                  {/* Left branch */}
                  <div className="flex flex-col items-center">
                    <div className="w-px h-8 bg-white/20" />
                    <div className={`bg-white/5 px-4 py-3 rounded-lg border border-white/10 text-center w-40 ${getArchStyle([2, 3])}`}>Deterministic<br/>Extraction</div>
                    <div className="w-px h-[400px] bg-white/20" />
                  </div>

                  {/* Right branch */}
                  <div className="flex flex-col items-center">
                    <div className="w-px h-8 bg-white/20" />
                    <div className={`bg-blue-500/20 text-blue-400 px-4 py-3 rounded-lg border border-blue-500/50 w-48 text-center shadow-[0_0_15px_rgba(59,130,246,0.2)] relative ${getArchStyle([4])}`}>AI Enrichment</div>
                    <div className="w-px h-6 bg-white/20" />
                    <div className={`bg-blue-500/10 px-4 py-2 rounded border border-blue-500/30 text-blue-300 w-44 text-center ${getArchStyle([4])}`} style={{ transitionDelay: activeStep === 4 ? '100ms' : '0ms' }}>Overlapping Windows</div>
                    <div className="w-px h-6 bg-white/20" />
                    <div className={`bg-blue-500/10 px-4 py-2 rounded border border-blue-500/30 text-blue-300 w-44 text-center ${getArchStyle([4])}`} style={{ transitionDelay: activeStep === 4 ? '200ms' : '0ms' }}>Fact Extraction</div>
                    <div className="w-px h-6 bg-white/20" />
                    <div className={`bg-blue-500/10 px-4 py-2 rounded border border-blue-500/30 text-blue-300 w-44 text-center ${getArchStyle([4])}`} style={{ transitionDelay: activeStep === 4 ? '300ms' : '0ms' }}>Entity Extraction</div>
                    <div className="w-px h-6 bg-white/20" />
                    <div className={`bg-blue-500/10 px-4 py-2 rounded border border-blue-500/30 text-blue-300 w-44 text-center ${getArchStyle([4])}`} style={{ transitionDelay: activeStep === 4 ? '400ms' : '0ms' }}>Relationships</div>
                    <div className="w-px h-6 bg-white/20" />
                    <div className={`bg-blue-500/10 px-4 py-2 rounded border border-blue-500/30 text-blue-300 w-44 text-center ${getArchStyle([4])}`} style={{ transitionDelay: activeStep === 4 ? '500ms' : '0ms' }}>Timeline / Events</div>
                    <div className="w-px h-6 bg-white/20" />
                    <div className={`bg-blue-500/10 px-4 py-2 rounded border border-blue-500/30 text-blue-300 w-44 text-center ${getArchStyle([4])}`} style={{ transitionDelay: activeStep === 4 ? '600ms' : '0ms' }}>Precomputed Q&A</div>
                    <div className="w-px h-8 bg-white/20" />
                  </div>
                </div>

                {/* Stage 3: Merge back to Knowledge Graph */}
                <div className="w-full max-w-md relative flex justify-center">
                  <div className="absolute top-0 left-[20%] right-[20%] h-px bg-white/20" />
                  <div className="w-px h-8 bg-white/20" />
                </div>
                
                <div className={`bg-purple-500/20 text-purple-400 px-8 py-3 rounded-lg border border-purple-500/50 shadow-[0_0_15px_rgba(168,85,247,0.2)] relative text-center ${getArchStyle([5])}`}>Knowledge Graph</div>
                <div className="w-px h-8 bg-white/20" />

                {/* Stage 4: 3-way Split */}
                <div className="w-full max-w-lg relative flex justify-between px-10">
                  <div className="absolute top-0 left-[15%] right-[15%] h-px bg-white/20" />
                  
                  <div className="flex flex-col items-center">
                    <div className="w-px h-6 bg-white/20" />
                    <div className={`bg-white/5 px-6 py-2 rounded-lg border border-white/10 w-28 text-center ${getArchStyle([7])}`}>SQLite</div>
                    <div className="w-px h-6 bg-white/20" />
                  </div>
                  
                  <div className="flex flex-col items-center">
                    <div className="w-px h-6 bg-white/20" />
                    <div className={`bg-white/5 px-6 py-2 rounded-lg border border-white/10 w-28 text-center ${getArchStyle([7])}`}>FTS5</div>
                    <div className="w-px h-6 bg-white/20" />
                  </div>

                  <div className="flex flex-col items-center">
                    <div className="w-px h-6 bg-white/20" />
                    <div className={`bg-white/5 px-6 py-2 rounded-lg border border-white/10 w-28 text-center ${getArchStyle([7])}`}>Embeddings</div>
                    <div className="w-px h-6 bg-white/20" />
                  </div>
                </div>

                {/* Merge back to Router */}
                <div className="w-full max-w-lg relative flex justify-center">
                  <div className="absolute top-0 left-[15%] right-[15%] h-px bg-white/20" />
                  <div className="w-px h-8 bg-white/20" />
                </div>

                <div className={`bg-[#20C997]/20 text-[#20C997] px-8 py-3 rounded-lg border border-[#20C997]/50 shadow-[0_0_15px_rgba(32,201,151,0.2)] relative ${getArchStyle([6])}`}>Query Router</div>
                <div className="w-px h-8 bg-white/20" />

                {/* 3-way Split Query Strategy */}
                <div className="w-full max-w-lg relative flex justify-between px-8">
                  <div className="absolute top-0 left-[15%] right-[15%] h-px bg-white/20" />
                  
                  <div className="flex flex-col items-center">
                    <div className="w-px h-6 bg-white/20" />
                    <div className={`bg-white/5 px-4 py-3 rounded-lg border border-white/10 w-32 text-center ${getArchStyle([6])}`}>
                      <div className="text-white/90">Exact Fact</div>
                      <div className="text-[10px] text-white/40 mt-1 normal-case">&lt;100ms</div>
                    </div>
                    <div className="w-px h-6 bg-white/20" />
                  </div>
                  
                  <div className="flex flex-col items-center">
                    <div className="w-px h-6 bg-white/20" />
                    <div className={`bg-white/5 px-4 py-3 rounded-lg border border-white/10 w-32 text-center ${getArchStyle([6])}`}>
                      <div className="text-white/90">Cache</div>
                      <div className="text-[10px] text-white/40 mt-1 normal-case">&lt;50ms</div>
                    </div>
                    <div className="w-px h-6 bg-white/20" />
                  </div>

                  <div className="flex flex-col items-center">
                    <div className="w-px h-6 bg-white/20" />
                    <div className={`bg-white/5 px-4 py-3 rounded-lg border border-white/10 w-32 text-center ${getArchStyle([6])}`}>
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

                <div className={`bg-pink-500/20 text-pink-400 px-8 py-3 rounded-lg border border-pink-500/50 shadow-[0_0_15px_rgba(236,72,153,0.2)] relative text-center ${getArchStyle([8])}`}>
                  PRESCRON LLM ONLY WHEN<br/>REASONING NEEDED
                </div>
                <div className="w-px h-8 bg-white/20" />

                <div className={`bg-gradient-to-r from-[#20C997] to-[#109871] text-white px-10 py-4 rounded-xl shadow-[0_0_30px_rgba(32,201,151,0.4)] relative text-center font-bold ${getArchStyle([8])}`}>
                  VERIFIED ANSWER<br/>
                  <span className="text-[10px] opacity-80 mt-1 block">+ SOURCE + CONFIDENCE</span>
                </div>
                
              </div>
            </div>
          </div>
          
        </div>

        {/* Detailed Explanations */}
        <div className="mt-32 space-y-32 max-w-4xl mx-auto">
          {/* Section 1: Processing */}
          <section className="reveal">
            <h2 className="text-3xl font-display font-bold mb-6 text-white">1. Secure Local Processing</h2>
            <p className="text-white/70 text-lg leading-relaxed mb-6">
              When you import a document into Prescron, the file is immediately parsed natively on your mobile device's hardware. Unlike traditional cloud-based AI tools, Prescron employs a highly optimized text-extraction engine that operates completely isolated from network interfaces.
            </p>
            <p className="text-white/70 text-lg leading-relaxed mb-6">
              Once extracted, the document undergoes a semantic chunking algorithm. This algorithm breaks massive documents down into dense, meaningful vectors without relying on remote API calls. This means your sensitive contracts, IDs, and financial records never leave your phone's RAM during the ingestion phase.
            </p>
          </section>

          {/* Section 2: Storage */}
          <section className="reveal">
            <h2 className="text-3xl font-display font-bold mb-6 text-white">2. Encrypted Document Saving</h2>
            <p className="text-white/70 text-lg leading-relaxed mb-6">
              Security is only as strong as the storage mechanism. Prescron bypasses standard cloud backup vectors entirely by utilizing your device's native secure enclave and encrypted local storage architecture. 
            </p>
            <p className="text-white/70 text-lg leading-relaxed mb-6">
              The processed vectors and original files are committed to a local, offline vector database. The database itself is encrypted using AES-256 standards. Because we don't operate cloud servers for core app functionality, there is zero risk of server-side data breaches. Your vault exists solely in your pocket.
            </p>
          </section>

          {/* Section 3: Optimization */}
          <section className="reveal">
            <h2 className="text-3xl font-display font-bold mb-6 text-white">3. Ultra-Low Memory Optimization</h2>
            <p className="text-white/70 text-lg leading-relaxed mb-6">
              Running advanced document intelligence on a mobile processor requires ruthless optimization. Prescron utilizes a heavily quantized vector search mechanism. By reducing floating-point precision where it doesn't impact semantic understanding, Prescron drastically cuts down memory overhead.
            </p>
            <p className="text-white/70 text-lg leading-relaxed mb-6">
              This means Prescron can index thousands of pages of text without draining your battery or overheating your device. The app is engineered to idle at near-zero resource consumption and only spin up CPU cores precisely when querying the database.
            </p>
          </section>

          {/* Section 4: Prescron LLM */}
          <section className="reveal">
            <h2 className="text-3xl font-display font-bold mb-6 text-[#20C997]">4. The Prescron LLM</h2>
            <div className="bg-[#0f1829] border border-[#20C997]/20 p-8 rounded-3xl relative overflow-hidden">
              <div className="absolute top-0 right-0 w-64 h-64 bg-[#20C997]/10 blur-[100px] rounded-full pointer-events-none" aria-hidden="true" />
              <p className="text-white/70 text-lg leading-relaxed mb-6 relative z-10">
                The heart of our document intelligence is the custom-tuned <strong>Prescron LLM</strong>. We have deployed a state-of-the-art Large Language Model specifically optimized to run natively on mobile silicon. 
              </p>
              <p className="text-white/70 text-lg leading-relaxed mb-6 relative z-10">
                When you ask a question about your documents, the query and the relevant document chunks are fed directly into the Prescron LLM inside your phone. It reads, reasons, and generates highly accurate, human-readable answers instantly. 
              </p>
              <p className="text-white/70 text-lg leading-relaxed relative z-10">
                Because the Prescron LLM executes directly on your hardware's Neural Processing Unit (NPU), it requires zero internet connection to function. It is a powerful, offline intelligence engine dedicated solely to you.
              </p>
            </div>
          </section>
        </div>

      </div>
    </div>
  )
}

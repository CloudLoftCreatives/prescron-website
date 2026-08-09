import { useEffect } from 'react'
import { useScrollReveal } from '../hooks/useScrollReveal'

export default function HowItWorksPage() {
  useScrollReveal()

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <div className="pt-24 pb-32 bg-[#080c14] min-h-screen text-white">
      <div className="max-w-4xl mx-auto px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center mb-24 reveal">
          <p className="text-[12px] font-semibold tracking-[0.2em] uppercase text-[#20C997] mb-6">Technical Deep Dive</p>
          <h1 className="font-display font-bold text-white tracking-tight leading-[1.05] mb-8" style={{ fontSize: 'clamp(40px, 6vw, 72px)' }}>
            How Prescron Works
          </h1>
          <p className="text-white/60 text-xl leading-relaxed font-light max-w-2xl mx-auto">
            Discover the engineering behind on-device document intelligence. Zero cloud processing, zero data telemetry.
          </p>
        </div>

        {/* Content */}
        <div className="space-y-32">
          
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

import { GooglePlayBadge } from './Hero'
import PhoneFrame from './PhoneFrame'

export default function AskSection() {
  return (
    <section id="ask" className="py-24 lg:py-32 bg-[#F7F9FC]" aria-label="Ask your documents feature">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          {/* Left: Content */}
          <div className="space-y-7 reveal">
            <div>
              <p className="text-[11px] font-semibold tracking-[0.2em] uppercase text-[#2563EB] mb-4">Ask Anything</p>
              <h2 className="font-display font-bold tracking-tight text-[#111827] mb-5"
                  style={{ fontSize: 'clamp(32px, 4.5vw, 52px)', lineHeight: '1.1' }}>
                Ask your<br />documents.
              </h2>
              <p className="text-[#475569] text-lg leading-relaxed">
                Stop scrolling through pages to find one answer. Type a question in plain language
                and get an answer pulled directly from inside your document.
              </p>
            </div>

            <ul className="space-y-4">
              {[
                { icon: '→', text: 'Questions answered in natural language' },
                { icon: '→', text: 'Answers grounded in your actual document' },
                { icon: '→', text: 'Source shown know exactly where it came from' },
                { icon: '→', text: 'Confidence indicator on every response' },
                { icon: '→', text: 'Follow-up questions in the same session' },
              ].map((item) => (
                <li key={item.text} className="flex items-start gap-3 text-[#475569]">
                  <span className="text-[#20C997] font-bold mt-0.5 flex-shrink-0 text-sm">{item.icon}</span>
                  <span className="text-[15px]">{item.text}</span>
                </li>
              ))}
            </ul>

            <GooglePlayBadge />
          </div>

          {/* Right: Real screenshot */}
          <div className="reveal reveal-delay-2">
            <div className="relative">
              <div className="absolute -inset-12 rounded-3xl opacity-20 blur-3xl pointer-events-none"
                   style={{ background: 'radial-gradient(ellipse, #2563EB 0%, transparent 70%)' }}
                   aria-hidden="true" />
              <PhoneFrame>
                <img
                  src="/assets/sel3.png"
                  alt="Prescron Ask interface: user asks 'what is the total' and receives a document-grounded answer with High Confidence indicator and source reference"
                  className="w-full block"
                  loading="lazy"
                />
              </PhoneFrame>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

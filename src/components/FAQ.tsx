import { useState } from 'react'

const faqs = [
  {
    q: 'Is Prescron an offline AI app?',
    a: 'Prescron is designed around on-device processing for its core document experience, so you can work with your documents without depending on cloud AI. Internet access is required to download the app and receive updates.',
  },
  {
    q: 'Do I need an account?',
    a: 'No account or sign-up is required to use Prescron\'s core document functionality. Just install and start.',
  },
  {
    q: 'Are my documents uploaded to the cloud?',
    a: 'Prescron is designed so your documents and document-derived information are processed and stored locally on your device for core functionality. We do not intend to upload your documents to Prescron-operated servers for core features.',
  },
  {
    q: 'What types of documents can I use?',
    a: 'Prescron supports PDFs and various document and image formats. Check the app for the full list of supported file types.',
  },
  {
    q: 'Can I ask questions about my documents?',
    a: 'Yes. Prescron\'s Ask feature lets you type natural-language questions and get answers grounded in the information inside your documents. Always verify important answers against the original document.',
  },
  {
    q: 'Does Prescron work without internet?',
    a: 'Core document processing, searching, and question-answering are designed to work on-device without an internet connection. Downloading the app and updates require internet access.',
  },
  {
    q: 'Is my vault protected?',
    a: 'Your vault is stored locally using Android\'s app sandboxing. Prescron also includes an optional App Lock feature requiring device authentication (fingerprint, face auth, or PIN) before the app can be opened.',
  },
  {
    q: 'Can Prescron find information across multiple documents?',
    a: 'Yes. Prescron\'s semantic search is designed to search across your entire vault, finding relevant information from multiple documents based on the meaning of your query.',
  },
]

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  return (
    <section id="faq" className="py-24 lg:py-32 bg-[#F7F9FC]" aria-label="Frequently asked questions">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-5 gap-12 lg:gap-20">
          {/* Left: heading */}
          <div className="lg:col-span-2 reveal">
            <p className="text-[11px] font-semibold tracking-[0.2em] uppercase text-[#2563EB] mb-4">FAQ</p>
            <h2 className="font-display font-bold tracking-tight text-[#111827] mb-5"
                style={{ fontSize: 'clamp(28px, 3.5vw, 44px)', lineHeight: '1.1' }}>
              Questions,<br />answered.
            </h2>
            <p className="text-[#475569] text-[15px] leading-relaxed">
              Everything you need to know about Prescron's privacy, offline capabilities, and document AI.
            </p>
          </div>

          {/* Right: FAQ accordion */}
          <div className="lg:col-span-3 space-y-2 reveal reveal-delay-2">
            {faqs.map((faq, i) => (
              <div
                key={i}
                className={`border rounded-xl overflow-hidden transition-all duration-200 ${
                  openIndex === i ? 'border-[#2563EB]/25 bg-white shadow-sm' : 'border-[#E2E8F4] bg-white'
                }`}
              >
                <button
                  id={`faq-q-${i}`}
                  className="w-full flex items-center justify-between gap-4 px-5 py-4 text-left"
                  onClick={() => setOpenIndex(openIndex === i ? null : i)}
                  aria-expanded={openIndex === i}
                  aria-controls={`faq-a-${i}`}
                >
                  <span className="font-display font-semibold text-[#111827] text-sm leading-snug">{faq.q}</span>
                  <span
                    className={`flex-shrink-0 w-5 h-5 rounded-full flex items-center justify-center transition-all duration-200 ${
                      openIndex === i ? 'bg-[#2563EB] text-white rotate-180' : 'bg-[#F7F9FC] text-[#8898aa]'
                    }`}
                    aria-hidden="true"
                  >
                    <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                    </svg>
                  </span>
                </button>
                <div
                  id={`faq-a-${i}`}
                  role="region"
                  aria-labelledby={`faq-q-${i}`}
                  className={`overflow-hidden transition-all duration-300 ${openIndex === i ? 'max-h-60' : 'max-h-0'}`}
                >
                  <p className="px-5 pb-4 text-[#475569] text-sm leading-relaxed">{faq.a}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

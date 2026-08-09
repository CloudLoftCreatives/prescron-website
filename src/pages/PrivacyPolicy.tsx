import { useEffect } from 'react'
import { Link } from 'react-router-dom'

// Privacy policy sections extracted from the actual /Downloads/index.html
const sections = [
  {
    num: '1',
    title: 'Introduction',
    content: `Welcome to Prescron ("Prescron", "the App", "we", "us", or "our").

Prescron is a privacy-focused, offline document intelligence application designed to help you securely store, organize, search, understand, and interact with your documents directly on your Android device.

Prescron is designed around a simple principle: your documents belong to you, and your private information should remain under your control.

Prescron is designed to perform its core document-intelligence functionality locally on your device. Depending on the features you use and your device configuration, documents may be processed by on-device artificial intelligence, local search/indexing systems, and other local processing components.

We do not intend to upload your personal documents, document contents, identity information, financial records, medical records, or conversations with Prescron to our servers for the purpose of providing the App's core functionality.`,
  },
  {
    num: '2',
    title: 'Scope of This Privacy Policy',
    content: `This Privacy Policy applies to the Prescron Android application, features provided directly by Prescron, information processed through the App, documents imported into the App, AI-generated information, conversations with Prescron's document assistant, local notifications, document reminders, and information you voluntarily provide when contacting us.

This Privacy Policy does not apply to third-party websites, applications, operating systems, services, or products that you access independently of Prescron.`,
  },
  {
    num: '3',
    title: 'Our Privacy Philosophy',
    bullets: [
      'Local processing: Core document analysis is designed to run on your device.',
      'No cloud document storage: Your imported documents are not intended to be stored on Prescron-operated cloud servers.',
      'No advertising-based profiling: Prescron is not designed to build advertising profiles from your documents.',
      'No sale of personal information: We do not sell your personal or sensitive information.',
      'User control: Your documents remain under your control on your device.',
      'Data minimization: Prescron is designed to process information necessary to provide the features you explicitly use.',
    ],
  },
  {
    num: '4',
    title: 'Information You Provide to Prescron',
    content: `Prescron processes information that you intentionally provide to the App locally on your device. Prescron does not collect or upload your documents or their contents to Prescron-operated servers for the App's core functionality.

You may import PDFs, scanned documents, identification documents, passports, government-issued identification, insurance documents, financial documents, bills, medical documents, educational documents, legal documents, certificates, receipts, contracts, and other supported files.

Documents may contain highly sensitive information, including names, addresses, identification numbers, financial information, medical information, dates of birth, policy numbers, account information, signatures, and other personal information. Prescron treats document contents as private user data.`,
  },
  {
    num: '5',
    title: 'AI-Processed Document Information',
    content: `When you ask Prescron to analyze a document, the App processes it locally on your device to generate summaries, key facts, names, dates, locations, numbers, identifiers, event timelines, anticipated questions and answers, search indexes, semantic/vector representations, document classifications, categories, suggested names, expiration dates, reminder information, and other document metadata.

Where the feature is implemented locally, this processing occurs on your Android device.`,
  },
  {
    num: '6',
    title: 'Conversational AI and Prescron Ask',
    content: `Prescron provides a conversational document assistant that allows you to ask questions about your documents. Prescron processes your question, previous conversation context, relevant document content, locally generated indexes, and relevant metadata on your device to generate an answer.

Prescron is designed so that its core document question-answering functionality operates on-device. Your documents and questions are not intentionally transmitted to Prescron's servers merely to answer questions within the App.`,
  },
  {
    num: '7',
    title: 'Vector Search and Document Indexing',
    content: `Prescron divides documents into smaller sections and may generate local vector or semantic embeddings on your device. These representations may be stored locally and used to find relevant passages, answer questions, search documents, identify related information, and retrieve information from specific pages.`,
  },
  {
    num: '8',
    title: 'Deterministic Information Extraction',
    content: `Prescron uses specialized local processing to identify important numbers and structured information, including government identification numbers, policy numbers, registration numbers, account numbers, dates, reference numbers, and invoice numbers.

The purpose is to improve the reliability of sensitive information extraction and reduce the possibility of AI-generated numerical errors.`,
  },
  {
    num: '9',
    title: 'Document Reminders and Expiration Dates',
    content: `Prescron identifies dates and actions within your documents, including passport expiration, insurance renewal, license expiration, certificate expiration, bill due dates, subscription dates, and contract deadlines.

When you enable reminders, Prescron stores relevant reminder information locally and uses Android's notification functionality to notify you.`,
  },
  {
    num: '10',
    title: 'Notifications',
    content: `Prescron may request permission to send notifications for document processing progress, analysis completion, expiration reminders, renewal reminders, due-date reminders, and other App-related notifications. You may disable notifications through Android settings where supported.`,
  },
  {
    num: '11',
    title: 'Background Processing',
    content: `Prescron may perform document processing in the background on your device after you initiate an operation. This may include document analysis, summaries, fact extraction, search-index creation, Q&A generation, date identification, reminders, and other operations you explicitly initiated.`,
  },
  {
    num: '12',
    title: 'Information Stored on Your Device',
    content: `Depending on the features you use, Prescron stores imported documents, metadata, folder/category information, search indexes, vector embeddings, AI-generated summaries, extracted facts and dates, timelines, generated questions and answers, conversation history, reminder information, preferences, local configuration, and processing status.`,
  },
  {
    num: '13',
    title: 'We Do Not Sell Your Personal Information',
    content: `Prescron does not sell your personal information. We do not sell documents, identity information, financial information, medical information, conversations, search queries, extracted document information, AI-generated document information, document embeddings, or reminder information for monetary consideration.`,
  },
  {
    num: '14',
    title: 'Advertising',
    content: `Prescron does not use advertising-based profiling. We do not use the contents of your documents to create advertising profiles or determine which advertisements should be shown to you.`,
  },
  {
    num: '15',
    title: 'Third-Party Services',
    content: `Prescron does not require external cloud services for its core document-processing functionality. Android operating-system components, Google Play services, notification infrastructure, security libraries, file-selection components, or other libraries may be used where required.

Prescron does not intentionally transmit your private document contents to third parties for the App's core functionality. Information may leave your device only when you explicitly choose to share or export it, or where a separate system service is required for an operation you initiate.`,
  },
  {
    num: '16',
    title: 'No Cloud AI Processing for Core Document Intelligence',
    content: `Prescron's core design is based on on-device AI. Unlike services where documents are uploaded to a remote AI provider for processing, Prescron is designed to perform its core document analysis locally.

This architecture is intended to reduce the risk associated with transmitting highly sensitive documents over the Internet. However, no software architecture can guarantee absolute security under every circumstance.`,
  },
  {
    num: '17',
    title: 'Internet Connectivity',
    content: `Prescron is designed so that its primary document intelligence functionality can operate without an Internet connection. Internet access may nevertheless be required for downloading the App, installing updates, Google Play functionality, external links, optional future online services, or services provided by Android or other third parties.`,
  },
  {
    num: '22',
    title: 'Security',
    content: `We take reasonable technical and organizational measures to protect information processed by Prescron. Security measures may include on-device processing, local storage, Android platform security, application sandboxing, access controls, secure coding practices, local data isolation, and minimization of external data transmission.

No method of electronic storage or transmission is completely secure. We cannot guarantee that information will be completely immune from unauthorized access, malware, device compromise, loss, theft, or other security incidents.`,
  },
  {
    num: '25',
    title: 'Deleting Your Data',
    content: `You can delete locally stored Prescron information using the deletion functionality provided by the App. Depending on your Android version and App version, you may also remove local App data through Android's application settings.

Uninstalling Prescron may remove App-specific local data, subject to Android's behavior and any files separately exported or stored outside the App.`,
  },
  {
    num: '39',
    title: 'Changes to This Privacy Policy',
    content: `We may update this Privacy Policy from time to time because of new App functionality, technology changes, legal requirements, third-party services, changes in data practices, or security improvements.

When material changes are made, we will update the Last Updated date at the beginning of this policy.`,
  },
  {
    num: '42',
    title: 'AI Limitations',
    content: `Prescron uses artificial intelligence to analyze and interpret documents. AI-generated results may occasionally contain errors, omissions, or incorrect interpretations.

You should independently verify important information, especially information involving medical decisions, financial decisions, legal matters, government identification, contracts, deadlines, payments, insurance, or safety-critical decisions.

Prescron is a document-intelligence tool and should not be considered a substitute for professional medical, legal, financial, or other professional advice.`,
  },
  {
    num: '45',
    title: 'Contact Us',
    content: `If you have questions, concerns, privacy requests, security reports, or complaints regarding Prescron, contact:

Prescron Privacy Team
cloudloftcreatives@gmail.com

Suggested subjects:
• Prescron Privacy Request
• Prescron Data Deletion Request
• Prescron Security Report
• Prescron Privacy Question`,
  },
]

export default function PrivacyPolicy() {
  useEffect(() => {
    document.title = 'Privacy Policy - Prescron'
    window.scrollTo(0, 0)
  }, [])

  return (
    <div className="min-h-screen bg-surface-bg">
      {/* Header */}
      <header
        className="py-16 px-4"
        style={{ background: 'linear-gradient(135deg, #0B1736 0%, #1769ff 100%)' }}
      >
        <div className="max-w-4xl mx-auto">
          <Link to="/" className="inline-flex items-center gap-2.5 mb-8 opacity-80 hover:opacity-100 transition-opacity">
            <img src="/assets/prescron-icon.png" alt="Prescron" className="h-8 w-8 object-contain" />
            <img src="/assets/prescron-white.png" alt="Prescron" className="h-6 object-contain" style={{ maxWidth: '110px' }} />
          </Link>
          <h1 className="text-3xl sm:text-5xl font-display font-bold text-white mb-4">
            Prescron Privacy Policy
          </h1>
          <div className="space-y-1 text-blue-200 text-sm">
            <p><strong className="text-white">Effective Date:</strong> August 9, 2026</p>
            <p><strong className="text-white">Last Updated:</strong> August 9, 2026</p>
            <p><strong className="text-white">Privacy Contact:</strong>{' '}
              <a href="mailto:cloudloftcreatives@gmail.com" className="underline hover:text-white transition-colors">
                cloudloftcreatives@gmail.com
              </a>
            </p>
          </div>
        </div>
      </header>

      {/* Summary box */}
      <div className="max-w-4xl mx-auto px-4 -mt-6 mb-8 relative z-10">
        <div className="bg-white rounded-2xl border border-brand-blue/20 p-6 shadow-premium-lg">
          <div className="flex items-start gap-3">
            <div className="w-8 h-8 rounded-lg bg-brand-blue/10 flex items-center justify-center flex-shrink-0 mt-0.5">
              <svg className="w-4 h-4 text-brand-blue" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
              </svg>
            </div>
            <div>
              <h2 className="font-display font-bold text-text-primary mb-2">Summary</h2>
              <ul className="space-y-1.5 text-sm text-text-secondary">
                <li>✓ Your documents stay on your device.</li>
                <li>✓ Your AI processing is designed to happen on your device.</li>
                <li>✓ Your document contents are not intended to be uploaded to a cloud AI service for Prescron's core functionality.</li>
                <li>✓ We do not sell your personal information.</li>
                <li>✓ We do not use your private documents for advertising profiles.</li>
                <li>✓ You control what you import, process, share, and delete.</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Sections */}
      <main className="max-w-4xl mx-auto px-4 pb-16 space-y-5">
        {sections.map((section) => (
          <section
            key={section.num}
            id={`section-${section.num}`}
            className="bg-white rounded-2xl border border-surface-border p-7 shadow-premium"
          >
            <h2 className="font-display font-bold text-text-primary text-xl mb-4">
              {section.num}. {section.title}
            </h2>
            {section.bullets ? (
              <ul className="space-y-2">
                {section.bullets.map((b, i) => (
                  <li key={i} className="flex items-start gap-2.5 text-text-secondary text-sm leading-relaxed">
                    <svg className="w-4 h-4 text-brand-teal mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5} aria-hidden="true">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                    <span><strong>{b.split(':')[0]}:</strong>{b.split(':').slice(1).join(':')}</span>
                  </li>
                ))}
              </ul>
            ) : (
              <div className="text-text-secondary text-sm leading-relaxed space-y-3">
                {section.content!.split('\n\n').map((para, i) => (
                  <p key={i}>{para}</p>
                ))}
              </div>
            )}
          </section>
        ))}
      </main>

      {/* Footer */}
      <footer className="border-t border-surface-border py-10 text-center text-sm text-text-muted">
        <div className="space-y-2">
          <p><strong className="text-text-secondary">Prescron</strong></p>
          <p>Privacy Contact: <a href="mailto:cloudloftcreatives@gmail.com" className="text-brand-blue hover:underline">cloudloftcreatives@gmail.com</a></p>
          <p>Last Updated: August 9, 2026</p>
          <div className="pt-2">
            <Link to="/" className="text-brand-blue hover:underline text-sm">← Back to Prescron</Link>
          </div>
        </div>
      </footer>
    </div>
  )
}

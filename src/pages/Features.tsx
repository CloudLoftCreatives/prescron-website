import { useEffect } from 'react'
import AskSection from '../components/AskSection'
import DocumentUnderstanding from '../components/DocumentUnderstanding'
import SemanticSearch from '../components/SemanticSearch'
import ImportantDates from '../components/ImportantDates'
import OrganizeSection from '../components/OrganizeSection'
import DownloadCTA from '../components/DownloadCTA'

export default function Features() {
  useEffect(() => {
    window.scrollTo(0, 0)
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('revealed')
        }
      })
    }, { threshold: 0.1, rootMargin: '0px 0px -50px 0px' })
    
    document.querySelectorAll('.reveal').forEach((el) => {
      observer.observe(el)
    })
    
    return () => observer.disconnect()
  }, [])

  return (
    <main className="pt-[76px]">
      <div className="bg-[#F7F9FC] py-20 lg:py-28 text-center border-b border-[#E2E8F4]">
        <div className="max-w-3xl mx-auto px-6 reveal">
          <p className="text-[11px] font-semibold tracking-[0.2em] uppercase text-[#2563EB] mb-4">Features</p>
          <h1 className="font-display font-bold tracking-tight text-[#111827] mb-6"
              style={{ fontSize: 'clamp(40px, 6vw, 64px)', lineHeight: '1.05' }}>
            Everything you need,<br />built into your device.
          </h1>
          <p className="text-[#475569] text-lg lg:text-xl leading-relaxed font-light">
            Powerful AI and document intelligence designed specifically for the Android platform.
          </p>
        </div>
      </div>
      <AskSection />
      <DocumentUnderstanding />
      <SemanticSearch />
      <ImportantDates />
      <OrganizeSection />
      <DownloadCTA />
    </main>
  )
}

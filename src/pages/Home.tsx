import { useEffect } from 'react'
import Hero from '../components/Hero'
import TrustBar from '../components/TrustBar'
import ProductSection from '../components/ProductSection'
import DocumentUnderstanding from '../components/DocumentUnderstanding'
import ImportantDates from '../components/ImportantDates'
import ExtremeOfflineSection from '../components/ExtremeOfflineSection'
import HowItWorks from '../components/HowItWorks'
import PrivacySection from '../components/PrivacySection'
import ScreenshotGallery from '../components/ScreenshotGallery'
import FAQ from '../components/FAQ'
import FinalCTA from '../components/FinalCTA'

export default function Home() {
  useEffect(() => {
    // Basic scroll reveal initialization
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
    <main>
      <Hero />
      <TrustBar />
      <ProductSection />
      <DocumentUnderstanding />
      <ImportantDates />
      <HowItWorks />
      <PrivacySection />
      <ExtremeOfflineSection />
      <ScreenshotGallery />
      <FAQ />
      <FinalCTA />
    </main>
  )
}

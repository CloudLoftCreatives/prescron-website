import { useEffect } from 'react'
import ScreenshotGallery from '../components/ScreenshotGallery'
import DownloadCTA from '../components/DownloadCTA'

export default function ScreenshotsPage() {
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
      <ScreenshotGallery />
      <DownloadCTA />
    </main>
  )
}

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'

// Pages
import Home from './pages/Home'
import Features from './pages/Features'
import HowItWorksPage from './pages/HowItWorksPage'
import PrivacyPage from './pages/PrivacyPage'
import ScreenshotsPage from './pages/ScreenshotsPage'
import FAQPage from './pages/FAQPage'
import BlogPage from './pages/BlogPage'
import BlogPostPage from './pages/BlogPostPage'

function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <div className="flex-1">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/features" element={<Features />} />
            <Route path="/how-it-works" element={<HowItWorksPage />} />
            <Route path="/privacy" element={<PrivacyPage />} />
            <Route path="/screenshots" element={<ScreenshotsPage />} />
            <Route path="/faq" element={<FAQPage />} />
            <Route path="/blog" element={<BlogPage />} />
            <Route path="/blog/:slug" element={<BlogPostPage />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </Router>
  )
}

export default App

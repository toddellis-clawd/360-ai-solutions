import { useEffect } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Services from './components/Services'
import HowItWorks from './components/HowItWorks'
import Demo from './components/Demo'
import About from './components/About'
import Contact from './components/Contact'
import Footer from './components/Footer'

function useScrollReveal() {
  useEffect(() => {
    const selectors = '.reveal, .reveal-left, .reveal-right'
    const elements = document.querySelectorAll(selectors)

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible')
            observer.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.1, rootMargin: '0px 0px -40px 0px' }
    )

    elements.forEach((el) => observer.observe(el))
    return () => observer.disconnect()
  }, [])
}

function Divider() {
  return (
    <div
      style={{
        maxWidth: '1200px',
        margin: '0 auto',
        padding: '0 1.5rem',
      }}
    >
      <div className="section-divider" />
    </div>
  )
}

export default function App() {
  useScrollReveal()

  return (
    <div style={{ minHeight: '100vh', background: '#050d1a' }}>
      <Navbar />
      <main>
        <Hero />
        <Divider />
        <Services />
        <Divider />
        <HowItWorks />
        <Divider />
        <Demo />
        <About />
        <Divider />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}

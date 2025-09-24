import { Home } from './pages/Home'
import { Privacy } from './pages/Privacy'
import { Terms } from './pages/Terms'
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom'
import { Header } from './components/layout/Header'
import { Footer } from './sections/Footer'

export const LandingApp = () => {
  return (
    <BrowserRouter basename={import.meta.env.BASE_URL}>
      <a href="#main" className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-50 bg-white text-slate-900 px-4 py-2 rounded-md">Skip to content</a>
      <Header />
      <main id="main">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/privacy" element={<Privacy />} />
          <Route path="/terms" element={<Terms />} />
          <Route path="*" element={<Home />} />
        </Routes>
      </main>
      <Footer />
    </BrowserRouter>
  )
}